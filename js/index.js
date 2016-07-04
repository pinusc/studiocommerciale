function load(component) {
    hideAll();
    var elem = $('#page_' + component);
    elem.css("display", "block");
    smoothScroll.animateScroll("#page_" + component);
}

function hideAll() {
    var elem = $('.page');
    for (var i = 0; i < elem.length; ++i) {
        var item = elem[i];  
        if(item.id != "main")
            item.style.display = "none";
    }
}

$(document).ready(function () {
});
