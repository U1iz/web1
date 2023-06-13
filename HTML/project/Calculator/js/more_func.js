var ipt = document.getElementById('i');
var t1 = document.getElementById('show1');
var t2 = document.getElementById('show2');
var steps = 0;
var d_flag = 0;

function display(n) {
    ipt.value += n;
    t1.innerText += n
}

var n = new Array();
var c = new Array();
var elem = new Array();

function setName(e, e_name, add_arr, a) {
    window.e = document.getElementById(e_name);
    if (add_arr == 1) {
        n.push(e);
    }
    if (add_arr == 2) {
        c.push(e);
    }
    if (a) {
        if (a == 1) {
            elem.push(e);
        }
    }
}

setName(zero, 'zero', 1, a = 1);
setName(one, 'one', 1, a = 1);
setName(two, 'two', 1, a = 1);
setName(three, 'three', 1, a = 1);
setName(four, 'four', 1, a = 1);
setName(five, 'fve', 1, a = 1);
setName(six, 'six', 1, a = 1);
setName(seven, 'seven', 1, a = 1);
setName(eight, 'eight', 1, a = 1);
setName(nine, 'nine', 1, a = 1);
setName(point, 'point', 1, a = 1); // .

setName(plus, 'plus', a = 1); // +
setName(minus, 'minus', a = 1); // -
setName(divide, 'divide', a = 1); // ÷
setName(multiply, 'multiply', a = 1); // ×
setName(remainder, 'remainder', a = 1); // %

setName(change, 'change', 2);
setName(equal, 'equal', 2); // ==

setName(allClear, 'allClear', 2);
setName(e_clear, 'e_clear', 2);
setName(del, 'del', 2);

function Refresh_steps() {
    for (var i = 10; i < elem.length; i++) {
        elem[i].setAttribute('value2', 1);
    }
}

function str_show__(e) {
    var tmp = e.getAttribute('value1');
    var temp = e.getAttribute('value2');
    // console.log(tmp);
    if (tmp == 0) {
        // 防止符号类字符重复出现模块
        if (temp == 0) {
            d_flag += 2;
            d_flag = 0 ? d_flag += 2 : d_flag = d_flag;
            d_flag > 2 ? d_flag = 2 : d_flag = d_flag;
        } else if (d_flag == 0 | temp == 1) {
            d_flag += 2;
            d_flag = 0 ? d_flag += 2 : d_flag = d_flag;
            d_flag > 2 ? d_flag = 2 : d_flag = d_flag;

            for (var i = 10; i < elem.length; i++) {
                elem[i].setAttribute('value2', 0);
            }
        }
        /////////
    } else {
        Refresh_steps();
    }
}

window.addEventListener('keydown', function (e) {
    console.log(e.keyCode);
    // 48 57
    // 96 105
    for (var i = 48; i <= 57; i++) {
        function tmp() {
            str_show__(n[i - 48]);
            display(i - 48);
            click_style(n[i - 48]);
        }
        if (e.keyCode === i) {
            if (e.keyCode === 56) {
                if (e.shiftKey) {} else {
                    tmp();
                }
            } else if (e.keyCode === 53) {
                if (e.shiftKey) {} else {
                    tmp();
                }
            } else {
                tmp();
            }
        }
    }
    for (var i = 96; i <= 105; i++) {
        if (e.keyCode === i) {
            str_show__(n[i - 96]);
            display(i - 96);
            click_style(n[i - 96]);
        }
    }

    // 107
    if (e.shiftKey && e.keyCode === 187 || e.keyCode === 107) {
        // display('+');
        // temp(plus);
        plus.click();
        click_style(plus);
    }
    // 189 109
    else if (e.keyCode === 189 || e.keyCode === 109) {
        minus.click();
        click_style(minus);
    }
    // 56 106
    else if (e.shiftKey && e.keyCode === 56 || e.keyCode === 106) {
        multiply.click();
        click_style(multiply);
    }
    // 8 46
    else if (e.keyCode === 8 || e.keyCode === 46) {
        del.click();
        click_style(del);
    }
    // 191 111
    else if (e.keyCode === 191 || e.keyCode === 111) {
        divide.click();
        click_style(divide);
    }
    // 13 187
    else if (e.keyCode === 13 || e.keyCode === 187) {
        equal.click();
        click_style(equal);
    }
    // 53
    else if (e.shiftKey && e.keyCode === 53) {
        remainder.click();
        click_style(remainder);
    }
    // 27
    else if (e.keyCode === 27) {
        // e_clear.click();
        // click_style(e_clear);
        allClear.click();
        click_style(allClear);
    }
    // 110 190
    else if (e.keyCode === 110 || e.keyCode === 190) {
        point.click();
        click_style(point);
    }
    if (e.keyCode === 32) {
        (function () {
            if (s_flag) {
                divide.innerHTML = '&nbsp;' + '÷' + '&nbsp;';
                multiply.innerHTML = '&nbsp;' + '×' + '&nbsp;';
                s_flag = false;
                divide.setAttribute('is_normal', 0);
            } else {
                divide.innerHTML = '&nbsp;' + '/' + '&nbsp;';
                multiply.innerHTML = '&nbsp;' + '*' + '&nbsp;';
                s_flag = true;
                divide.setAttribute('is_normal', 1);
            }
        })();
    }
})

var s_flag = true;
var n_a = new Array(); // value1 == 0
var n_ar = new Array(); // value1 == 2
var n_arr = new Array(); // value1 == 1

var v0 = 'rgb(191, 255, 245)';
var v1 = 'rgb(197, 191, 255)';
var v2 = 'rgb(255, 209, 191)';

function click_style(e) {
    var color = e.style.backgroundColor;
    var tmp = e.getAttribute('value1');
    if (tmp == 0) {
        n_a.push(color);
        e.style.backgroundColor = v0;
        window.addEventListener('keyup', function () {
            e.style.backgroundColor = n_a[0];
            n_a.length = 2;
        });
    } else if (tmp == 1) {
        n_arr.push(color);
        e.style.backgroundColor = v1;
        window.addEventListener('keyup', function () {
            e.style.backgroundColor = n_arr[0];
            n_arr.length = 2;
            // console.log(n_arr[0]+'\n'+n_arr[1]);
            console.log(n_arr);
        });
    } else if (tmp == 2) {
        n_ar.push(color);
        e.style.backgroundColor = v2;
        window.addEventListener('keyup', function () {
            e.style.backgroundColor = n_ar[0];
            n_ar.length = 2;
        });
    }
}