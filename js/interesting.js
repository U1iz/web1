// 禁用右键
// document.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
// })
// 禁止选中文字 selectstart
document.addEventListener('selectstart', function (e) {
    e.preventDefault();

})

var user = localStorage.getItem('uselessHub_userName');
var alR = localStorage.getItem('uselessHub_hadRegister');
alR == '1' ? alR = true : alR = false;
console.log('注册状态: ' + alR +'\n' + '用户名: ' + user);

var clickHid = document.getElementById('see');
var mc = document.getElementById('me');
var mcc = document.getElementById('mee');
var uH = document.getElementById('head');
var liHead = document.getElementById('headChoose').querySelectorAll('li');
for (var i = 0; i < liHead.length; i++) {
    // 遍历li，使每个li显示对应图片
    var index = i * 100;
    liHead[i].style.backgroundPosition = '0 -' + index + 'px';
    // 设定每个li的自定义属性
    liHead[i].setAttribute('index', i);
    liHead[i].onclick = function () {
        // ih = this < 10 ? '0' + this : this;
        // ih = i < 10 ? '0' + i : i;
        // uH.innerHTML = '<img src="../img/User@64px/UH'+ih+'.jpg" alt="" width="100%">';
        // 获取点击的li自定义属性
        var indexC = this.getAttribute('index');
        var indexD = Number(indexC) + 1;
        // 根据索引号更换头像图片
        var iC = indexD < 10 ? '0' + indexD : indexD;

        uH.innerHTML = '<img src="../img/User@64px/UH' + iC + '.jpg" alt="" width="100%">';
    }
}
var uHead = document.getElementById('userHead');
var hTable = document.getElementById('headChoose');
var hTFlag = 0;
uHead.onclick = function () {
    if (hTFlag == 0) {
        hTable.style.display = 'block';
        hTFlag++;
    } else if (hTFlag == 1) {
        hTable.style.display = 'none';
        hTFlag = 0;
    } else if (hTable.onmouseout & uHead.onmouseout) {
        hTable.style.display = 'none';
        hTFlag = 0;
    }
}
mc.onclick = function () {
    hTable.style.display = 'none';
    hTFlag = 0;
}
mcc.onclick = function () {
    hTable.style.display = 'none';
    hTFlag = 0;
}
// 大小隐藏
/* mc.onclick = function () {
    hTable.style.display = 'none';
    hTFlag = 0;
}
mcc.onclick = function () {
    hTable.style.display = 'none';
    hTFlag = 0;
}



setInterval(function () {
    console.log(12);
}, 1111)

document.addEventListener('resize', function () {
    if (document.body.clientWidth < 1400) { rTDisappear() }
});

window.addEventListener('resize', rTDisplay);

function rTDisplay() {
    // var x = window.innerWidth;
    var x = document.body.clientWidth;
    // console.log(x);
    if (x <= 1400) {
        mcc.style.display = 'none';
    } else {
        mcc.style.display = 'block';
    }
};
rTDisplay();
 */
//背景选择
var fstC = document.getElementById('imgC');
var secC = document.getElementById('meC');
var thdC = document.getElementById('colC');
var fohC = document.getElementById('wGLC');
var eF = document.getElementById('elsF');
var canvas = document.getElementById('sakura');
var canvas2 = document.getElementById('can');

function disNC() {
    canvas.style.display = 'none';
    canvas2.innerHTML = '';
};

function disBC() {
    canvas.style.display = 'block';
    canvas2.innerHTML = '您的浏览器不支持canvas标签';
};
// 清除背景
var bgClear = document.getElementById('allClear');
bgClear.addEventListener('click', disNC);
// 更多选项打开，+效果
var bgMore = document.getElementById('bgShow');
var hpe = document.getElementById('lay'); //hyphen 
var vtl = document.getElementById('stand'); //vertical
function lMinus() {
    hpe.style.transform = 'rotate(-180deg)';
    vtl.style.transform = 'rotate(270deg)';
}

function lPlus() {
    hpe.style.transform = 'rotate(270deg)';
    vtl.style.transform = 'rotate(-270deg)';
}
// setTimeout(minus,5000);
// setTimeout(plus,8000);
// new minus();
var e1 = document.getElementById("bgPosition");
var e2 = document.getElementById("bgMuc");
var e3 = document.getElementById("globalSettings");

