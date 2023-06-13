//外圈line循环
var cntMain = document.getElementById('contentMain');
var lne1 = document.getElementById('line1');
var lne2 = document.getElementById('line2');
var lne3 = document.getElementById('line3');
var lne4 = document.getElementById('line4');

var flagN = 0;
var flagC = 0;

function lneNone(lT, lB, lL, lR) {
    lT.style.width = "0px";
    lB.style.width = "0px";
    lB.style.left = "100%";
    lL.style.height = "0px";
    lL.style.top = "100%";
    lR.style.height = "0px";
};

function lneCover(lT, lB, lL, lR) {
    lT.style.width = "100%";
    lT.style.left = "0%";
    lB.style.width = "100%";
    lB.style.left = "0";
    lL.style.height = "100%";
    lL.style.top = "0";
    lR.style.height = "100%";
};

function lneNoneFg0(lT, lB, lL, lR) {
    lT.style.width = "0px";
    lT.style.left = "100%";

    lB.style.width = "0px";
    lB.style.left = "0";

    lL.style.height = "0px";
    lL.style.top = "0%";

    lR.style.height = "0px";
    lR.style.top = "100%";
};

function lneCoverFg0(lT, lB, lL, lR) {
    lT.style.width = "100%";
    lT.style.left = "0";

    lB.style.width = "100%";
    lB.style.left = "0%";

    lL.style.height = "100%";
    lL.style.top = "0%";

    lR.style.height = "100%";
    lR.style.top = "0%";
};

cntMain.addEventListener('mouseenter', function () {
    if (flagC === 0) {
        new lneCoverFg0(lne1, lne2, lne3, lne4);
        flagC++;
    } else if (flagC === 2) {
        new lneCover(lne1, lne2, lne3, lne4);
        flagC = 0;
    }
});

cntMain.addEventListener('mouseout', function () {
    if (flagN === 0) {
        new lneNoneFg0(lne1, lne2, lne3, lne4);
        flagN++;
    } else if (flagN === 2) {
        new lneNone(lne1, lne2, lne3, lne4);
        flagN = 0;
    }
});
//外圈line循环结束