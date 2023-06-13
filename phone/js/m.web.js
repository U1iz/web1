// contextmenu 禁用右键菜单
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
})
// selectstart 禁止选中文字 
document.addEventListener('selectstart', function (e) {
    e.preventDefault();

})

var hCho = document.getElementById('headChoose');
// PC端
function asidePCLeft() {
    // var resultFir = parseFloat(window.screen.availWidth / 2);
    // console.log(resultFir + 'bbbbbbbbbbbbb');
    var bodyX = parseFloat(document.body.offsetWidth * 0.720);
    var resultSec = parseFloat(document.body.offsetWidth / 2);
    // console.log(resultSec + 'ffffffffffffff');
    rLeft = hCho.style.marginLeft = 'calc(50% - ' + resultSec + 'px - ' + bodyX + 'px)';
    // console.log(rRight);
    // console.log(hX);
}
function asidePCRight() {
    var resultSec = parseFloat(document.body.offsetWidth / 2);
    rRight = hCho.style.marginLeft = 'calc(50% - ' + resultSec + 'px)';
}

/* 
asidePCLeft();
window.addEventListener('resize', asidePCLeft);
asidePCRight();
window.addEventListener('resize',asidePCRight);
 */

var ccg = document.getElementById('leftAsideBgc');
var lg = document.getElementById('login');
var header = document.getElementById('head');
var bd = document.body;
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        header.className = 'mH';
        ccg.className = 'ls_bgc';
        lg.className = 'login';
    } else if (bIsIpad) {
        header.className = 'pH';
        bd.className = 'pB';
        ccg.className = 'ls_bgc';
        lg.className = 'login';
    }
    else {
        header.className = 'cH';
        ccg.className = 'ls_bgcC';
        lg.className = 'loginC';
        // asidePCRight();
        // window.addEventListener('resize', asidePCRight);
        asidePCLeft();
        window.addEventListener('resize', asidePCLeft);
    }

}

var os = function () {
    var ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
    };
}();

if (os.isAndroid || os.isPhone) {
    //alert("手机" );
    header.className = 'mH';
    ccg.className = 'ls_bgc';
    lg.className = 'login';

} else if (os.isTablet) {
    //alert("平板" );
    header.className = 'pH';
    bd.className = 'pB';
    ccg.className = 'ls_bgc';
    lg.className = 'login';
} else if (os.isPc) {
    header.className = 'cH';
    ccg.className = 'ls_bgcC';
    lg.className = 'loginC';
    //alert("电脑");
    asidePCLeft();
    window.addEventListener('resize', asidePCLeft);
    // asidePCRight();
    // window.addEventListener('resize', asidePCRight);
}
// 各种高 https://www.cnblogs.com/yulintianxia/p/9385595.html

document.getElementById("search");
// onload=document.getElementById('search').focus();

var mains = document.getElementById('content');
// var wx = document.body.style.width;
var bx = document.body.clientWidth;
var mt = mains.currentStyle || window.getComputedStyle(mains)["margin-top"];
var mmt = parseInt(mains.currentStyle || window.getComputedStyle(mains)["margin-top"]);



// main的marginTop值
// body的宽
console.log(bx);
// console.log(9);
console.log(mt);
document.addEventListener('outerWidth', function (e) {
    console.log(e);
    var w = window.outerWidth;
    var h = window.outerHeight;
    var txt = "Window size: width=" + w + ", height=" + h;
    document.getElementById("demo").innerHTML = txt;
}
)
//   myFunction() 
document.addEventListener('keyup', function (e) {
    // console.log(e.keyCode);
    if (e.keyCode === 83) {
        document.getElementById('search').focus();
    }
})

// svg高==宽
var sm = document.getElementById('module').querySelectorAll('li');
sm.onload = function () {
    sm.style.height = sm.style.width;
}

var tips = document.getElementById('tips');
function tipHide() {
    // tips.style.display = 'none';
    tips.className = 'tHide';
}