function elFDN() {
    document.getElementById('eItemCont').zIndex = 6;
    e1.style.transition = 'all 0s';
    e2.style.transition = 'all 0s';
    e3.style.transition = 'all 0s';
    e1.style.backgroundColor = "transparent";
    e2.style.backgroundColor = "transparent";
    e3.style.backgroundColor = "transparent";
    e1.style.boxShadow = "none";
    e2.style.boxShadow = "none";
    e2.style.boxShadow = "none";
    e1.style.color = "transparent";
    e2.style.color = "transparent";
    e3.style.color = "transparent";
};

function elFDN_e() {
    document.getElementById('eItemCont').zIndex = 9;
    e1.style.transition = 'all 0.4s';
    e2.style.transition = 'all 0.4s';
    e3.style.transition = 'all 0.4s';
    e1.style.backgroundColor = "transparent";
    e2.style.backgroundColor = "transparent";
    e3.style.backgroundColor = "transparent";
    e1.style.boxShadow = "-1px 1px 16px 1.1px rgba(180, 235, 150, 0)";
    e2.style.boxShadow = "-1px 1px 16px 1.1px rgba(180, 235, 150, 0)";
    e2.style.boxShadow = "-1px 1px 16px 1.1px rgba(180, 235, 150, 0)";
    e1.style.color = "transparent";
    e2.style.color = "transparent";
    e3.style.color = "transparent";
};

function elFDB() {
    document.getElementById('eItemCont').zIndex = 10;
    e1.style.transition = 'all 0.3s';
    e2.style.transition = 'all 0.3s';
    e3.style.transition = 'all 0.3s';
    e1.style.backgroundColor = "rgba(180, 235, 150, 0.719)";
    e2.style.backgroundColor = "rgba(180, 235, 150, 0.719)";
    e3.style.backgroundColor = "rgba(180, 235, 150, 0.719)";
    e1.style.color = "rgba(30,30,30,.8)";
    e2.style.color = "rgba(30,30,30,.8)";
    e3.style.color = "rgba(30,30,30,.8)";
};
console.log(e3.offsetTop);
///////////
var moreClicks = document.getElementById('bgChooseContent');
var lFlag = 0;
var llFlag = lFlag;
bgMore.onclick = function bgCShow() {
    new elFDB()
    fstC.style.zIndex = 12;
    e3.style.zIndex = 10;
    if (lFlag == 0) {
        // 展开
        this.style.backgroundColor = '#c2c2c2';
        new eFTopDown();
        new lMinus();
        if (e3.offsetTop == 0) {
            console.log(114);
            setTimeout(function () {
                e1.offsetTop = '-124px';
            }, 320);
            setTimeout(function () {
                e2.offsetTop = '-155px';
            }, 240);
            setTimeout(function () {
                e3.offsetTop = '-186px';
            }, 160);
        } else if (e3.offsetTop == -153) {
            new elFDN()
            console.log(document.getElementById('eItemCont').zIndex + " 111");
            fstC.style.zIndex = 12;
            e3.style.zIndex = 10;
            setTimeout(function () {
                e1.offsetTop = '-29px';
            }, 320);
            setTimeout(function () {
                e2.offsetTop = '-58px';
            }, 240);
            setTimeout(function () {
                e3.offsetTop = '-87px';
            }, 160);
        }
        lFlag = 1;
    } else {
        // 收起
        this.style.backgroundColor = '#fff';
        console.log(111);
        console.log(e3.offsetTop);
        new eFTopUp();
        new lPlus();
        if (e3.offsetTop == 0) {
            console.log(112);
            setTimeout(function () {
                e1.offsetTop = '-124px';
            }, 320);
            setTimeout(function () {
                e2.offsetTop = '-155px';
            }, 240);
            setTimeout(function () {
                e3.offsetTop = '-186px';
            }, 160);
        } else if (e3.offsetTop == -124) {
            console.log(113);
            setTimeout(function () {
                e1.offsetTop = '-29px';
            }, 320);
            setTimeout(function () {
                e2.offsetTop = '-58px';
            }, 240);
            setTimeout(function () {
                e3.offsetTop = '-87px';
            }, 160);
            new elFDN_e();
        }
        lFlag = 0;
    }
};

