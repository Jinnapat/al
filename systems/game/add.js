import { createChat, createInfo }  from "./quest.js";
import { createUserBox } from "./profile.js";

var add_message_list_el = document.getElementById("add-message-list");
var add_message_tool_el = document.getElementById("add-message-tool");
var create_character_pane_el = document.getElementById("create-character-pane");
var edit_character_pane_el = document.getElementById("edit-character-pane");
var edit_message_pane_el = document.getElementById("edit-message-pane");
var edit_condition_pane_el = document.getElementById("edit-condition-pane");

var character_icon_el = document.getElementById("character-select");
var edit_message_text_el = document.getElementById("edit-message-text");
var character_name_el = document.getElementById("character-name");

var select_icon = "";
var select_character = {};
var character_list = [];
var story_line = [];
var current_icon = {};
var current_box = {};

function getImageList(userId, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var image_list = JSON.parse(xhttp.responseText);
            callback(image_list);
        }
    };
    xhttp.open("POST", "get_image", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("storyId=" + userId);
}

function displayImage(el_id) {
    var image_select_el = document.getElementById(el_id);
    
    getImageList(11, function (image_list) {
        for (var i = 0; i < image_list.length; i++) {
            var img_container_el = document.createElement("div");
            var img_el = document.createElement("img");
            
            img_container_el.classList.add("w3-col");
            img_container_el.classList.add("s6");
            img_container_el.classList.add("image-choice");
            img_el.classList.add("w3-border-blue");
            img_el.src = image_list[i].url;
            
            img_el.addEventListener("click", function () {
                select_icon = this.src;
                for (var i = 0; i < image_select_el.children.length; i++) {
                    image_select_el.children[i].firstChild.classList.remove("w3-border");
                }
                this.classList.add("w3-border");
            });
            
            img_container_el.appendChild(img_el)
            image_select_el.appendChild(img_container_el);
        }
        
    });
}

function addCharacter(icon_url) {
    var character_list_el = document.getElementById("character-list");
    var container_el = document.createElement("div");
    var icon_el = document.createElement("img");
    container_el.classList.add("w3-display-container");
    container_el.classList.add("character-container");
    icon_el.classList.add("icon");
    icon_el.classList.add("w3-circle");
    icon_el.classList.add("w3-display-middle");
    icon_el.src = icon_url;
    
    container_el.appendChild(icon_el);
    character_list_el.appendChild(container_el);
}

function createSelectMap() {
    var map = L.map("map-select").setView([18.7883, 98.9855], 13);
    var marker = L.marker([18.7883, 98.9855]);
    marker.addTo(map);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>"}).addTo(map);
    map.on("click", function(e) {
        marker.setLatLng(e.latlng);
    });
    return [map, marker];
}

function initCreateCharacter() {
    displayImage("character-icon-select");
    
    document.getElementById("add-character").addEventListener("click", function() {
        create_character_pane_el.style.display = "block";
    });
    
    document.getElementById("save-character-btn").addEventListener("click", function() {
        if (select_icon != "") {
            var character_el = createUserBox(character_name_el.value, select_icon);
            addCharacter(select_icon);
            character_el.name = character_name_el.value;
            character_el.select_icon = select_icon;
            character_name_el.value = "";
            character_el.addEventListener("click", function() {
                select_character.name = this.name;
                select_character.icon = this.select_icon;
                for (var i = 0; i < character_icon_el.children.length; i++) {
                    character_icon_el.children[i].classList.remove("w3-border-blue");
                }
                character_el.classList.add("w3-border-blue")
            });
            character_icon_el.appendChild(character_el);
        }
        create_character_pane_el.style.display = "none";
    });
}

function createTools() {
    var delete_el = document.createElement("span");
    delete_el.classList.add("fa");
    delete_el.classList.add("fa-trash");
    delete_el.classList.add("edit-tool-icon");
    
    var switch_el = document.createElement("span");
    switch_el.classList.add("fa");
    switch_el.classList.add("fa-exchange-alt");
    switch_el.classList.add("edit-tool-icon");
    
    var condition_el = document.createElement("span");
    condition_el.classList.add("fa");
    condition_el.classList.add("fa-tasks");
    condition_el.classList.add("edit-tool-icon");
    
    condition_el.addEventListener("click", function() {
        edit_condition_pane_el.style.display = "block";
    });
        
    return [delete_el, switch_el, condition_el];
}

function initCreateChat() {
    document.getElementById("add-chat-btn").addEventListener("click", function() {
        var [delete_el, switch_el, condition_el] = createTools();
        
        var [_, post_el, user_el, content_el] = createChat("", "กดเพื่อเปลี่ยนผู้พูด", "left", "กดเพื่อเปลี่ยนข้อความ", "icon/user.png");
        user_el.addEventListener("click", function() {
            current_icon = user_el;
            edit_character_pane_el.style.display = "block";
        });
        
        content_el.addEventListener("click", function() {
            current_box = content_el;
            edit_message_pane_el.style.display = "block";
        });
        
        delete_el.addEventListener("click", function() {
            add_message_list_el.removeChild(post_el);
        });
        
        switch_el.addEventListener("click", function() {
            if (post_el.classList.contains("left")) {
                post_el.classList.remove("left");
                post_el.classList.add("right");
            } else {
                post_el.classList.remove("right");
                post_el.classList.add("left");
            }
        });
        
        post_el.appendChild(delete_el);
        post_el.appendChild(switch_el);
        post_el.appendChild(condition_el);
        add_message_list_el.insertBefore(post_el, add_message_tool_el);
    });
}

function initCreateInfo() {
    document.getElementById("add-info-btn").addEventListener("click", function() {
        var [delete_el, _, condition_el] = createTools();
        
        var [_, info_el, content_el] = createInfo("กดเพื่อเปลี่ยนข้อความ");
        content_el.addEventListener("click", function() {
            current_box = content_el;
            edit_message_pane_el.style.display = "block";
        });
        
        content_el.addEventListener("click", function() {
            current_box = content_el;
            edit_message_pane_el.style.display = "block";
        });
        
        delete_el.addEventListener("click", function() {
            add_message_list_el.removeChild(info_el);
        });
        
        info_el.appendChild(delete_el);
        info_el.appendChild(condition_el);
        add_message_list_el.insertBefore(info_el, add_message_tool_el);
    });
}

export function initWrite() {
    var [map, marker] = createSelectMap();
    
    document.getElementById("write-btn").addEventListener("click", function () {
        document.getElementById("create-story-pane").style.display = "block";
        map.invalidateSize();
    });
    
    document.getElementById("edit-story-btn").addEventListener("click", function () {
        document.getElementById("write-pane").style.display = "block";
    });
    
    document.getElementById("edit-character-btn").addEventListener("click", function() {
        if (select_character != {}) {
            current_icon.firstChild.src = select_character.icon;
            current_icon.lastChild.innerHTML = select_character.name;
            edit_character_pane_el.style.display = "none";
        }
    });
    
    document.getElementById("edit-message-btn").addEventListener("click", function() {
        current_box.innerHTML = edit_message_text_el.value;
        edit_message_text_el.value = "";
        edit_message_pane_el.style.display = "none";
    });
    
    document.getElementById("edit-condition-btn").addEventListener("click", function() {
        //current_box.innerHTML = edit_message_text_el.value;
        edit_condition_pane_el.style.display = "none";
    });
    
    initCreateCharacter();
    initCreateChat();
    initCreateInfo();
}
