var formStep = 0;
var formTitleCtr_Step = 0;
var formTextCtr_Step = 0;
var formTitleStep = 0;
var formTextStep = 0;

function add_formNode(obj) {
    var table = document.createElement("table");
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');

    var tri = 0;
    var tra = [];

    document.body.appendChild(table);
    formStep <= 9 ? formStep = '0' + formStep : formStep = formStep;
    table.id = 'form_ctr' + formStep;
    // document.body.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);

    //设置 boxShadow
    if (obj.boxShadow) {
        var arr = obj.boxShadow;
        console.log(obj.boxShadow);
        arr[3] == undefined ? arr[3] = '' : arr[3] = arr[3];
        table.style.boxShadow = arr[0] + ' ' + arr[1] + ' ' + arr[2] + ' ' + arr[3] + ' ' + arr[4];

        console.log('formIndex: ' + formStep + '; table.globalStyle {' + '\n\t' +
            'boxShadow: ' + table.style.boxShadow + ';' + '\n' +
            '}' + '\n------------------------');
    }

    // 行数
    var columnLength = 0;
    var rowLength = 0;

    // 表单头部
    if (obj.c0) {
        rowLength = (obj.c0).length;
        var titleLabel = 'h4';
        var tr = document.createElement('tr');
        formTitleCtr_Step <= 9 ?
            formTitleCtr_Step = '0' + formTitleCtr_Step :
            formTitleCtr_Step = formTitleCtr_Step;
        tr.setAttribute('id', 'formNodeTit_ctr' + formTitleCtr_Step);
        thead.appendChild(tr);
        tr.setAttribute('tri', tri);
        tra[tri] = tr;
        tri++;
        // 标签判断模块 情况02
        if (obj.setTitLabelType) {
            if (obj.setTitLabelType == 'all') {
                if (obj.titLabel) {
                    titleLabel = obj.titLabel;
                }
            }
        }
        setCtrSize();
        // 样式 size
        function setCtrSize() {
            function lfn(obj, type) {
                var ini = obj;
                if (ini.charAt(ini.length - 1) == '%') {
                    var value = (ini.substr(0, ini.length - 1) * 0.01);
                    if (type) {
                        table.style.width = ((document.body.clientWidth) * value) + 'px';
                    } else {
                        table.style.height = ((document.body.clientWidth) * value) + 'px';
                    }

                } else {
                    if (type) {
                        table.style.width = ini;
                    } else {
                        table.style.height = ini;
                    }
                }
            };

            if (obj.ctrSize[0]) {
                lfn(obj.ctrSize[0], 1);
            } else if (obj.ctrSize[1]) {
                lfn(obj.ctrSize[1]);
            }
        }
        // global margin
        if (obj.globalStyle_0 && (obj.globalStyle_0)[2]) {
            var sl = (obj.globalStyle_0[2]).length;
            var sty = obj.globalStyle_0[2];
            table.style.boxSizing = 'border-box';
            switch (sl) {
                case 1:
                    table.style.margin = sty[0] + 'rem';
                    break;
                case 2:
                    table.style.margin = sty[0] + 'rem' + ' ' + sty[1] + 'rem'
                    break;
                case 3:
                    // 左 上 下
                    table.style.margin = sty[1] + 'rem ' +
                        sty[0] + 'rem ' +
                        sty[2] + 'rem';
                    break;
                case 4:
                    // 上 下 左 右
                    table.style.margin = sty[0] + 'rem ' +
                        sty[3] + 'rem ' +
                        sty[1] + 'rem ' +
                        sty[2] + 'rem';
                    break;
            }

            function lfn() {
                if (table.clientWidth + table.offsetLeft > document.body.clientWidth) {
                    if ((obj.globalStyle_0[2]).length == 2 || (obj.globalStyle_0[2]).length == 4) {
                        var minuend = (parseInt(table.style.marginLeft) + parseInt(table.style.marginRight)) *
                            parseInt(document.documentElement.style.fontSize);
                        table.style.width =
                            table.clientWidth - minuend + 'px';
                    } else {
                        table.style.width =
                            (table.clientWidth - ((table.clientWidth + table.offsetLeft) - document.body
                                .clientWidth)) + 'px';
                    }
                }
            }
            lfn();
            window.addEventListener('resize', function () {
                setCtrSize();
                lfn();
                if (sl == 2 || sl == 4) {
                    var minuend = (parseInt(table.style.marginLeft) + parseInt(table.style.marginRight)) *
                        parseInt(document.documentElement.style.fontSize);
                    table.style.width =
                        table.clientWidth - minuend + 'px';
                    console.log(table.clientWidth - minuend);
                }
            });
        }

        // global borderRadius
        var hsBorderRadius = 0;
        if (obj.globalStyle_0 && (obj.globalStyle_0)[4]) {
            var sl = (obj.globalStyle_0[4]).length;
            var sty = obj.globalStyle_0[4];
            switch (sl) {
                case 1:
                    table.style.borderRadius = sty[0] + 'px';
                    hsBorderRadius = 1;
                    break;
                case 2:
                    table.style.borderRadius = sty[0] + 'px' + ' ' + sty[1] + 'px'
                    hsBorderRadius = 1;
                    break;
                case 3:
                    // 上 (左右) 下
                    table.style.borderRadius = sty[0] + 'px ' +
                        sty[1] + 'px ' +
                        sty[2] + 'px';
                    table.style.overflow = 'hidden';
                    hsBorderRadius = 1;
                    break;
                case 4:
                    // 上 下 左 右
                    table.style.borderRadius = sty[0] + 'px ' +
                        sty[1] + 'px ' +
                        sty[2] + 'px ' +
                        sty[3] + 'px';
                    hsBorderRadius = 1;
                    break;
            }
        }


        for (var i = 0; i < (obj.c0).length; i++) {
            var th = document.createElement('th');
            var titNode = document.createElement(titleLabel);
            formTitleStep <= 9 ? formTitleStep = '0' + formTitleStep : formTitleStep = formTitleStep;
            tr.appendChild(th);
            th.appendChild(titNode);

            // 设置属性
            titNode.innerHTML = obj.c0[i];
            titNode.setAttribute('index', i);
            titNode.setAttribute('id', 'formNodeTit' + formTitleStep);
            titNode.style.margin = 0;
            titNode.style.padding = '0.96rem 0';

            // global border
            if (obj.globalStyle_0 && (obj.globalStyle_0)[1]) {
                if ((obj.globalStyle_0)[1] == 1) {
                    th.style.border = '0.05rem solid #666';
                }
            }
            // global fontWeight
            if (obj.globalStyle_0 && (obj.globalStyle_0)[3]) {
                var thw = 800;
                if ((obj.globalStyle_0)[3] == 1 ||
                    (obj.globalStyle_0)[3] == undefined ||
                    (obj.globalStyle_0)[3] == '') {} else if ((obj.globalStyle_0)[3] == 3) {
                    thw = 400;
                } else if ((obj.globalStyle_0[3]) == 3) {
                    thw = 800;
                }
                titNode.style.fontWeight = thw;
            }
            // 设置过 borderRadius 会执行
            if (hsBorderRadius == 1) {
                th.style.borderLeft = 0;
                th.style.borderRight = 0;
            }

            // 设置精准属性
            function setExcStye() {
                if (obj.cStyle) {
                    for (var x = 0; x < (obj.cStyle).length; x++) {
                        if (obj.cStyle[x]) {
                            var sty = obj.cStyle[x];

                            function localLib(e) {
                                if (sty[2] == 'bgc') {
                                    e.style.backgroundColor = sty[3];
                                } else if (sty[2] == 'c') {
                                    e.style.color = sty[3];
                                } else if (sty[2] == 'pd') {
                                    e.style.padding = sty[3];
                                } else if (sty[2] == 'lb') {
                                    e.style.letterSpacing = sty[3];
                                } else if (sty[2] == 'ft') {
                                    e.style.font = sty[3];
                                } else {
                                    sty[2] = sty[3];
                                }
                            }

                            function localFn(e) {
                                if (e == texNode) {
                                    if (sty[0]) {
                                        if (tr.getAttribute('index') == sty[0] - 1) {
                                            if (sty[1]) {
                                                if (sty[1].indexOf(',') != -1) {
                                                    var xif = (sty[1]).split(",");
                                                    for (var ij = 0; ij < xif.length; ij++) {
                                                        if (xif[ij] == 1 && e.getAttribute('index') == ij) {
                                                            localLib(e);
                                                        }
                                                    }
                                                } else {
                                                    localLib(e);
                                                }
                                            }
                                        }
                                    }
                                } else {
                                    if (sty[1]) {
                                        if (sty[1].indexOf(',') != -1) {
                                            var xif = (sty[1]).split(",");
                                            for (var ij = 0; ij < xif.length; ij++) {
                                                console.log(e.getAttribute('index'));
                                                if (xif[ij] == 1 && e.getAttribute('index') == ij) {
                                                    localLib(e);
                                                }
                                            }
                                        } else {
                                            localLib(e);
                                        }
                                    }
                                }
                            }

                            if (sty[0] == 0) {
                                // title
                                if (titNode) {
                                    localFn(titNode);
                                }
                            } else {
                                // content
                                if (texNode) {
                                    localFn(texNode);
                                }
                            }
                        }
                    }
                }
            }
            setExcStye();

            formTitleStep = parseInt(formTitleStep);
            formTitleStep++;
        }
        formTitleCtr_Step = parseInt(formTitleCtr_Step);
        formTitleCtr_Step++;
    }

    // 表单内容
    if (obj.contents) {
        var cts = obj.contents;
        var label = 'h5';
        columnLength = (obj.contents).length;
        for (var i = 0; i < columnLength; i++) {
            var tr = document.createElement('tr');
            tr.setAttribute('index', i);

            //针对没有 标题 的情况 待修改
            if (rowLength == 0) {
                if (columnLength == 1) {
                    rowLength = cts[0].length;
                } else {
                    var tempNum01 = cts[i].length;
                    if (cts[i - 1]) {
                        var tempNum02 = cts[i - 1].length;
                        if (tempNum02 > tempNum01) {
                            rowLength = tempNum02;
                        }
                        console.log('第' + formStep + '个表格的行数为: ' + rowLength + '; 样式: 无title.');
                    }
                }
            }

            // 标签判断模块 情况03
            if (obj.setTexLabelType) {
                if (obj.setTexLabelType == 'all') {
                    if (obj.texLabel) {
                        label = obj.texLabel;
                    }
                }
            }

            tbody.appendChild(tr);
            tr.setAttribute('tri', tri);
            tra[tri] = tr;
            tri++;
            for (var j = 0; j < rowLength; j++) {
                var td = document.createElement('td');
                tr.appendChild(td);
                td.setAttribute('index', j);

                // 标签判断模块 情况04
                if (obj.setLabelType) {
                    if (obj.setLabelType == 'part') {
                        if (obj.setLabel) {
                            var styleLength = (obj.setLabel).length;
                            var s = obj.setLabel;
                            for (var k = 0; k < styleLength; k++) {
                                if ((s[i])[0]) {
                                    // 行
                                    var hang = (s[i])[0];
                                    if ((s[i])[1]) {
                                        if ((s[i][1] == 't1')) {
                                            // 列
                                            var lie = (s[i])[2];
                                            if (lie == 'all') {
                                                if (tr.getAttribute('index') == hang) {
                                                    if ((s[i])[3]) {
                                                        label = (s[i])[3];
                                                    }
                                                }
                                            } else {
                                                // 细分
                                                var xif = ((s[i])[2]).split(",");
                                                for (var x = 0; x < xif.length; x++) {
                                                    if (xif[x] == '1') {
                                                        if (td.getAttribute('index') == x) {
                                                            if ((s[i])[3]) {
                                                                label = (s[i])[3];
                                                            }
                                                        }
                                                    } else if (xif[x] == '0') {
                                                        if (td.getAttribute('index') == x) {
                                                            if ((s[i])[4]) {
                                                                label = (s[i])[4];
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        } else {
                                            var s = (s[i])[1];
                                            if (s.indexOf(',') == -1) {
                                                label = s;
                                            } else {
                                                var st = s.split(",");
                                                for (var y = 0; y < st.length; y++) {
                                                    if (td.getAttribute('index') == y) {
                                                        label = st[y];
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                var texNode = document.createElement(label);
                texNode.style.margin = '0';
                td.style.margin = '0';
                td.style.padding = '0';
                texNode.style.padding = '0.64rem 0';
                texNode.setAttribute('index', j);
                td.appendChild(texNode);
                texNode.innerHTML = (cts[i])[j];

                // global border
                if (obj.globalStyle_0 && (obj.globalStyle_0)[1]) {
                    // border 1: table: border-collapse: collapse; td,th: border: 0.05rem solid #666;
                    if ((obj.globalStyle_0)[1] == 1) {
                        td.style.border = '0.05rem solid #666';
                    }
                }
                // global fontWeight
                if (obj.globalStyle_0 && (obj.globalStyle_0)[2]) {
                    var tdw = 400;
                    // fontWeight 1/2/3  1: {th: 800 td: 400}; 2: {th: 400 td: 100} 3: {th: 800 td: 100}
                    if ((obj.globalStyle_0)[2] == 1 ||
                        (obj.globalStyle_0)[2] == undefined ||
                        (obj.globalStyle_0)[2] == '') {} else if ((obj.globalStyle_0)[2] == 2) {
                        tdw = 100;
                    } else if ((obj.globalStyle_0[2]) == 3) {
                        tdw = 100;
                    }
                    texNode.style.fontWeight = tdw;
                }

                setExcStye();

                // 设置过 borderRadius 会执行
                if (hsBorderRadius == 1) {
                    td.style.borderLeft = 0;
                    td.style.borderRight = 0;
                }

            }
        }
    }

    if (obj.globalStyle_0) {
        var styleList01 = obj.globalStyle_0;
        if (styleList01[0]) {
            // global textAlign
            var rsc = styleList01[0];
            var styTexA = 'center';
            if (rsc == 1 || rsc == undefined || rsc == 0 || rsc == '') {} else if (rsc == 2) {
                styTexA = 'left';
            } else if (rsc == 3) {
                styTexA = 'right';
            }
            table.style.textAlign = styTexA;
        }
    }

    // global border
    if (obj.globalStyle_0 && (obj.globalStyle_0)[1]) {
        if ((obj.globalStyle_0)[1] == 1) {
            table.style.borderCollapse = 'collapse';
            table.style.border = '0.05rem solid #666';
        }
    }

    // tr属性
    if (obj.trStyle) {
        for (var i = 0; i < (obj.trStyle).length; i++) {
            var temp = obj.trStyle[i];

            function localFn(elem) {
                if (temp[1] && temp[2]) {
                    if (temp[1] == 'bgc') {
                        elem.style.backgroundColor = temp[2];
                    } else if (temp[1] == 'c') {
                        elem.style.color = temp[2];
                    } else if (temp[1] == 'pd') {
                        elem.style.padding = temp[2];
                    } else if (temp[1] == 'lb') {
                        elem.style.letterSpacing = temp[2];
                    } else if (temp[1] == 'ft') {
                        elem.style.font = temp[2];
                    } else {
                        temp[1] = temp[2];
                    }
                }
            }

            if (temp[0]) {
                if (temp[0] == 't') {
                    var num = parseInt(formTitleCtr_Step - 1);
                    num <= 9 ? num = '0' + num : num = num;
                    var name = 'formNodeTit_ctr' + num;
                    var e = document.getElementById(name);
                    localFn(e);
                }
                for (var j = 0; j < (tra.length); j++) {
                    if (tra[j].getAttribute('tri') == temp[0]) {
                        var aTmp = tra[j];
                        localFn(aTmp);
                    }
                }
            }
        }
    }
    console.log('formIndex: ' + formStep + '; globalStyle {' + '\n\t' +
        'textAlign: ' + styTexA + ';' + '\n' + '}' + '\n------------------------');
    console.log('formIndex: ' + formStep + '; table.globalStyle {' + '\n' + '\t' +
        'borderCollapse: ' + table.style.borderCollapse + ';' + '\n' + '\t' +
        'border: ' + table.style.border + ';' + '\n' +
        '}' + '\n------------------------');
    console.log('formIndex: ' + formStep + '; th.globalStyle {' + '\n\t' +
        'border: ' + th.style.border + ';' + '\n' +
        '}' + '\n------------------------');
    console.log('formIndex: ' + formStep + '; td.globalStyle {' + '\n\t' +
        'border: ' + td.style.border + ';' + '\n' +
        '}' + '\n------------------------');

    formStep = parseInt(formStep);
    formStep++;
}