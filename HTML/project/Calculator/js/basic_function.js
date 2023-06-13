var win = window.screen;
var w = document.documentElement;

var ipt = document.getElementById("i");

var t1 = document.getElementById('show1');
var t2 = document.getElementById('show2');

var elem = new Array();
var c_elem = new Array();
var steps = 0;
var d_flag = 0;

function setName(e, e_name, add_arr) {
    window.e = document.getElementById(e_name);

    if (add_arr == 1) {
        elem.push(e);
    }
    if (add_arr == 2) {
        c_elem.push(e);
    }
}

setName(zero, 'zero', 1);
setName(one, 'one', 1);
setName(two, 'two', 1);
setName(three, 'three', 1);
setName(four, 'four', 1);
setName(five, 'fve', 1);
setName(six, 'six', 1);
setName(seven, 'seven', 1);
setName(eight, 'eight', 1);
setName(nine, 'nine', 1);

setName(point, 'point', 1); // .
setName(plus, 'plus', 1); // +
setName(minus, 'minus', 1); // -
setName(divide, 'divide', 1); // /
setName(multiply, 'multiply', 1); // x
setName(remainder, 'remainder', 1); // %

setName(change, 'change', 2);
setName(equal, 'equal', 2); // ==

setName(allClear, 'allClear', 2);
setName(e_clear, 'e_clear', 2);
setName(del, 'del', 2);

var flag_arr = new Array();

function Refresh_steps() {
    for (var i = 10; i < elem.length; i++) {
        elem[i].setAttribute('value2', 1);
    }
}

function fun_btn() {
    for (var i = 0; i < c_elem.length; i++) {
        c_elem[i].setAttribute('value1', 2);
    }
}
fun_btn();

function r_steps() {
    for (var i = 10; i < elem.length; i++) {
        elem[i].setAttribute('value2', 0);
    }
}

function limit_btn() {
    for (var i = 10; i < elem.length; i++) {
        elem[i].setAttribute('value1', 0);
        elem[i].setAttribute('value2', 0);
    }

}
limit_btn();

function num_btn() {
    for (var i = 0; i < elem.length; i++) {
        if (parseInt(elem[i].innerText) >= 0 && parseInt(elem[i].innerText) <= 9) {
            elem[i].setAttribute('value1', 1);
            console.log(elem[i].value);
        }
    }
}
num_btn();

function Operator_btn() {
    for (var i = 11; i < elem.length; i++) {
        elem[i].setAttribute('f', 1);
    }
}
Operator_btn();

function addNone() {
    t1.innerText += '';
}

function addValue() {
    t1.innerText += this.innerText;
}

var df = 0;

//删除最后一位字符
function delEnd(e) {
    e.addEventListener('click', function () {
        t1.innerText = t1.innerText.slice(0, t1.innerText.length - 1);
        ipt.value = ipt.value.slice(0, ipt.value.length - 1);
        d_flag--;
        d_flag < 0 ? d_flag = 0 : d_flag = d_flag;
    });
}
delEnd(del);

function str_show() {
    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener('click', function () {
            var tmp = this.getAttribute('value1');
            var temp = this.getAttribute('value2');
            // console.log(tmp);
            if (tmp == 0) {
                // 防止符号类字符重复出现模块
                if (temp == 0) {
                    addNone();
                    d_flag += 2;
                    d_flag = 0 ? d_flag += 2 : d_flag = d_flag;
                    d_flag > 2 ? d_flag = 2 : d_flag = d_flag;
                } else if (d_flag == 0 | temp == 1) {
                    t1.innerText += this.innerText;
                    ipt.value += this.getAttribute('value');
                    d_flag += 2;
                    d_flag = 0 ? d_flag += 2 : d_flag = d_flag;
                    d_flag > 2 ? d_flag = 2 : d_flag = d_flag;
                    r_steps();
                }
                /////////
            } else {
                Refresh_steps();
                t1.innerText += this.innerText;
                ipt.value += this.getAttribute('value');
            }
            console.log(d_flag);
        });
    }
}
str_show();
var ipt = document.getElementById('i');
var c_arr = new Array();
var temp = '';
var r_temp = 0;
var result;

function save_fun() {
    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener('click', function () {
            var tmp = this.getAttribute('value1');
            if (tmp == 1) {
                c_arr.push(this.innerText);

                if (steps == 0) {
                    temp += this.innerText.toString();
                    result = parseInt(temp);
                } else {
                    for (var j = 0; j <= 1; j++) {
                        result = '';
                    }
                }
            } else if (tmp == 0) {
                c_arr.push(this.innerText);
                steps++;
            }
        });
    }
}
save_fun();
var c_flag = true;

function change_fun() {
    change.onclick = function () {
        if (c_flag) {
            t2.innerText = result * -1;
            c_flag = false;
        } else {
            t2.innerText = result;
            c_flag = true;
        }
    }
}

change_fun()

function switch_fun() {
    if (divide.getAttribute('is_normal') == 0) {
        var tmp1 = ipt.value.toString().replace(/\*/g, "×");
        var tmp2 = tmp1.replace('\/', "÷");
        t1.innerText = tmp2;
    } else {
        t1.innerText = ipt.value;
    }
}

window.addEventListener('keydown', function (e) {
    if (e.keyCode === 32) {
        switch_fun();
    }
})

function Calculation_fun() {
    for (var i = 0; i < c_arr.length; i++) {
        var t = c_arr.toString().replace(/,/g, "");
        // console.log(t.indexOf('+'));
        var temp = ipt.value;

        function Trim(str, is_global) {
            var result;
            result = str.replace(/(^\s+)|(\s+$)/g, "");
            if (is_global.toLowerCase() == "g")
                result = result.replace(/\s/g, "");
            return result;
        }
        ipt.value = Trim(temp, 'g');
        t1.innerText = temp;
        result = eval(ipt.value);
    }
}

(function () {
    // 清空字符
    function clear(e) {
        e.onclick = function () {
            t1.innerText = '';
            t2.innerText = '';
            temp = ''
            result = null;
            c_arr = [];
            // console.log(result);
            ipt.value = '';
            d_flag = 0;
        }
    }

    clear(e_clear);
    clear(allClear);
})();

function result_show() {
    equal.addEventListener('click', function () {
        Calculation_fun();
        switch_fun();
        result == undefined ? result = '空值' : result = result;
        t2.innerText = result;
    });
}
result_show();