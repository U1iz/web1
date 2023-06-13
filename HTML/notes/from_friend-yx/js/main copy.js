function newTab(e, location) {
    e.flag = 0;
    e.onclick = function () {
        if (location == 'javascript:;') {
        } else {
            e.tab = window.open(location, '', 'height=525px,width=611,scrollbars=yes,status=yes');
            e.flag++;
            console.log(e.tab == null);
            console.log(e.flag);
            if (e.flag >= 2) {
                e.flag--;
                (e.tab).close();
                console.log(e.flag);
            }
        }
    }
};

(function () {
    var cont = document.getElementById('typeContent');
    var links = document.querySelectorAll('h1');
    var win_h = document.documentElement.clientHeight;
    //cont.style.top = cont.clientHeight / 2 + 'px';
    window.addEventListener('resize', function () {
        cont.style.top += - cont.clientHeight + 'px';
        console.log(win_h);
    });

    var tab;
    // var type = 'local';
    var type = 'web';
    for (var i = 0; i < links.length; i++) {
        switch (i) {
            case 0:
                tab = 'source/用语得体题.html';
                break;
            case 1:
                tab = 'source/用语得体题.pdf';
                break;
            case 2:
                tab = 'source/复句主要有八种类型.html';
                break;
            case 3:
                tab = 'source/复句主要有八种类型.pdf';
                break;
            case 4:
                tab = 'source/to do和doing.html';
                break;
            case 5:
                tab = 'source/to do和doing.pdf';
                break;
        }
        newTab(cont[i], tab);
    }
    cont.addEventListener('click', function () {
    });
}());

var phoneFontSizes = 16;
var PCFontSizes = 32;

(function () {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || bIsIpad) {
        document.documentElement.style.fontSize = phoneFontSizes + 'px';
    } else {
        document.documentElement.style.fontSize = PCFontSizes + 'px';
    }

})();

/*
var url = "c.biancheng.net";  //要打开的网页地址
var features = "height=500, width=800, top=100, left=100, toolbar=no, menubar=no,
    scrollbars=no,resizable=no, location=no, status="no";  //设置新窗口的特性
//动态生成一个超链接
document.write('<a href="c.biancheng.net" target="newW">切换到C语言中文网首页</a>');
var me = window.open(url, "newW", featrues);  //打开新窗口
setTimeout (function () {  //定时器
    if (me.closed) {
        console.log("创建的窗口已经关闭。");
    } else {
        me.close();
    }
}, 5000);  //半秒钟之后关闭该窗口
 */