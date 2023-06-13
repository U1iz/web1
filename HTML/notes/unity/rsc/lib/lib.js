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
})();

function GetAttribute(data, sign, keyQuery) {
    data.indexOf(sign) != -1 && (function () {
        let temp = data.split(sign);
        keyQuery[0] && (function () {
            temp.indexOf(keyQuery[0]) != -1 && (function () {
                let index = temp.indexOf(keyQuery[0]);
                // if(keyQuery[1] == undefined || keyQuery[1] ==  null || Number(keyQuery[1])){}
                let result = keyQuery[1] - temp[1];
                index == 0 && (function () {
                    result = keyQuery[1] + temp[1];
                })
            })
        })
    })();
    return result;
}

function newStyle_API_Ver000(arr, elemId) {
    arr && (function () {
        let wiw = document.documentElement.clientWidth;
        let wih = document.documentElement.clientHeight;
        for (let i = 0; i < arr.length; i++) {
            let key = arr[i];
            let elem = document.getElementById(elemId);
            let keyName = key[0].toString();
            lfn_lib(keyName, key);

            function lfn_lib(keyName, key) {
                switch (keyName) {
                    // style
                    // font class
                    case 'fontWeight':
                        elem.style.keyName = key[1];
                        break;
                    case 'fontSize':
                        elem.style.fontSize = key[1];
                        break;
                    case 'fontFamily':
                        elem.style.fontFamily = key[1];
                        break;
                    case 'font':
                        let temp = elem.getAttribute('style');
                        elem.setAttribute('style', temp + 'font: ' + key[1] + ';');
                        break;
                    case 'letterSpacing':
                    case 'LSP':
                        elem.style.letterSpacing = key[1];
                        break;
                    case 'text-Indent':
                    case 'text-indent':
                    case 'textIndent':
                    case 'TID':
                        elem.style.textIndent = key[1];
                        break;
                    case 'text-decoration':
                    case 'textDecoration':
                    case 'text-d':
                    case 'textD':
                        elem.style.textDecoration = key[1];
                        break;
                        // external position
                    case 'display':
                        elem.style.display = key[1];
                        break;
                    case 'position':
                    case 'pos':
                        elem.style.position = key[1];
                        break;
                    case 'top':
                        elem.style.top = key[1];
                        break;
                    case 'bottom':
                        elem.style.bottom = key[1];
                        break;
                    case 'left':
                        elem.style.left = key[1];
                        break;
                    case 'right':
                        elem.style.right = key[1];
                        break;
                        // external margin
                    case 'margin':
                    case 'M':
                        elem.style.margin = key[1];
                        break;
                    case 'margin-Left':
                    case 'margin-reft':
                    case 'marginLeft':
                    case 'marginL':
                    case 'ML':
                        elem.style.marginLeft = key[1];
                        break;
                    case 'margin-Right':
                    case 'margin-right':
                    case 'marginRight':
                    case 'marginR':
                    case 'MR':
                        elem.style.marginRight = key[1];
                        break;
                    case 'margin-Top':
                    case 'margin-top':
                    case 'marginTop':
                    case 'marginT':
                    case 'MT':
                        elem.style.marginTop = key[1];
                        break;
                    case 'margin-Bottom':
                    case 'margin-bottom':
                    case 'marginBottom':
                    case 'marginB':
                    case 'MB':
                        elem.style.marginBottom = key[1];
                        break;
                        // external padding
                    case 'padding':
                    case 'PD':
                        elem.style.padding = key[1];
                        break;
                    case 'padding-Left':
                    case 'padding-left':
                    case 'paddingLeft':
                    case 'paddingL':
                    case 'PL':
                        elem.style.paddingLeft = key[1];
                        break;
                    case 'padding-Right':
                    case 'padding-right':
                    case 'paddingRight':
                    case 'paddingR':
                    case 'PR':
                        elem.style.paddingRight = key[1];
                        break;
                    case 'padding-Top':
                    case 'padding-top':
                    case 'paddingTop':
                    case 'paddingT':
                    case 'PT':
                        elem.style.paddingTop = key[1];
                        break;
                    case 'padding-Bottom':
                    case 'padding-bottom':
                    case 'paddingBottom':
                    case 'paddingB':
                    case 'PB':
                        elem.style.paddingBottom = key[1];
                        break;
                        // external size
                    case 'width':
                    case 'W':
                        elem.style.width = key[1];
                        break;
                    case 'height':
                    case 'H':
                        elem.style.height = key[1];
                        break;
                        // external style
                    case 'whiteSpace':
                        elem.style.whiteSpace = key[1];
                        break;
                    case 'backgroundColor':
                    case 'BGC':
                    case 'bgC':
                    case 'bgc':
                        elem.style.backgroundColor = key[1];
                        break;
                    case 'background':
                        elem.style.background = key[1];
                        break;
                    case 'backgroundImage':
                    case 'backgroundImg':
                    case 'background-img':
                    case 'background-image':
                        elem.style.backgroundImage = key[1];
                        break;
                    case 'color':
                    case 'C':
                        elem.style.color = key[1];
                        break;
                    case 'boxShadow':
                        elem.style.boxShadow = key[1];
                        break;
                    case 'borderRadius':
                        elem.style.borderRadius = key[1];
                        break;
                    case 'transition':
                        elem.style.transition = key[1];
                        break;
                    case 'cursor':
                        elem.style.cursor = key[1];
                        break;
                    case 'justify-content':
                    case 'justifyContent':
                    case 'JC':
                        elem.style.justifyContent = key[1];
                        break;
                        // script module
                    case 'js-style':
                        let value = new Array;
                        value[0] = key[2];
                        if (key[2].indexOf('-') != -1) {
                            value = key[2].split("-");
                        }
                        let texValue = elem.innerText;
                        switch (key[1]) {
                            case 'fontPosition':
                                switch (value[0]) {
                                    case 11:
                                    case 'left':
                                    case 'L':
                                        elem.style.textAlign = 'left';
                                        break;
                                    case 22:
                                    case 'middle':
                                    case 'center':
                                        elem.style.textAlign = 'center';
                                        break;
                                    case 33:
                                    case 'right':
                                    case 'R':
                                        elem.style.textAlign = 'right';
                                        break;
                                    default:
                                        elem.style.textAlign = 'left';
                                        window.addEventListener('resize', function () {
                                            elem.style.textIndent = elem.clientWidth * value[0] + 'px';
                                        })
                                        elem.style.textIndent = elem.clientWidth * value[0] + 'px';
                                        break;
                                };
                                value[1] && (function () {
                                    let pdv = (parseInt(elem.style.paddingTop) + parseInt(elem.style.paddingBottom)) *
                                        parseInt(document.documentElement.style.fontSize);
                                    switch (value[1]) {
                                        case 11:
                                        case 'top':
                                        case 'T':
                                            elem.style.paddingTop = '0';
                                            elem.style.paddingBottom = pdv + 'px';
                                            break;
                                        case 22:
                                        case 'middle':
                                        case 'center':
                                            // elem.style.lineHeight = elem.clientHeight + 'px';
                                            break;
                                        case 33:
                                        case 'bottom':
                                        case 'B':
                                            window.addEventListener('resize', function () {
                                                elem.style.paddingBottom = 0;
                                                elem.style.paddingTop = pdv + 'px';
                                            })
                                            elem.style.paddingBottom = 0;
                                            elem.style.paddingTop = pdv + 'px';
                                            break;
                                        default:
                                            window.addEventListener('resize', function () {
                                                elem.style.lineHeight = elem.clientHeight * value[1] + 'px';
                                            })
                                            elem.style.lineHeight = elem.clientHeight * value[1] + 'px';
                                            break;
                                    }
                                })();
                                break;
                        }
                        break;
                    case 'new':

                        break;

                    case 'js-addEventListener':
                    case 'js-AEL':
                    case 'js-eventListener':
                        let ini = key;
                        ini.shift();
                        let event = ini[0];
                        ini.shift();
                        // newStyle_API_Ver000(ini, elemId, event);
                        lfn_event(ini, event);
                        break;
                    case 'js-event':
                    case 'js-Event':
                    case 'js-E':
                        let event_ini = key;
                        event_ini.shift();
                        let eEvent = event_ini[0];
                        event_ini.shift();
                        // 获取时间参数 -
                        lfn_jsEvent(event_ini, eEvent, getTimeAttribute(event_ini, '-'));
                        break;
                    case 'element-attribute':
                    case 'elem-attribute':
                    case 'elem-att':
                    case 'elementAttribute':
                    case 'elemAtt':
                        elem.setAttribute(key[1], key[2]);
                        break;


                        function getTimeAttribute(data, sign) {
                            let temp = data[0];
                            data[0].indexOf(sign) != -1 && (function () {
                                temp = data[0].split(sign);
                            })();
                            return temp;
                        }
                }

                function lfn_jsEvent(ini, event, tat) {
                    let time = ini.shift();

                    let fstNum = tat[0];
                    let stopByNum = false;
                    let stopByTime = false;
                    tat[1] && (function () {
                        switch (tat[1]) {
                            case 'time':
                            case 't':
                                stopByTime = true;
                                break;
                            case 'num':
                            case 'n':
                                stopByNum = true;
                                break;
                        }
                    })();
                    // 默认 stopByTime
                    tat[2] && (function () {
                        secNum = tat[2];
                        stopByTime = true;
                    })();

                    function clearTimer(timer, arr, type) {
                        type == 02 ? type = 02 : type = 01;
                        stopByTime && (function () {
                            setTimeout(function () {
                                if (type == 01) {
                                    clearTimeout(timer);
                                } else {
                                    clearInterval(timer);
                                }
                            }, time)
                        })();
                    }

                    event && (function () {
                        switch (event) {
                            case 'setTimeout':
                            case 'STout':
                                let sto_timer = setTimeout(function () {
                                    lfn_lib(ini[0], ini);
                                }, time);
                                break;
                            case 'setInterval':
                            case 'SIL':
                                let sti_timer = setInterval(function () {
                                    lfn_lib(ini[0], ini);
                                }, time);
                                break;

                        }
                    })();
                }

                function lfn_event(ini, event) {
                    event && (function () {
                        switch (event) {
                            case 'onclick':
                            case 'click':
                                elem.addEventListener('click', function () {
                                    lfn_lib(ini[0], ini);
                                })
                                break;
                            case 'onmouseover':
                            case 'mouseover':
                                elem.addEventListener('mouseover', function () {
                                    lfn_lib(ini[0], ini);
                                })
                                break;
                            case 'onmouseout':
                            case 'mouseout':
                                elem.addEventListener('mouseout', function () {
                                    lfn_lib(ini[0], ini);
                                })
                                break;
                            case 'onmouseenter':
                            case 'mouseenter':
                                elem.addEventListener('mouseenter', function () {
                                    lfn_lib(ini[0], ini);
                                    console.log(134);
                                })
                                break;
                            case 'onmouseleave':
                            case 'mouseleave':
                                elem.addEventListener('mouseleave', function () {
                                    lfn_lib(ini[0], ini);
                                })
                                break;
                            case 'resize':
                                window.addEventListener('resize', function () {
                                    lfn_lib(ini[0], ini);
                                })
                                break;
                        }
                    })();
                }
            }
        }
    })();
}

