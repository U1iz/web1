(function () {
    document.documentElement.style.fontSize = 24 + 'px';

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
        document.documentElement.style.fontSize = 8 + 'px';
        localStorage.setItem('equipmentType', '1');
    } else if (bIsIpad) {
        document.documentElement.style.fontSize = 14 + 'px';
        localStorage.setItem('equipmentType', '1');
    } else {
        document.documentElement.style.fontSize = 24 + 'px';
        localStorage.setItem('equipmentType', '2');
    }


    var title = document.createElement("h1");
    title.innerHTML = 'C#的数据类型(13个关键字)';
    title.style.textAlign = 'center';
    title.id = 'title';
    title.style.padding = '1rem 0 2rem 0';
    document.body.appendChild(title);
})();

function setResize() {
    var event = document.createEvent("HTMLEvents");
    event.initEvent("resize", true, true);
    window.dispatchEvent(event);
}

function setStyles(elem, style) {
    var elem = document.querySelectorAll(elem);
    var elemStyleList = [];
    for (var i = 0; i < elem.length; i++) {
        elemStyleList[i] = elem[i].getAttribute('style');
        elem[i].setAttribute('style', style + ' ' + elemStyleList[i]);
    }
}

var ctr = document.createElement("div");
ctr.setAttribute('id', 'ctr');
document.body.appendChild(ctr);

function createElem(text01, text02, text03, text04, text05, fontType) {
    var lstCtr = document.createElement('ul');
    lstCtr.className = 'listWrap';
    lstCtr.style.borderBottom = '0.08rem solid #cdcdcd'

    function local_createElem(eCount, eInnerText, fontType) {
        var label = 'h3';
        fontType && (function () {
            label = fontType;
        })();
        var fLabel = document.createElement(label);
        var e = document.createElement('li');
        e.appendChild(fLabel);
        lstCtr.appendChild(e);
        e.className = 'row0' + eCount + ' row';
        var fCtr = e.querySelector(label);
        fCtr.innerHTML = eInnerText;
        // fCtr.style.whiteSpace = 'nowrap';

    }
    local_createElem('1', text01, fontType);
    local_createElem('2', text02, fontType);
    local_createElem('3', text03, fontType);
    local_createElem('4', text04, fontType);
    local_createElem('5', text05, fontType);

    ctr.appendChild(lstCtr);
}
window.onload = function () {
    setStyles('h1', 'font: 800 0.96rem "MicroSoft YaHei";');
    setStyles('h2', 'font: 800 0.82rem "MicroSoft YaHei";');
    setStyles('h3', 'font: 400 0.72rem "MicroSoft YaHei";');
    setStyles('h4', 'font: 800 0.64rem "MicroSoft YaHei";');
    setStyles('h5', 'font: 800 0.54rem "MicroSoft YaHei";');
    setStyles('h6', 'font: 800 0.46rem "MicroSoft YaHei";');
    setStyles('p', 'font: 400 0.72rem "MicroSoft YaHei";');
    var remSize = (document.documentElement.style.fontSize).toString().substring(0, (document.documentElement.style.fontSize).toString().length - 2);
    var lw = document.querySelectorAll('.listWrap');
    document.getElementById('normalNodeWrap1').style.marginTop = document.getElementById('extraCtr').clientHeight + 3.2 * remSize + 'px';
    // document.getElementById('listNodeWrap1').style.marginTop = document.getElementById('extraCtr').clientHeight + 2.2 + 'rem';

    function set_mp(elem01, elem02) {
        var wSelf = elem01.clientWidth;
        var w = (elem02.offsetLeft - elem01.offsetLeft - wSelf) / 2;
        elem01.style.paddingRight = w + 'px';
        elem02.style.marginLeft = -w + 'px';
        elem01.style.borderRight = '0.042rem solid #ccc';
    }

    function execute_setMp() {
        for (var i = 0; i < lw.length; i++) {
            var r01 = lw[i].querySelector('.row01');
            var r02 = lw[i].querySelector('.row02');
            var r03 = lw[i].querySelector('.row03');
            var r04 = lw[i].querySelector('.row04');
            var r05 = lw[i].querySelector('.row05');

            set_mp(r01, r02);
            set_mp(r02, r03);
            set_mp(r03, r04);
            set_mp(r04, r05);
        }
    }
    var styleArr = [];
    for (var i = 0; i < lw.length; i++) {
        lw[i].style.display = 'flex';
        lw[i].style.justifyContent = 'space-between';
        lw[i].style.minWidth = document.body.clientWidth * 0.6 + 'px';
        lw[i].style.transition = 'all 0.3s';
        var cn = lw[i].children;
        // execute_setMp();
        var tex = true;
        animate(1, 1, 0, 0);

        function animate(n1, n2, n3, n4) {
            lw[i].addEventListener('mouseenter', function () {
                var tn;
                var tNode = false;
                var titNode = false;
                if (n1 == 1) {
                    styleArr[0] = this.style.backgroundColor;
                    this.style.backgroundColor = '#ddd';
                } else if (n2 == 1) {
                    styleArr[1] = this.style.letterSpacing;
                    this.style.letterSpacing = '0.1rem';
                } else if (n3 == 1) {
                    if (this.querySelector('h3')) {
                        tNode = this.querySelector('h3');
                        tn = tNode;
                    } else if (this.querySelector('h2')) {
                        titNode = this.querySelector('h2');
                        tn = titNode;
                    }
                    titNode || tNode ? styleArr[2] = tn.style.fontSize : tex = false;
                    for (var j = 0; j < tn.length; j++) {
                        tn[j].style.fontSize = '3rem';
                    }
                } else if (n4 == 1) {
                    styleArr[3] = this.style.margin;
                    this.style.margin = '2.67rem 0';
                }

            });
            lw[i].addEventListener('mouseleave', function () {
                if (n1 == 1) {
                    this.style.backgroundColor = styleArr[0];
                } else if (n2 == 1) {
                    this.style.letterSpacing = styleArr[1];
                } else if (n3 == 1) {
                    if (this.querySelector('h3')) {
                        tNode = this.querySelector('h3');
                        tn = tNode;
                    } else if (this.querySelector('h2')) {
                        titNode = this.querySelector('h2');
                        tn = titNode;
                    }
                    for (var j = 0; j < tn.length; j++) {
                        tn[j].style.fontSize = styleArr[2];
                    }
                } else if (n4 == 1) {
                    this.style.margin = styleArr[3];
                }
            });
        }
    }
    window.addEventListener('resize', function () {
        execute_setMp();
    });
}