function MenuLne(ele, lay, stand) {
    var lFlag = 0;
    ele.onclick = function Show() {
        new elFDB();
        if (lFlag == 0) {
            // 收起
            console.log(199);
            ele.style.backgroundColor = '#c2c2c2';
            lay.style.transform = 'rotate(-180deg)';
            stand.style.transform = 'rotate(270deg)';
            if (thdC.style.top == 0) {
                setTimeout(function () {
                    document.getElementById("bgPosition").style.top = '-124px';
                }, 320);
                setTimeout(function () {
                    document.getElementById("bgMuc").style.top = '-123px';
                }, 240);
                setTimeout(function () {
                    document.getElementById("globalSettings").style.top = '-122px';
                }, 160);
            } else {
                setTimeout(function () {
                    document.getElementById("bgPosition").style.top = '0px';
                }, 320);
                setTimeout(function () {
                    document.getElementById("bgMuc").style.top = '0px';
                }, 240);
                setTimeout(function () {
                    document.getElementById("globalSettings").style.top = '0px';
                }, 160);
            }
            lFlag = 1;
        } else if (lFlag != 0) {
            new elFDB();
            // 展开
            ele.style.backgroundColor = '#fff';
            lay.style.transform = 'rotate(270deg)';
            stand.style.transform = 'rotate(-270deg)';
            console.log(thdC.style.top == 0);
            if (thdC.style.top == 0) {
                setTimeout(function () {
                    document.getElementById("bgPosition").style.top = '-153px';
                }, 320);
                setTimeout(function () {
                    document.getElementById("bgMuc").style.top = '-182px';
                }, 240);
                setTimeout(function () {
                    document.getElementById("globalSettings").style.top = '-211px';
                }, 160);
            } else if (thdC.style.top != 0) {
                setTimeout(function () {
                    document.getElementById("bgPosition").style.top = '-27px';
                }, 320);
                setTimeout(function () {
                    document.getElementById("bgMuc").style.top = '-57px';
                }, 240);
                setTimeout(function () {
                    document.getElementById("globalSettings").style.top = '-87px';
                }, 160);
            }
            lFlag = 0;
        }
    };
};
/////////////////////
MenuLne(eF, document.getElementById('lay01'), document.getElementById('stand01'));
////////////

function eFTopDown() {
    setTimeout(function () {
        fstC.style.top = '0px';
    }, 400);
    setTimeout(function () {
        secC.style.top = '0px';
    }, 320);
    setTimeout(function () {
        thdC.style.top = '0px';
    }, 240);
    setTimeout(function () {
        fohC.style.top = '0px';
    }, 160);
    // down
    setTimeout(function () {
        eF.style.top = '0px';
    }, 0);
    if (e3.style.top == '-211') {
        setTimeout(function () {
            e1.style.top = '-85px';
        }, 0);
        setTimeout(function () {
            e2.style.top = '-86px';
        }, 160);
        setTimeout(function () {
            e3.style.top = '-87px';
        }, 240);
    };
};

function eFTopUp() {
    setTimeout(function () {
        fstC.style.top = '-32px';
    }, 0);
    setTimeout(function () {
        secC.style.top = '-64px';
    }, 160);
    setTimeout(function () {
        thdC.style.top = '-94px';
    }, 240);
    setTimeout(function () {
        fohC.style.top = '-124px';
    }, 320);
    // if (e3.style.top != "0px") {
    //     setTimeout(function () {
    //         e1.style.top = '-124px';
    //     }, 0);
    //     setTimeout(function () {
    //         e2.style.top = '-155px';
    //     }, 160);
    //     setTimeout(function () {
    //         e3.style.top = '-186px';
    //     }, 240);
    // }
    // top
    setTimeout(function () {
        eF.style.top = '-124px';
    }, 320);
};
var bgMSon = document.getElementById('bgChooseContentSon').querySelectorAll('li');
// hover效果
function hover() {
    for (var i = 0; i < bgMore.length; i++) {
        bgMore[i].addEventListener('click', function () {
            this.style.backgroundColor = '#000';
        })
    }
};
hover();
// click打开关闭封装
function close(clk, clo) {
    clk.onclick = function () {
        clo.style.display = 'none';
    }
};

function open(clk, opn) {
    clk.onclick = function () {
        opn.style.display = 'block';
    }
};

