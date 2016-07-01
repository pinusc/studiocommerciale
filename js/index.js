function load(component) {
    hideAll();
    var elem = document.getElementById('page_' + component);
    elem.style.display = "block";
    smoothScroll.animateScroll("#page_" + component);
}

function hideAll() {
    var elem = document.getElementsByClassName('page');
    for (var i = 0; i < elem.length; ++i) {
        var item = elem[i];  
        if(item.id != "main")
            item.style.display = "none";
    }
}