var uHead = document.getElementById('uHead');
var ft = document.querySelector('footer');
var dk = document.getElementById('dark');
uHead.addEventListener('click', function () {
    dk.style.display = 'block';
    dk.style.zIndex = '2';
    dk.style.backgroundColor = 'rgba(0, 0, 0, .3)';
    asidePCRight();
    window.addEventListener('resize', asidePCRight);
    hCho.style.backgroundColor = 'rgba(245, 255, 255, 1)';
    hCho.style.boxShadow = '1px 1px 128px 1px rgba(60,60,60,1)';
    document.body.parentNode.style.overflowY = 'hidden';
})
ft.onclick = function () {
    asidePCLeft();
    window.addEventListener('resize', asidePCLeft);
    hCho.style.backgroundColor = 'rgba(245, 255, 255, 0)';
    dk.style.display = 'none';
    dk.style.zIndex = '-2';
    dk.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    document.body.parentNode.style.overflowY = 'auto';
    hCho.style.boxShadow = '0px 0px 0px 0px rgba(60,60,60,1)';
}
dk.onclick = function () {
    asidePCLeft();
    window.addEventListener('resize', asidePCLeft);
    hCho.style.backgroundColor = 'rgba(245, 255, 255, 0)';
    dk.style.display = 'none';
    dk.style.zIndex = '-1';
    dk.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    document.body.parentNode.style.overflowY = 'auto';
    hCho.style.boxShadow = '0px 0px 0px 0px rgba(60,60,60,1)';
};
// document.style.overflow = 'hidden';

document.addEventListener('keyup', function (e) {
    // console.log(e.keyCode);
    if (e.keyCode === 70) {
        dk.style.display = 'block';
        dk.style.backgroundColor = 'rgba(0, 0, 0, .3)';
        // hCho.style.marginLeft = '0';
        asidePCRight();
        window.addEventListener('resize', asidePCRight);
        hCho.style.backgroundColor = 'rgba(245, 255, 255, 1)';
        hCho.style.boxShadow = '1px 1px 128px 1px rgba(60,60,60,1)';
        dk.style.zIndex = '2';
        // 隐藏滚动栏 达到禁止滚动的目的
        document.body.parentNode.style.overflowY = 'hidden';
    }
});

document.body.parentNode.style.overflowX = 'hidden';

document.addEventListener('keyup', function (e) {
    // console.log(e.keyCode);
    if (e.keyCode === 68) {
        // hCho.style.marginLeft = '-72%';
        asidePCLeft();
        window.addEventListener('resize', asidePCLeft);
        hCho.style.backgroundColor = 'rgba(245, 255, 255, 0)';
        hCho.style.boxShadow = '0px 0px 0px 0px rgba(60,60,60,1)';
        dk.style.zIndex = '-2';
        dk.style.display = 'none';
        document.body.parentNode.style.overflowY = 'auto';
    }
});
var pk = document.getElementById('pcKey');
var temp = -1;
pk.onclick = function () {
    pk.style.display = 'none';
    temp = 1;
}
document.addEventListener('keyup', function (e) {
    console.log(e.keyCode);
    if (e.keyCode === 66 & temp === 1) {
        pk.style.display = 'none';
        temp = 0;
    }//else {
    //     temp = 1; 
    //     pk.style.display = 'block';       
    // }
});

