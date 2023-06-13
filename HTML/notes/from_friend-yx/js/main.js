
window.addEventListener('DOMContentLoaded', function () {
    var cont = document.getElementById('typeContent');
    var links = cont.querySelectorAll('h1');

    function newTab(e, location) {
        e.onclick = function () {
            if (location == 'javascript:;') {
            } else {
                e.tab = window.open(location, '', 'height=525px,width=611,scrollbars=yes,status=yes');
            }
        }
    };

    var tab, type;
    /*     if (window.navigator.onLine) {
            // alert('网络连接中');
            type = 'web';
    
        } else {
            // alert('网络断开中');
            type = 'local';
        } */
    type = 'web';
    tabChanged()

    function newStyle() {
        for (var i = 0; i < links.length; i++) {
            links[1].innerText = '用语得体\n(pdf)';
            links[2].innerText = '复句主要\n八种类型';
            links[3].innerText = '复句主要\n八种类型\n(pdf)';
            links[4].innerText = 'to do\n和\ndoing';
            links[5].innerText = 'to do\n和\ndoing\n(pdf)';
        }
    }
    function tabChanged() {
        for (var i = 0; i < links.length; i++) {
            if (type == 'web') {
                switch (i) {
                    case 0:
                        tab = 'http://res1433223.net3v.net/Html/notes/from_friend-yx/source/用语得体题.html';
                        break;
                    case 1:
                        tab = 'http://res1433223.net3v.net/Html/notes/from_friend-yx/source/用语得体题.pdf';
                        break;
                    case 2:
                        tab = 'http://res1433223.net3v.net/Html/notes/from_friend-yx/source/复句主要有八种类型.html';
                        break;
                    case 3:
                        tab = 'http://res1433223.net3v.net/Html/notes/from_friend-yx/source/复句主要有八种类型.pdf';
                        break;
                    case 4:
                        tab = 'http://res1433223.net3v.net/Html/notes/from_friend-yx/source/to do和doing.html';
                        break;
                    case 5:
                        tab = 'http://res1433223.net3v.net/Html/notes/from_friend-yx/source/to do和doing.pdf';
                        break;
                    case links.length - 1:
                        tab = 'javascript:;';
                        break;
                }
            } else if (type == 'local') {
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
                    case links.length - 1:
                        tab = 'javascript:;';
                        break;
                }
            }
            newTab(links[i], tab);
        }
    }
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
            wrap.style.top = '80%';
            newStyle();
        } else {
            document.documentElement.style.fontSize = PCFontSizes + 'px';
        }

    })();
    var btn = document.getElementsByTagName('button')[0];
    var uin = document.getElementsByTagName('input')[0];
    btn.onclick = function () {
        // var temp = uin.placeholder;
        var temp = 'web/local';
        uin.value = '';
        console.log(uin.value);
        if (uin.value == 'web' | uin.value == 'local') {
            type = uin.value;
            uin.value = '';
            tabChanged();
            uin.placeholder = '成功应用';
            setTimeout(function () { uin.placeholder = temp }, 1200);
        } else {
            uin.placeholder = '请输入特定参数';
            setTimeout(function () { uin.placeholder = temp }, 1000);
        }
        console.log(type);
    }
    if (document.getElementById('wrap').querySelectorAll('li')[2]) {
        setTimeout(function () { document.getElementById('wrap').querySelectorAll('li')[2].remove() }, 3000);
    }
    window.addEventListener('keyup', function (e) {
        if (e.keyCode == 13) {
            btn.click();
        }
    })
})