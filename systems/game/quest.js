var loader = document.getElementById("loader");
var textbox = document.getElementById("sendBox");
var whitespace_el = document.getElementById("whitespace");
var press_el = document.getElementById("press");

function clearMarkers(layer) {
    layer.clearLayers();
}

function createUserTitle(speaker, icon) {
    var user_el = document.createElement("div");
    var icon_el = document.createElement("img");
    var name_el = document.createElement("div");
    
    icon_el.classList.add("icon");
    icon_el.classList.add("w3-circle");
    icon_el.src = icon;
    name_el.innerHTML = speaker;
    name_el.classList.add("name-tag");
    user_el.classList.add("user-container");
    
    user_el.appendChild(icon_el);
    user_el.appendChild(name_el);
    return user_el;
}

export function createChat(last_speaker, speaker, side, content, icon) {
    var chat_el = document.createElement("div");
    var content_el = document.createElement("div");
    var user_el = null;
    
    if (last_speaker != speaker) {
        user_el = createUserTitle(speaker, icon);
        chat_el.style.marginTop = "40px";
        chat_el.appendChild(user_el);
    } else {
        chat_el.style.marginTop = "3px";
    }
    
    content_el.innerHTML = content;
    content_el.classList.add("message-box");
    chat_el.classList.add("chat");
    chat_el.classList.add(side);
    chat_el.appendChild(content_el);
    return [speaker, chat_el, user_el, content_el];
}

export function createInfo (content) {
    var info_el = document.createElement("div");
    var content_el = document.createElement("div");
    
    content_el.innerHTML = content;
    content_el.classList.add("message-box");
    content_el.classList.add("w3-black");
    info_el.classList.add("info-box");
    info_el.appendChild(content_el);
    return ["", info_el, content_el];
}

function createRoute(from, to) {
    var route = L.Routing.control({
        serviceUrl: "https://www.ancestral-lens.tk:8080/route/v1",
        addWaypoints: false,
        draggableWaypoints: false,
        createMarker: function() { return null; },
        collapsible: true,
        collapseBtnClass: "my-collapse-btn fa",
        useHints: false,
        waypoints: [
            L.latLng(from),
            L.latLng(to)
        ]
    });
    return route;
}

function createTargetBox (lat, lon) {
    var bounds = [[lat - 0.0005, lon - 0.0005], [lat + 0.0005, lon + 0.0005]];
    var box = L.rectangle(bounds, {color: "#ff7800", weight: 1})
    return box;
}

function arrived() {

}

function createStartLink (map, layer, lat, lon) {
    var link = document.createElement("a");
    var pressed = false;
    link.appendChild(document.createTextNode("เริ่มเดินทาง"));
    link.addEventListener("click", function () {
        if (!pressed) {
            pressed = true;
            navigator.geolocation.getCurrentPosition(function (position) {
                var route = createRoute([position.coords.latitude, position.coords.longitude], [lat, lon]);
                var box = createTargetBox(lat, lon);
                clearMarkers(layer);
                route.addTo(map);
                layer.addLayer(box);
            });
        }
    });
    
    return link;
}

export function addMarker(map, layer, lat, lon, name, description, storyId) {
    var popupContent = document.createElement("div");
    var name_el = document.createElement("b");
    var description_el = document.createElement("p");
    var link = createStartLink(map, layer, lat, lon);
    var marker = L.marker([lat, lon]);
    
    name_el.appendChild(document.createTextNode(name));
    description_el.appendChild(document.createTextNode(description));
    description_el.style.margin = "0";
    popupContent.style.textAlign = "center";
    
    popupContent.appendChild(name_el);
    popupContent.appendChild(description_el);
    popupContent.appendChild(link);
    
    marker.bindPopup(popupContent).openPopup();
    marker.addTo(layer);
    
    return marker;
}

function getStory(storyId, callback) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var story_list = JSON.parse(xhttp.responseText);
            callback(story_list);
        }
    };
    xhttp.open("POST", "get_story", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("storyId=" + storyId);
}

function displayLine(last_speaker, current, story_list, callback) {
    var line = story_list[current];
    var chatpane_el = document.getElementById("story-message");
    var new_el;
    if (chatpane_el.childNodes.length >= 20) {
        chatpane_el.firstChild.remove();
    }

    if (line.type == "chat") {
        [last_speaker, new_el] = createChat(last_speaker, line.speaker, line.side, line.content, line.icon);
    } else if (line.type == "info") {
        [last_speaker, new_el] = createInfo(line.content);
    }
    
    chatpane_el.insertBefore(new_el, whitespace_el);
    chatpane_el.scrollTop = chatpane_el.scrollHeight;
    if (line.condition == "delay") {
        var duration;
        if (line.condition_setting == "") {
            duration = Math.min(line.content.length * 100, 4000);
        } else {
            duration = parseInt(line.condition_setting) * 1000;
        }
        loader.style.display = "block";
        press_el.style.display = "none";
        setTimeout(function () {
            loader.style.display = "none";
            displayLine(last_speaker, current + 1, story_list, callback)
        }, duration);
    } else {
        press_el.style.display = "block";
        callback(current, last_speaker);
    }
}

export function initQuest() {
    getStory(1, function (story_list) {
        var last_speaker = "";
        var current = 0;
        var wait = true;

        function progress() {
            wait = true;
            displayLine(last_speaker, current + 1, story_list, function(last_current, this_last_speaker) {
                current = last_current;
                last_speaker = this_last_speaker;
                wait = false;
            });
        }
        
        progress();
        
        document.getElementById("sendBtn").addEventListener("click", function() {
            var line = story_list[current];
            if (!wait) {
                if (line.condition == "pressed") {
                    progress();
                } else if (line.condition == "answered") {
                    var text = textbox.value;
                    textbox.value = "";
                    if (text == line.condition_setting) {
                        progress();
                    } else {
                        textbox.classList.add("w3-red");
                        setTimeout(function () {
                            textbox.classList.remove("w3-red");
                        }, 200);
                    }
                }
            }
        });
        
    });
}