var uCustom = document.getElementById('userCustom');
var uTemp = 0;
uCustom.addEventListener('click', function () {
    if (uTemp === 1) {
        this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24.48,42.18A18.66,18.66,0,0,1,22.11,5,2,2,0,0,1,23.56,8.6,11.32,11.32,0,1,0,39.4,24.44,2,2,0,0,1,43,25.89,18.68,18.68,0,0,1,24.48,42.18ZM16.36,11.32A14.66,14.66,0,1,0,36.68,31.64,15.35,15.35,0,0,1,15,17.68,15.2,15.2,0,0,1,16.36,11.32Z"></path></svg>';
        uTemp = 0;
    } else {
        this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.96 47.96"><path d="M24,12A12,12,0,1,0,36,24,12,12,0,0,0,24,12Zm0,20a8,8,0,1,1,8-8A8,8,0,0,1,24,32Z"></path><path d="M24,9a2,2,0,0,0,2-2V4a2,2,0,0,0-4,0V7A2,2,0,0,0,24,9Z"></path><path d="M36,14a2,2,0,0,0,1.42-.59l2.12-2.12a2,2,0,1,0-2.83-2.83l-2.12,2.12A2,2,0,0,0,36,14Z"></path><path d="M44,22H41a2,2,0,0,0,0,4h3a2,2,0,1,0,0-4Z"></path><path d="M37.4,34.61a2,2,0,1,0-2.83,2.82l2.12,2.13a2,2,0,0,0,2.83-2.83Z"></path><path d="M24,39a2,2,0,0,0-2,2v3a2,2,0,0,0,4,0V41A2,2,0,0,0,24,39Z"></path><path d="M10.53,34.61,8.41,36.73a2,2,0,0,0,0,2.83,2,2,0,0,0,2.82,0l2.13-2.13a2,2,0,1,0-2.83-2.82Z"></path><path d="M9,24a2,2,0,0,0-2-2H4a2,2,0,0,0,0,4H7A2,2,0,0,0,9,24Z"></path><path d="M10.53,13.39a2,2,0,0,0,1.41.59,2,2,0,0,0,1.42-3.42L11.23,8.44a2,2,0,0,0-2.82,2.83Z"></path></svg>';
        uTemp = 1;
    }
});
/* 
     /////////////////////////////////////////////////
    /////////////////////////////////////////////////
   //////////                            ///////////
  //////////                            ///////////
 //////////                            ///////////
  */
// 使侧栏长度==视口长度
var impPic = document.getElementById('impotent_pic');
window.addEventListener('resize', function () {
    // console.log(window.innerHeight);
    y = hCho.style.height = window.innerHeight + 'px';
    x = hCho.style.width = window.innerWidth + 'px';
    console.log(y);

    getInfo();
    impPicHeight()
});
function impPicHeight() {
    impPic.style.height = window.innerHeight + 'px';
};
impPicHeight()

function asideX() {
    console.log(document.body.offsetWidth);
    var bodyX = parseFloat(document.body.offsetWidth * 0.720);
    hCho.style.width = bodyX + 'px';
};


///////////////////////////////////////
//////////////////////////////////////

asideX();
window.addEventListener('resize', asideX);
/* 
/////////                   //////////////                          ////////////
////////////             ////////////////////                       ////////////
//////////////        //////////////////////////                    //////////// */

window.addEventListener('load', function () {
    console.log(window.innerHeight);
    y = hCho.style.height = window.innerHeight + 'px';
    console.log(y);
});
window.addEventListener('DOMContentLoaded', function () {
    console.log(window.innerHeight);
    y = hCho.style.height = window.innerHeight + 'px';
    console.log(y);
});

// var scrollFunc=function(e){
//     e=e||window.event;
//    if (e&&e.preventDefault){ 
//         e.preventDefault();
//         e.stopPropagation();
//     }else{ 
//      e.returnvalue=false;  
//      //return false;     
//     }
// }
// scrollFunc();