// fstC = imgC
var imgView = document.getElementById('imgBg');
var imgClose = document.getElementById('imgViewClose');
// secC = meC
var meView = document.getElementById('meBg');
var meClose = document.getElementById('meViewClose');
// thdC = colC
var colView = document.getElementById('colBg');
var colClose = document.getElementById('colViewClose');
// fohC = wGLC 
var wGLView = document.getElementById('wGLBg');
var wGLClose = document.getElementById('wGLViewClose');
new open(fstC, imgView);
new open(secC, meView);
new open(thdC, colView);
new open(fohC, wGLView);
new close(imgClose, imgView);
new close(meClose, meView);
new close(colClose, colView);
new close(wGLClose, wGLView);

// 封装函数2
function bgCT(cng1, cng2, cng3) {
    if (cng1.onmouseover) {
        cng1.style.backgroundColor = "";
        cng2.style.backgroundColor = "";
        cng3.style.backgroundColor = "";
    } else {
        cng1.style.backgroundColor = "";
        cng2.style.backgroundColor = "";
        cng3.style.backgroundColor = "";
    };
    if (cng2.onmouseover) {
        cng1.style.backgroundColor = "";
        cng2.style.backgroundColor = "";
        cng3.style.backgroundColor = "";
    } else {
        cng1.style.backgroundColor = "";
        cng2.style.backgroundColor = "";
        cng3.style.backgroundColor = "";
    };
    if (cng3.onmouseover) {
        cng1.style.backgroundColor = "";
        cng2.style.backgroundColor = "";
        cng3.style.backgroundColor = "";

    } else {
        cng1.style.backgroundColor = "";
        cng2.style.backgroundColor = "";
        cng3.style.backgroundColor = "";
    };
};

var hover1 = document.getElementById('hover1');
var hover2 = document.getElementById('hover2');
var hover3 = document.getElementById('hover3');
var hvr1 = document.getElementById('hvr1');
var hvr2 = document.getElementById('hvr2');
var hvr3 = document.getElementById('hvr3');

function ModuleHover(hover, hvr) {
    hover.onmouseenter = function () {
        hvr.className = "BeforeBgcSetTimeout";
        setTimeout(function () {
            hvr.className = "BeforeBgc";
        }, 640)
    };
};
ModuleHover(hover1, hvr1);
ModuleHover(hover2, hvr2);
ModuleHover(hover3, hvr3);

//turn left
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var e = document.getElementById("e");
var f = document.getElementById("f");
var g = document.getElementById("g");
var h = document.getElementById("h");
var i = document.getElementById("i");
var j = document.getElementById("j");
var k = document.getElementById("k");
var l = document.getElementById("l");
var m = document.getElementById("m");
var n = document.getElementById("n");
var o = document.getElementById("o");
var p = document.getElementById("p");

function RespiratoryEffect(a, b, c) {
    function lineA() {
        a.style.backgroundColor = "transparent";
        b.style.backgroundColor = "transparent";
    };

    function lineB() {
        a.style.backgroundColor = "#fff";
        b.style.backgroundColor = "#fff";
    };

    function cycle() {
        setTimeout(lineA, 0);
        setTimeout(lineB, 1500);
    };
    setInterval(cycle, c);
};
RespiratoryEffect(a, b, 1000);
RespiratoryEffect(c, d, 1100);
RespiratoryEffect(e, f, 1155);
RespiratoryEffect(g, h, 1310);
RespiratoryEffect(i, j, 1465);
RespiratoryEffect(k, l, 1620);
RespiratoryEffect(m, n, 1775);
RespiratoryEffect(o, p, 1930);

document.getElementById('turnLeft').onclick = function () {
    document.getElementById('mainMenu').style.left = "-13%";
    this.style.left = "-13%";
    setTimeout(function () {
        document.getElementById('turnRight').style.display = "block"
    }, 400);
};

document.getElementById("turnRight").onclick = function () {
    document.getElementById('mainMenu').style.left = "0";
    document.getElementById('turnLeft').style.left = "0%";
    this.style.display = "none";
};


var spdMgr = document.getElementById("speedChangerInput");
spdMgr.value = "更改播放速度{∈R}";
spdMgr.addEventListener("focus", function () {
    spdMgr.value = ""
});
spdMgr.addEventListener("blur", function () {
    spdMgr.value = "更改播放速度{∈R}"
});

document.getElementById("speedChangeBtn").addEventListener("click", function () {
    document.getElementById("media").querySelectorAll("video").playbackRate = spdMgr.value;
    spdMgr.value = spdMgr.value;
    console.log(document.getElementById("media").querySelectorAll("video").playbackRate);
});
console.log(document.getElementById("media").querySelectorAll("video").defaultPlaybackRate);