var ncn = 1;
var nor_steps = 1;
//  label, space, breakOff, lType, className, bgc, marginLeft
function add_listNode(contentArr, styleArr) {
    var nc;
    if (styleArr[2] == 111) {
        nc = document.createElement('ul');
        nc.setAttribute('index', ncn);
        document.body.appendChild(nc);
        nc.setAttribute('id', 'listNodeWrap' + nc.getAttribute('index'));
        nc.style.width = document.body.clientWidth + 'px';
        tmp();
        ncn++;
    } else {
        var nc = document.getElementById('listNodeWrap' + (ncn - 1).toString());
        tmp();
    }

    function tmp() {
        var nn = document.createElement('li');
        nc.appendChild(nn);
        nn.className = 'listNode';
        if (styleArr[4] == undefined) {} else {
            nn.className = 'listNode ' + 'liNd' + styleArr[3];
        }
        if (styleArr[5] == undefined) {} else {
            nn.style.backgroundColor = styleArr[5];
        }
        if (styleArr[6] == undefined) {
            nn.style.marginLeft = 2 + 'rem';
        } else {
            nn.style.marginLeft = styleArr[6];
        }
        if (styleArr[6]) {
            var ifSet = styleArr[6].charAt(styleArr[6].length - 1);
            var value = styleArr[6].substring(0, styleArr[6].length - 1);
            if (isNaN(ifSet)) {
                switch (ifSet) {
                    case 'T':
                        nn.style.marginTop = value + 'rem';
                        console.log('mt: ' + value + 'rem');
                        break;
                    case 'B':
                        nn.style.marginBottom = value + 'rem';
                        console.log('mb: ' + value + 'rem');
                        break;
                    case 'L':
                        nn.style.marginLeft = value + 'rem';
                        console.log('ml: ' + value + 'rem');
                        break;
                    case 'R':
                        nn.style.marginRight = value + 'rem';
                        console.log('mr: ' + value + 'rem');
                        break;
                }
            }
        }
        for (var i = 0; i < contentArr.length; i++) {
            var texNode = document.createElement(styleArr[0]);
            nn.appendChild(texNode);
            texNode.innerHTML = contentArr[i];
            texNode.style.display = 'inline-block';
            styleArr[1] && true ? styleArr[1] = styleArr[1] : styleArr[1] = 2;
            texNode.setAttribute('index', i);
            texNode.getAttribute('index') == 0 ? texNode.style.marginLeft = 0 : texNode.style.marginLeft = styleArr[1] + 'rem';
        }
        if (styleArr[3] != undefined) {
            nn.style.listStyleType = styleArr[3];
        } else {
            nn.style.listStyleType = 'disc';
        }
        window.addEventListener('load', function () {
            nn.style.font = nn.querySelector(styleArr[0]).style.font;
            console.log(nn.querySelector(styleArr[0]).style.font);
        })
    }
}

