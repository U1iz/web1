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
    if (bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        document.documentElement.style.fontSize = '12px';
    } else if (bIsIpad) {
        document.documentElement.style.fontSize = '16px';
    } else {
        document.documentElement.style.fontSize = '32px';
    }
}());

function disBlock(objBtn, objBlock, objNone01, objNone02) {
    objBtn.addEventListener("click", function () {
        objBlock.style.display = 'block';
        objNone01.style.display = 'none';
        objNone02.style.display = 'none';
    })
};

var cont = document.getElementById('cont');
(function () {
    var lis = cont.querySelectorAll('li');
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener('mouseenter', function () {
            this.style.zIndex = '99';
        })
        lis[i].addEventListener('mouseleave', function () {
            this.style.zIndex = '1';
        })
    }
}());