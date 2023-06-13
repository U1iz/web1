// ==UserScript==
// @name         哔哩哔哩防沉迷 @yzl
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  针对子网页
// @author       U1iz
// @match        https://www.bilibili.com/*
// @license      MIT
// @icon         http://res1433223.net3v.net/img/favicon.png
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    window.addEventListener('keyup', function (e) {
        // console.log(e.keyCode);
        if (e.altKey && e.keyCode == 88) {
            main_func();
        }
    })

    function addScript(url) {
        var script = document.createElement('script');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('src', url);
        document.getElementsByTagName('body')[0].appendChild(script);
    }


    function replaceByDiv() {
        document.documentElement.innerHTML += '<body> <div id="addByScriptAuthor_U1iz"></div> </body>';
        var addByMe = document.getElementById("addByScriptAuthor_U1iz");

        if (addByMe) {
            addByMe.style.position = "absolute";
            addByMe.style.top = 0;
            addByMe.style.left = 0;
            addByMe.style.width = "100%";
            addByMe.style.height = "100%";
            addByMe.style.backgroundColor = "#ccc";
            addByMe.style.backgroundImage = "linear-gradient(135deg,rgb(44, 170, 212), rgb(223, 61, 112))";
            addByMe.style.transition = "all 0.3s";
            addByMe.style.zIndex = 99999999999999999000;
        }
    }

    function main_func() {
        var limitTime = 1;
        var visitTime = 0;

        function onlded() {
            limitTime++;
            console.log(limitTime);
            if (limitTime == 12) {} else {
                /* 存储用户输入的字符冰转换 */
                var user_ipt = prompt("请为此次你的b站浏览限定一个时间" + "\n" + "（输入数字，0代表无限）");
                var user_iptToNum = parseFloat(user_ipt);
                console.log(user_ipt);

                if (user_ipt == "") {
                    alert("未设置限制时间");
                } else {
                    console.log(user_ipt);
                    /* 退出模块2 */
                    if (limitTime % 3 == 0) {
                        prompt("输入0表示退出:");
                    }

                    /* 矫正用户输入模块 */
                    if (user_iptToNum.toString().length == user_ipt.length) {
                        if (user_iptToNum == 0) {} else {
                            // window.visitTime = user_iptToNum;
                            visitTime = user_iptToNum * 60 * 1000;
                            FormClose(visitTime);
                            user_iptToNum < 300 ? alert("你已成功将此次b站浏览时间设为了" + user_iptToNum + "分钟;" + "\n" + user_iptToNum + "分钟后此浏览器元素将被清空，请注意保存重要工作！") : alert("你已成功将此次b站浏览时间设为了" + user_iptToNum + "分钟;" + "\n" + user_iptToNum + "分钟后此浏览器元素将被清空，请注意保存重要工作！" + "\n" + "呃呃,设置得这么高有什么意义吗");
                        }
                    } else {
                        alert("数值错误请再次输入" + "\n" + "(例： 10)");
                        onlded();
                    }
                }
            }
        }

        /* 首页推荐选择关闭模块 */
        var type = false;
        (function () {
            var type_user_ipt = prompt("是否关闭首页推荐？" + "\n" + "（y/n）");
            type_user_ipt == "y" ? type = true : type = false;
            if (type) {
                alert("首页推荐已关闭！");
            } else {
                alert("未设置");
            }
        })();

        onlded();

        /* 首页推荐关闭模块 */
        var ctr01 = document.getElementsByClassName('first-screen')[0];
        var ctr02 = document.getElementsByClassName('b-wrap')[0];
        var ctr03 = document.getElementsByClassName('space-between')[0];
        var ctr04 = document.getElementsByClassName('rec-list')[0];
        (function () {
            if (type) {
                if (ctr01) {
                    ctr01.remove();
                } else if (ctr02) {
                    ctr02.remove();
                } else if (ctr03) {
                    ctr03.remove();
                } else if (ctr04) {
                    ctr04.remove();
                }
            }
        }());

        function FormClose(time) {
            if (time == 0) {} else {
                setTimeout(function () {
                    var body = document.body;
                    body.remove();
                    replaceByDiv();
                    console.log(233333);
                }, time);
            }
        }
    }
})();