let titleNum = 0;

function add_title(titleTex, titleStyle) {
    let titCtr = document.createElement('div');
    let titleNode = document.createElement('h2');
    switch (titleStyle[0][0]) {
        case 'label':
            titleNode = document.createElement(titleStyle[0][1]);
            break;
    }
    document.body.appendChild(titCtr);
    titCtr.appendChild(titleNode);

    typeof titleTex == 'string' && (function () {
        titleNode.innerHTML = titleTex;
    })();
    typeof titleTex != 'string' && (function () {
        titleTex.length == 1 && (function () {
            titleNode.innerHTML = titleTex;
        })();
        titleTex.length > 1 && (function () {
            let tNode = document.createElement('')
        })();
    })();

    titleNode.style.textAlign = 'center';
    titleNode.id = 'title' + titleNum;
    titleNode.style.padding = '1rem 0 1rem 0';
    newStyle_API_Ver000(titleStyle, 'title' + titleNum);
    titleNum++;
}


window.onload = function () {
    var remSize = (document.documentElement.style.fontSize).toString().substring(0, (document.documentElement.style.fontSize).toString().length - 2);
    var lw = document.querySelectorAll('.listWrap');

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
            var value = 0.06;
            var pos_dir = 'all';
            if (styleArr[6][0]) {
                value = styleArr[6][0];
            }
            if (styleArr[6][1]) {
                pos_dir = styleArr[6][1];
                switch (pos_dir) {
                    case 'T':
                        nn.style.marginTop = value + 'rem';
                        console.log(nn);
                        console.log('------------------------\n\tmargin-top: ' + value + 'rem\n------------------------');
                        break;
                    case 'B':
                        nn.style.marginBottom = value + 'rem';
                        console.log(nn);
                        console.log('------------------------\n\tmargin-bottom: ' + value + 'rem\n------------------------');
                        break;
                    case 'L':
                        nn.style.marginLeft = value + 'rem';
                        console.log(nn);
                        console.log('------------------------\n\tmargin-left: ' + value + 'rem\n------------------------');
                        break;
                    case 'R':
                        nn.style.marginRight = value + 'rem';
                        console.log(nn);
                        console.log('------------------------\n\tmargin-right: ' + value + 'rem\n------------------------');
                        break;
                    case 'all':
                        nn.style.margin = value + 'rem';
                        console.log(nn);
                        console.log('------------------------\n\tmargin: ' + value + 'rem\n------------------------');
                        break;
                }
            }
        }
        for (var i = 0; i < contentArr.length; i++) {
            var texNode = document.createElement(styleArr[0]);
            nn.appendChild(texNode);
            texNode.innerHTML = contentArr[i];
            texNode.style.display = 'inline-block';
            // texNode.style.float = 'left';
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
        })
    }
}

