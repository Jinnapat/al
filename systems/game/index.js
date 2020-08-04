import "../style/style.scss";
import "../style/loader.css";
import "../leaflet/leaflet-sidebar.css";
import "../leaflet/leaflet-sidebar.js";
import { initLeaflet, initBasic, toggleFullscreen }  from "./setting.js";
import { initQuest, addMarker, createInfo, createChat }  from "./quest.js";
import { initForum, createPost }  from "./forum.js";
import { initProfile, gotoProfile, addStory, addImage } from "./profile.js"
import { postTo } from "./post.js";
import { initManual } from "./manual.js";
import { initWrite } from "./add.js";

(function(){
    if (!navigator.geolocation) {
        alert("Geolocation is not available in your browser.");
    } else {
        console.log("Geolocation is available");
    }
    
    var map = initLeaflet();
    initBasic();
    initManual();
    initProfile();
    initWrite();
    initQuest();
    initForum();
    
    var markers = new L.LayerGroup();
    markers.addTo(map);
    addMarker(map, markers, 18.79377, 98.98940, "วัดเชียงมั่น", "วัดแรกของเชียงใหม่", "123");
    
    for (var i = 1; i < 10; i++) {
        addImage("image/Page_0" + i + ".png");
    }
    
    /*
    var search_list_el = document.getElementById("search-list");
    for (var i = 0; i < 10; i++) {
        var forum_el = createPost("หัวข้อที่กำลังจะทำคือการเดินไปหาอดีตที่ไม่มีวัน " + i, 
            "ด้านในคืออะไรก็ได้ที่ไม่ได้ทำให้ด้านในคืออะไรก็ได้ที่ไม่ได้ทำให้ด้านในคืออะไรก็ได้ที่ไม่ได้ทำให้ด้านในคืออะไรก็ได้ที่ไม่ได้ทำให้ด้านในคืออะไรก็ได้ที่ไม่ได้ทำให้",
            "tes esr setessse",
            "icon/user.png",
            "12.15PM",
            45658);
        var look_el = document.createElement("a");
        look_el.innerHTML = "see more";
        look_el.addEventListener("click", function () {
            document.getElementById("forum-list-pane").style.display = "block";
        });
        forum_el.appendChild(look_el);
        search_list_el.appendChild(forum_el);
    }
    */
}());
