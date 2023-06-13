var w = document.documentElement;

var moveEle = document.getElementById('container');
var cb = document.getElementById('ctrl_bar');

function set_pos() {
    var e = moveEle;
    e.style.position = 'absolute';
    e.style.left = w.clientWidth / 2 - moveEle.offsetWidth/2 + 'px';
    e.style.top = w.clientHeight / 2 - moveEle.clientHeight/2 + 'px';
    console.log(e.style.top);
}
set_pos();

cb.addEventListener('mousedown', function (e) {
    var x = e.pageX - moveEle.offsetLeft;
    var y = e.pageY - moveEle.offsetTop;
    document.addEventListener('mousemove', move)

    function move(e) {
        moveEle.style.left = e.pageX - x + 'px';
        moveEle.style.top = e.pageY - y + 'px';
    }
    document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', move);
    })
})
/* cb.addEventListener('touchstart', function (e) {
    var x = e.pageX - moveEle.offsetLeft;
    var y = e.pageY - moveEle.offsetTop;
    document.addEventListener('touchmove', move)

    function move(e) {
        moveEle.style.left = e.pageX - x + 'px';
        moveEle.style.top = e.pageY - y + 'px';
    }
    document.addEventListener('touchend', function () {
        document.removeEventListener('touchmove', move);
    })
}) */

//限制最大宽高，不让滑块出去
var maxW = document.body.clientWidth - moveEle.offsetWidth;
var maxH = document.body.clientHeight - moveEle.offsetHeight;
 
//手指触摸开始，记录div的初始位置
moveEle.addEventListener('touchstart', function(e) {
	var ev = e || window.event;
	var touch = ev.targetTouches[0];
	oL = touch.clientX - moveEle.offsetLeft;
	oT = touch.clientY - moveEle.offsetTop;
	document.addEventListener("touchmove", defaultEvent, false);
});
//触摸中的，位置记录
moveEle.addEventListener('touchmove', function(e) {
	var ev = e || window.event;
	var touch = ev.targetTouches[0];
	var oLeft = touch.clientX - oL;
	var oTop = touch.clientY - oT;
	// if(oLeft < 0) {
	// 	oLeft = 0;
	// } else if(oLeft >= maxW) {
	// 	oLeft = maxW;
	// }
	// if(oTop < 0) {
	// 	oTop = 0;
	// } else if(oTop >= maxH) {
	// 	oTop = maxH;
	// }
 
	moveEle.style.left = oLeft + 'px';
	moveEle.style.top = oTop + 'px';
 
});
//触摸结束时的处理
moveEle.addEventListener('touchend', function() {
	document.removeEventListener("touchmove", defaultEvent);
});
 
//阻止默认事件
function defaultEvent(e) {
	e.preventDefault();
}