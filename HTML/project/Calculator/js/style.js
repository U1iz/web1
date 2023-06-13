document.getElementsByClassName("del_ico")[0].addEventListener("mousedown", function (e) {
    e.preventDefault()
})

window.addEventListener("DOMContentLoaded", function () {
    // var fF = 'lcdD';
    // var fF = 'microsoft YaHei';
    var fF = 'arial';

    var win = window.screen;
    var w = document.documentElement;

    var ctr = document.getElementById("container");
    var btn_c = document.getElementById("btn_c");

    var t1 = document.getElementById('show1');
    var t2 = document.getElementById('show2');

    var i_f = document.getElementById("i_family");
    var c_f = document.getElementById("c");

    var type = null;
        t2.style.font = '400 6.4rem ' + fF;
        t1.style.font = "100 1.7rem " + fF;

    function set_fontFamily() {
        if (type == 1) {
            fF = 'lcdD';
        } else if (type == 2) {
            var fF = 'microsoft YaHei';
        } else {
            var fF = 'arial';
        }
        var tmp = btn_c.querySelectorAll('li');
        for (var i = 0; i < tmp.length; i++) {
            tmp[i].style.fontFamily = fF;
        }
        t1.style.fontFamily = fF;
        t2.style.fontFamily = fF;
    }
    set_fontFamily();

    window.addEventListener("keyup", function (e) {
        // 74 75 76
        if (e.altKey && e.keyCode == 13) {
            c_f.onclick()
        } else if (e.keyCode == 83) {
            i_f.focus();
        }
        (function () {
            if (e.keyCode == 74) {
                type = 1;
            } else if (e.keyCode == 75) {
                type = 2;
            } else if (e.keyCode == 76) {
                type = 3;
            }
            set_fontFamily();
        })();
    })

    c_f.onclick = function () {
        if (i_f.value == 1 || i_f.value == 2 || i_f.value == 3) {
            type = i_f.value;
            set_fontFamily();
            i_f.value = '';
            // window.location.reload('#container');
        } else {
            var tmp = prompt("请输入(1/2/3):");
            if (tmp == 1 || tmp == 2 || tmp == 3) {
                type = tmp.value;
                set_fontFamily();
                // window.location.reload('#container');
            } else {
                alert('数值错误，无法执行');
            }
        }
    }


    function set_showBox_style() {
        t1.style.position = 'absolute';
        t1.style.fontSize = '1.9rem';
        t1.style.lineHeight = t1.parentNode.clientHeight + 'px';
        t1.style.paddingRight = '1.8rem';
        // t1.style.letterSpacing = '6rem';
        t1.style.color = '#666';
        t2.style.fontStyle = 'normal';
        t2.style.lineHeight = t2.parentNode.clientHeight + 'px';
        t2.style.paddingRight = '1.8rem';
    }
    set_showBox_style();

    function set_Specific_value(e_name, e_className, e_children_className, animate, situation) {
        var e1 = document.getElementById(e_name);
        var es = e1.querySelectorAll('li');

        e1.className = e_className;

        var colors = new Array();
        for (var i = 0; i < es.length; i++) {
            es[i].setAttribute('index', i)
            es[i].className = e_children_className;
            switch (situation) {
                case 0:
                    es[i].style.backgroundColor = '#f1f1f1';
                    break;
                case 1:
                    es[i].style.backgroundColor = '#fafafa';
                    es[es.length - 1].style.backgroundColor = '#f1f1f1';
                    es[es.length - 1].fontFamily = 'arial';
                    es[es.length - 1].fontWeight = 400;
                    break;
                case 2:
                    break;
            }

            // colors[i] = es[i].style.backgroundColor;
            colors.push(es[i].style.backgroundColor);
            // console.log(es[i].style.backgroundColor);

            console.log(colors);

            if (animate) {
                switch (animate) {
                    case 0:
                        break;
                    case 1:
                        es[i].addEventListener('mouseover', function () {
                            this.style.backgroundColor = '#999';
                            // console.log(es[1].index);
                        })
                        es[i].addEventListener('mouseout', function () {
                            this.style.backgroundColor = colors[this.getAttribute('index')];
                            // console.log(this.getAttribute('index'));
                        })
                }
            }
        }
    }

    set_Specific_value('fst', 'fst_line_ctr', 'fst_line', 1, 0);
    set_Specific_value('sec', 'sec_line_ctr', 'sec_line', 1, 0);
    set_Specific_value('thd', 'thd_line_ctr', 'thd_line', 1, 1);
    set_Specific_value('foh', 'foh_line_ctr', 'foh_line', 1, 1);
    set_Specific_value('fih', 'fih_line_ctr', 'fih_line', 1, 1);
    set_Specific_value('sxh', 'sxh_line_ctr', 'sxh_line', 1, 1);


    t1.style.position = 'relative';
    t1.style.left = ctr.clientWidth / 2 - t1.clientWidth / 2 + 'px';

    function ctr_style() {
        ctr.style.top = w.clientHeight / 2 - ctr.clientHeight / 2 + "px";
    }

    (function () {
        ctr_style();
    }());

    window.addEventListener("resize", function () {
        ctr_style();
    })
})