// function add_normalNode(arr, label, space, mgn, name, bgColor, textIndent, font) {
function add_normalNode(contentArr, styleArr) {
    var div = document.createElement('div');
    div.setAttribute('index', nor_steps);
    div.setAttribute('id', 'normalNodeWrap' + div.getAttribute('index'));
    div.setAttribute('class', 'normalNodeWrap');
    div.style.display = 'block';
    // div.style.justifyContent = 'left';
    div.style.backgroundColor = 'transparent';
    document.body.appendChild(div);
    if (styleArr[2] == undefined) {
        div.style.margin = '1rem 0.25rem';
    } else {
        div.style.margin = styleArr[2];
    }
    if (styleArr[2]) {
        var ifSet = styleArr[2].charAt(styleArr[2].length - 1);
        var value = styleArr[2].substring(0, styleArr[2].length - 1);
        if (isNaN(ifSet)) {
            switch (ifSet) {
                case 'T':
                    div.style.marginTop = value + 'rem';
                    console.log('mt: ' + value + 'px');
                    break;
                case 'B':
                    div.style.marginBottom = value + 'rem';
                    console.log('mb: ' + value + 'rem');
                    break;
                case 'L':
                    div.style.marginLeft = value + 'rem';
                    console.log('ml: ' + value + 'rem');
                    break;
                case 'R':
                    div.style.marginRight = value + 'rem';
                    console.log('mr: ' + value + 'rem');
                    break;
            }
        }
    }
    div.className = 'normalNode';
    if (styleArr[3] == undefined) {} else {
        div.className = 'normalNode ' + 'nor' + styleArr[3];
    }
    if (styleArr[4] == undefined) {} else {
        div.style.backgroundColor = styleArr[4];
    }
    if (styleArr[5] == undefined) {
        div.style.textIndent = 0;
    } else {
        div.style.textIndent = styleArr[5];
    }
    if (styleArr[6] == undefined) {} else {
        div.style.font = styleArr[6];
    }

    for (var i = 0; i < contentArr.length; i++) {
        var texNode = document.createElement(styleArr[0]);
        if (styleArr[0] == 'h3') {
            texNode.style.fontWeight = '800';
        }
        div.appendChild(texNode);
        texNode.innerHTML = contentArr[i];
        texNode.style.display = 'inline-block';
        // texNode.style.float = 'left';
        styleArr[1] && true ? styleArr[1] = styleArr[1] : styleArr[1] = 2;
        texNode.setAttribute('index', i);
        texNode.getAttribute('index') == 0 ? texNode.style.marginLeft = 0 : texNode.style.marginLeft = styleArr[1] + 'rem';
    }
    nor_steps++;
}