// function add_normalNode(arr, label, space, mgn, name, bgColor, textIndent, font) {
function add_normalNode(contentArr, styleArr, newAPI_child, newAPI_parent) {
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
    } else if (styleArr[2] == '') {} else {
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
        texNode.setAttribute('index', i);
        texNode.setAttribute('id', 'nor' + nor_steps + 'ChildNode' + i);

        texNode.innerHTML = contentArr[i];
        texNode.style.display = 'inline-block';
        // texNode.style.float = 'left';
        styleArr[1] && true ? styleArr[1] = styleArr[1] : styleArr[1] = 2;
        texNode.getAttribute('index') == 0 ? texNode.style.marginLeft = 0 : texNode.style.marginLeft = styleArr[1] + 'rem';
        texNode.id == 'nor' + nor_steps + 'ChildNode0' && styleArr[5] != undefined && styleArr[5].indexOf('-') != -1 && (function () {
            let temp = styleArr[5].split('-');
            temp[0] == 'paragraph' && (function () {
                document.getElementById('nor' + nor_steps + 'ChildNode0').style.textIndent = temp[1];
            })();
        })();


        if (newAPI_child != [] && newAPI_child != undefined) {
            newStyle_API_Ver000(newAPI_child, 'nor' + nor_steps + 'ChildNode' + i);
        }
    }
    if (newAPI_parent != [] && newAPI_parent != undefined) {
        newStyle_API_Ver000(newAPI_parent, 'normalNodeWrap' + div.getAttribute('index'));
    }
    nor_steps++;
}

