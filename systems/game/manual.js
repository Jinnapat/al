export function initManual() {
    var category_el = document.getElementById("category-select");
    var topic_el = document.getElementById("topic-select");
    var choice_els = topic_el.children;
    var content_els = document.getElementsByClassName("manual-content");
    
    category_el.options.selectedIndex = 0;
    topic_el.options.selectedIndex = 0;
    
    for (var i = 0; i < topic_el.length; i++) {
        topic_el[i].style.display = "none";
    }
    
    for (var i = 0; i < content_els.length; i++) {
        content_els[i].style.display = "none";
    }
    
    category_el.addEventListener("change", function () {
        for (var i = 0; i < choice_els.length; i++) {
            var this_el = choice_els[i];
            if (this_el.classList.contains(this.value) || this_el.classList.contains("base")) {
                this_el.style.display = "block";
            } else {
                this_el.style.display = "none";
            }
            topic_el.options.selectedIndex = 0;
        }
    });
    
    topic_el.addEventListener("change", function () {
        for (var i = 0; i < content_els.length; i++) {
            var this_el = content_els[i];
            if (this_el.id == this.value) {
                this_el.style.display = "block";
            } else {
                this_el.style.display = "none";
            }
        }
    });
}
