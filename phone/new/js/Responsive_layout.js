var win = window.screen;
var w = document.documentElement;

var is_lie = false;
var m_is_pc = false;
var is_pc = false;


var nav_cont = document.getElementById('nav_container');
var banner_cont = document.getElementById('banner_container');
var sidebar = document.getElementById('sidebar');
var cont = document.getElementById('container');

(function () {
    function s() {
        console.log('------------------------------------------------');
        console.log('window.screen.availHeight == ' + win.availHeight);
        console.log('window.screen.availWidth == ' + win.availWidth);

        console.log('------------------------------------------------');
        console.log('document.documentElement.clientHeight == ' + w.clientHeight);
        console.log('document.documentElement.clientWidth == ' + w.clientWidth);

        console.log('------------------------------------------------');
        console.log('document.documentElement.offsetHeight == ' + w.offsetHeight);
        console.log('document.documentElement.offsetWidth == ' + w.offsetWidth);

        console.log('------------------------------------------------');
        console.log('document.documentElement.offsetTop == ' + w.offsetTop);
        console.log('document.documentElement.offsetLeft == ' + w.offsetLeft);
    }
    s();
    var i = 0;
    window.addEventListener('resize', function () {
        i++;
        console.log("第" + i + '次显示');
        s();
    })
})();

(function () {
    function typeOfEquipment() {
        var Aspect_ratio = win.availWidth / win.availHeight;
        if (Aspect_ratio > 1) {
            window.is_lie = true;
            if (win.availWidth >= 720) {
                if (Aspect_ratio <= 2.666666666666667 && Aspect_ratio >= 1.333333333333333) {
                    window.m_is_pc = true;
                    if (Aspect_ratio == 1.7777777777777777 || Aspect_ratio == 1.333333333333333) {
                        window.is_pc = true;
                    }
                }
            }
        }
    }
    typeOfEquipment()
})();
(function () {
    if (is_lie) {
        console.log("横屏");
    } else {
        console.log("竖屏");
    }
    if(m_is_pc){
        console.log("may");
    }
    if(is_pc){
        console.log("使用PC端浏览");
    } else {
        console.log("使用移动端浏览");
    }
}());