function add_moduleNode(contentArr, styleArr, newAPI_child, newAPI_parent) {
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
    } else if (styleArr[2] == '') {} else {
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
        texNode.setAttribute('index', i);
        texNode.setAttribute('id', 'nor' + nor_steps + 'ChildNode' + i);

        texNode.innerHTML = contentArr[i];
        texNode.style.display = 'inline-block';
        // texNode.style.float = 'left';
        styleArr[1] && true ? styleArr[1] = styleArr[1] : styleArr[1] = 2;
        texNode.getAttribute('index') == 0 ? texNode.style.marginLeft = 0 : texNode.style.marginLeft = styleArr[1] + 'rem';
        texNode.id == 'nor' + nor_steps + 'ChildNode0' && styleArr[5] != undefined && styleArr[5].indexOf('-') != -1 && (function () {
            let temp = styleArr[5].split('-');
            temp[0] == 'paragraph' && (function () {
                document.getElementById('nor' + nor_steps + 'ChildNode0').style.textIndent = temp[1];
            })();
        })();


        if (newAPI_child != [] && newAPI_child != undefined) {
            newStyle_API_Ver000(newAPI_child, 'nor' + nor_steps + 'ChildNode' + i);
        }
    }
    if (newAPI_parent != [] && newAPI_parent != undefined) {
        newStyle_API_Ver000(newAPI_parent, 'normalNodeWrap' + div.getAttribute('index'));
    }
    nor_steps++;
}

function setDocTitle(str) {
    document.title = str;

}