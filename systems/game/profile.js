import { createPost } from "./forum.js";
import { clear_child, uploadImage } from "./setting.js"

export function addImage(url) {
    var img_el = document.createElement("img");
    img_el.src = url;
    img_el.classList.add("w3-margin-bottom");
    img_el.classList.add("w3-border");
    document.getElementById("work-pane").appendChild(img_el);
}

export function addStory(title, description) {
    var story_el = document.createElement("div");
    var title_el = document.createElement("h5");
    var description_el = document.createElement("p");
    story_el.classList.add("w3-margin-bottom");
    story_el.classList.add("w3-border");
    title_el.innerHTML =title;
    description_el.innerHTML = description;
    story_el.appendChild(title_el);
    story_el.appendChild(description_el);
    document.getElementById("work-pane").appendChild(story_el);
}

export function createUserBox(username, icon) {
    var user_el = document.createElement("div");
    var container_el = document.createElement("div");
    var icon_el = document.createElement("img");
    var text_container_el = document.createElement("div");
    var name_el = document.createElement("p");
    
    user_el.classList.add("w3-border");
    user_el.classList.add("w3-margin-bottom");
    user_el.classList.add("w3-row");
    container_el.classList.add("w3-display-container");
    container_el.classList.add("w3-col");
    container_el.classList.add("s3");
    container_el.style.height = "100px";
    text_container_el.classList.add("w3-col");
    text_container_el.classList.add("s9");
    icon_el.classList.add("w3-display-middle");
    icon_el.classList.add("icon");
    
    icon_el.src = icon;
    name_el.appendChild(document.createTextNode(username));
    
    container_el.appendChild(icon_el);
    text_container_el.appendChild(name_el);
    user_el.appendChild(container_el);
    user_el.appendChild(text_container_el);
    return user_el;
}

export function gotoProfile(userId) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("POST", "ajax_info.txt", true);
    xhttp.send();
}

export function initProfile() {
    var following_pane_el = document.getElementById("following-pane");
    var followers_pane_el = document.getElementById("followers-pane");
    var posts_pane_el = document.getElementById("posts-pane");
    var image_pane_el = document.getElementById("image-pane");
    
    var following_content_el = document.getElementById("following-content");
    var followers_content_el = document.getElementById("followers-content");
    var posts_content_el = document.getElementById("posts-content");
    
    var a = 10;
    
    for (var i = 0; i < a; i++) {
            following_content_el.appendChild(createUserBox(1));
            followers_content_el.appendChild(createUserBox(1));
            posts_content_el.appendChild(createPost ("test", "e ggw33vw3 gwvgw3vwv3", "jareg wrg", "icon/user.png", "15.00PM", 1234));
    }
    
    document.getElementById("image-btn").addEventListener("click", function () {
        image_pane_el.style.display = "block";
    });
    
    document.getElementById("image-confirm-btn").addEventListener("click", function () {
        uploadImage("profile-pick", function() {
            console.log("pass");
        });
    });
    
    document.getElementById("following-btn").addEventListener("click", function () {
        following_pane_el.style.display = "block";
    });
    
    document.getElementById("followers-btn").addEventListener("click", function () {
        followers_pane_el.style.display = "block";
    });
    
    document.getElementById("posts-btn").addEventListener("click", function () {
        posts_pane_el.style.display = "block";
    });
    
    document.getElementById("log-out-btn").addEventListener("click", function () {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText == "loggedOut") {
                    location.reload(); 
                }
            }
        };
        xhttp.open("POST", "logout", true);
        xhttp.send();
    });
}
