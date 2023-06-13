var win = window.screen;
var w = document.documentElement;
var body = document.body;

var nav_cont = document.getElementById('nav_container');
var banner_cont = document.getElementById('banner_container');
var sidebar = document.getElementById('sidebar');
var cont = document.getElementById('container');

function setSize(e, W, H) {
    e.style.width = W + 'px';
    if (H) {
        e.style.height = H + 'px';
    }
}

(function () {
    function set_nav_style() {
        setSize(body, w.clientWidth);
        body.style.minWidth = 240 + 'px';
        body.style.maxWidth = 640 + 'px';

        body.style.left = w.clientWidth / 2 - body.offsetWidth / 2 + 'px';
    };

    function set_banner_style() {
        setSize(banner_cont, body.clientWidth, w.clientHeight * 0.24);
        banner_cont.style.minHeight = 200 + 'px';
        banner_cont.style.maxHeight = 240 + 'px';
    };

    function set_sidebar_style() {
        setSize(sidebar, body.clientWidth * 0.6, w.clientHeight);
        sidebar.style.left = -sidebar.offsetWidth + 'px';
    }

    function set_cont_style() {
        setSize(cont, body.clientWidth);
        cont.style.top = banner_cont.clientHeight + 'px';
    }
    set_nav_style();
    set_banner_style();
    set_sidebar_style();
    set_cont_style();
    window.addEventListener('resize', function () {
        set_nav_style();
        set_banner_style();
        set_sidebar_style();
        set_cont_style();
    });
}());