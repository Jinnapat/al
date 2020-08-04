import { clear_child } from "./setting.js"

function createPosterData(user_img, username) {
    var poster_data_el = document.createElement("div");
    var user_img_el = document.createElement("img");
    var username_el = document.createElement("b");
    
    user_img_el.src = user_img;
    username_el.innerHTML = username;
    
    poster_data_el.appendChild(user_img_el);
    poster_data_el.appendChild(username_el);
    return poster_data_el;
}

export function createPost (title, description, username, user_img, time, forumId) {
    var forum_el = document.createElement("div");
    var title_el = document.createElement("h4");
    var last_post_el = document.createElement("p");
    var time_el = document.createElement("p");
    var poster_data_el = createPosterData(user_img, username);
    
    forum_el.classList.add("w3-border");
    forum_el.classList.add("w3-margin-bottom");
    forum_el.classList.add("w3-padding-small");
    forum_el.classList.add("forum-box");
    last_post_el.classList.add("w3-padding-small");
    last_post_el.classList.add("w3-margin-bottom");
    title_el.classList.add("w3-padding-small");
    
    time_el.innerHTML = time;
    title_el.innerHTML = title;
    last_post_el.style.wordWrap = "break-word";
    last_post_el.innerHTML = description;
    
    forum_el.appendChild(title_el);
    forum_el.appendChild(last_post_el);
    forum_el.appendChild(time_el);
    forum_el.appendChild(poster_data_el);
    
    return forum_el;
}

export function initForum () {
    var create_forum_pane_el = document.getElementById("create-forum-pane");
    var post_list_el = document.getElementById("post-list-pane");
    var forum_name_el = document.getElementById("forum-name");
    var forum_post_el = document.getElementById("forum-post");
    
    document.getElementById("create-forum-btn").addEventListener("click", function() {
        create_forum_pane_el.style.display = "block";
    });
    
    document.getElementById("save-forum-btn").addEventListener("click", function() {
        var d = new Date();
        var now = d.toLocaleString();
        var post_el = createPost (forum_name_el.value, forum_post_el.value, "AL Team", "icon/al_logo.png", now, 1);
        document.getElementById("post-list").appendChild(post_el);
        document.getElementById("post-list").appendChild(document.createTextNode("ยังไม่มีคำตอบ"));
        post_list_el.style.display = "block";
        create_forum_pane_el.style.display = "none";
    });
}
