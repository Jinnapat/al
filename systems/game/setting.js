export function toggleFullscreen() {
    var elem = document.documentElement;
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

export function initLeaflet() {
    var map = L.map("mymap").setView([18.7883, 98.9855], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {attribution: "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a>"}).addTo(map);
    L.control.locate().addTo(map);

    var sidebar = L.control.sidebar({
        autopan: false,
        closeButton: true, 
        container: "sidebar",
        position: "right"
    }).addTo(map)

    sidebar.addPanel({
        id: "profile",
        tab: "<i class=\"fa fa-user\"></i>",
        pane: document.getElementById("profile-pane"),
        title: "Your Profile",
        position: "top"
    });

    sidebar.addPanel({
        id: "manual",
        tab: "<i class=\"fa fa-book\"></i>",
        pane: document.getElementById("manual-pane"),
        title: "Manual",
        position: "top"
    });
    
    sidebar.addPanel({
        id: "forum",
        tab: "<i class=\"fa fa-comment\"></i>",
        pane: document.getElementById("forum-pane"),
        title: "Forum",
        position: "top"
    });
    
    sidebar.addPanel({
        id: "fullscreenBtn",
        tab: "<i class=\"fa fa-expand\"></i>",
        button: toggleFullscreen
    });
    
    sidebar.addPanel({
        id: "story",
        tab: "<i class=\"fa fa-compass\"></i>",
        pane: document.getElementById("chat-pane"),
        title: "Story",
        position: "bottom"
    });

    sidebar.on("content", function(e) {
        var children = document.getElementsByClassName("leaflet-sidebar-content")[0].childNodes
        for (var i = 0; i < children.length; i++) {
            if (children[i].id == e.id) {
                children[i].style.visibility = "visible";
            } else {
                children[i].style.visibility = "hidden";
            }
        }
    });
    
    return map;
}

function closePanes() {
    var pane_els = document.getElementsByClassName("pane");
    for (var i = 0; i < pane_els.length; i++) {
        pane_els[i].style.display = "none";
    }
}

function closeSmallPanes() {
    var pane_els = document.getElementsByClassName("pane-small");
    for (var i = 0; i < pane_els.length; i++) {
        pane_els[i].style.display = "none";
    }
}

export function clear_child(el) {
    while (el.lastChild) {
        el.removeChild(el.lastChild);
    }
}

export function uploadImage(elid, callback) {
    var upload_el = document.getElementById(elid);
    var formData = new FormData(upload_el);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            if(this.responseText == "uploaded") {
                callback();
            }
        }
    };
    xhttp.open("POST", "upload", true);
    xhttp.send(formData);
}

export function initBasic() {
    var close_els = document.getElementsByClassName("closeBtn");
    var close_small_els = document.getElementsByClassName("closeSmallBtn");
    
    for (var i = 0; i < close_els.length; i++) {
        close_els[i].addEventListener("click", closePanes);
    }
    
    for (var i = 0; i < close_small_els.length; i++) {
        close_small_els[i].addEventListener("click", closeSmallPanes);
    }
}