function getInfo() {
    var s = "";
    s += " 网页可见区域宽：" + document.body.clientWidth + '\n';
    s += " 网页可见区域高：" + document.body.clientHeight + '\n'; //body
    s += " 网页可见区域宽：" + document.body.offsetWidth + " (包括边线和滚动条的宽)" + '\n';
    s += " 网页可见区域高：" + document.body.offsetHeight + " (包括边线的宽)" + '\n';
    s += " 网页正文全文宽：" + document.body.scrollWidth + '\n';
    s += " 网页正文全文高：" + document.body.scrollHeight + '\n'; //窗口
    s += " 网页被卷去的高(ff)：" + document.body.scrollTop + '\n';
    s += " 网页被卷去的高(ie)：" + document.documentElement.scrollTop + '\n';
    s += " 网页被卷去的左：" + document.body.scrollLeft + '\n';
    s += " 网页正文部分上：" + window.screenTop + '\n';
    s += " 网页正文部分左：" + window.screenLeft + '\n';
    s += " 屏幕分辨率的高：" + window.screen.height + '\n';
    s += " 屏幕分辨率的宽：" + window.screen.width + '\n';
    s += " 屏幕可用工作区高度：" + window.screen.availHeight + '\n';
    s += " 屏幕可用工作区宽度：" + window.screen.availWidth + '\n';
    s += " 你的屏幕设置是 " + window.screen.colorDepth + " 位彩色" + '\n';
    s += " 你的屏幕设置 " + window.screen.deviceXDPI + " 像素/英寸" + '\n';
    // alert (s);
    console.log(s);
};

// getInfo();
var tItm = document.getElementById('module');
var wt = document.querySelector('.white_line');
function lw() {
    wt.style.width = '100%';
};
function lbs() {
    wt.style.boxShadow = '0px 1px 12px 1px rgba(0, 0, 0, 0.3)';
};
function topItemMarginTop() {
    tItm.style.marginTop = '-20px';
};

function tipItemBefore() {
    tItm.className = 'module clearfix module_before';
};

var tLC = document.querySelector('.third_lineContent');
function tLContentPBRun() {
    tLC.style.right = '0';
    // tLC.style.backgroundColor = 'rgba(245, 255, 255,.64)';
    tLC.style.backgroundColor = 'rgba(250, 250, 255,.64)';
};
function tLContentBSRun() {
    tLC.style.boxShadow = '0 0 16px 1px rgba(100,100,110,.48)';
};
function tLContentHtRun() {
    tLC.style.height = '160px';
};

function impPicDisplayNone() {
    impPic.style.display = 'none';
};

function disappear() {
    var fir = document.getElementById('appearFirst');
    var sec = document.getElementById('headChoose');
    var thi = document.getElementById('head');
    var forth = document.getElementById('content');
    var fifth = document.getElementById('appearLast');
    fir.style.display = 'none';
    sec.style.display = 'none';
    thi.style.display = 'none';
    forth.style.display = 'none';
    fifth.style.display = 'none';
    // var arr = [fir,sec,thi,forth,fifth,arr];
    // for(var i = 0; i < arr.length; i++) {
    // }
};
disappear();

function appear() {
    var fir = document.getElementById('appearFirst');
    var sec = document.getElementById('headChoose');
    var thi = document.getElementById('head');
    var forth = document.getElementById('content');
    var fifth = document.getElementById('appearLast');
    fir.style.display = 'block';
    sec.style.display = 'block';
    thi.style.display = 'block';
    forth.style.display = 'block';
    fifth.style.display = 'block';
};
// 这里更改开屏图片停滞时间
var seconds = 1200;
//  开屏加了启动图 所有sto + 3.2s;
setTimeout(tipHide, seconds * 1.86);//2400
setTimeout(tipItemBefore, seconds * 1.96);//2700
setTimeout(lw, seconds * 1.46);//1200
setTimeout(lbs, seconds * 1.93);//2600
setTimeout(topItemMarginTop, seconds * 1.86);//2400
setTimeout(impPicDisplayNone, seconds);//3000
setTimeout(appear, seconds * 1.06);
setTimeout(tLContentPBRun, seconds * 1.73);//2000
setTimeout(tLContentBSRun, seconds * 1.96);//2700
setTimeout(tLContentHtRun, seconds * 2);//2800


var oNotes = document.getElementById('opinionNotes');

function newTab(e, location) {
    e.style.cursor = 'pointer';
    e.onclick = function () {
        if (location == 'javascript:;') {
        } else {
            e.tab = window.open(location);
        }
    }
};


newTab(oNotes, "./html/notes/index.html");