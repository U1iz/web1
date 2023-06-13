/* timeOut = null;

function timeOutAlert() {
    timeOut = window.setTimeout(function () {
        console.log("time out..." + timeOut);
        timeOutAlert();
    }, 1000);
}

function stopTimeOutAlert() {
    console.log("timeCut:" + timeOut);
    window.clearTimeout(timeOut);
} */
var cutT = document.getElementById("cutTimer");

var timer1 = null;

function timerStart() {
    var countTime = function () {
        date = new Date();
        dateStr = date.toLocaleTimeString();
        document.getElementById("timer").innerHTML = dateStr;
    }

    timer1 = window.setInterval(countTime, 1);

}


function timerStop() {
    console.log("timer stop:" + timer1);
    window.clearInterval(timer1);
};

function jsListener(DOMElement) {
    let jsAddress = DOMElement.getAttribute('src');
    let tmpArr000 = jsAddress.split('/');
    let scriptName = tmpArr000[tmpArr000.length - 1];
    // console.log(scriptName + '运行正常');
    return scriptName;
}
jsListener(document.currentScript);
console.log(jsListener(document.currentScript) + '\t已载入');
timerStart();

function addScript(url) {
    var script = document.createElement('script');
    script.setAttribute('src', url);
    document.getElementsByTagName('body')[0].appendChild(script);
}

// addScript("js/style.js");
(function () {
    addScript("../public_js/add_CSSNode.js");
    addScript("../public_js/lib.js");
    addScript("../public_js/add_formNode.js");
})();


if (document.currentScript.async) {
    console.log("Executing asynchronously");
} else {
    console.log("Executing synchronously");
}
timerStop();
console.log(jsListener(document.currentScript) + '\t运行正常');