
var t = null;
t = setTimeout(time, 1000);//开始执行
function time() {
    clearTimeout(t);//清除定时器
    var dt = new Date();
    var year = dt.getFullYear();//获取年
    var month = dt.getMonth();//获取月
    var dates = dt.getDate();//获取日
    var day = dt.getDay();//获取周
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var h = dt.getHours();//获取时
    h = h < 10 ? '0' + h : h;
    var m = dt.getMinutes();//获取分
    m = m < 10 ? '0' + m : m;
    var s = dt.getSeconds();//获取秒
    s = s < 10 ? '0' + s : s;
    document.getElementById("timer").innerText = '当前日期为：' + year + '年' + month + '月' + dates + '日 ' + arr[day] + '\n' + "当前时间为：" + h + "时" + m + "分" + s + "秒";
    // document.getElementById("timer").innerHTML = "当前时间为："+ h + "时" + m + "分" + s + "秒";
    t = setTimeout(time, 1000); //设定定时器，循环执行
}
function browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    document.writeln("您的浏览设备为：");
    // document.innerHTML=<div style="color:white;">"您的浏览设备为："</div>;
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        var equipment = document.writeln("phone");
        // alert('移动端已重置，兼容横向分辨率320px-640px的手机，320px-1080px的iPad');
        document.querySelector('ul').className = 'phone_ul';
        document.querySelector('i').style.marginTop = '72px';
        document.querySelector('i').style.font = "400 12px 'microsoft yahei'";
    } else {
        var diver = document.writeln("pc");
    }

}

browserRedirect(); 