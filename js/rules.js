/* window.alert = function(str)
	    {
	     var shield = document.createElement("DIV");
	     shield.id = "shield";
	     shield.style.position = "absolute";
	     shield.style.left = "0px";
	     shield.style.top = "0px";
	     shield.style.width = "100%";
	     shield.style.height = document.body.scrollHeight+"px";
	     //弹出对话框时的背景颜色
	     shield.style.background = "#fff";
	     shield.style.textAlign = "center";
	     shield.style.zIndex = "25";
	     //背景透明 IE有效
	    //  shield.style.filter = "alpha(opacity=0)";
	     var alertFram = document.createElement("DIV");
	     alertFram.id="alertFram";
	     alertFram.style.position = "absolute";
	     alertFram.style.left = "50%";
	     alertFram.style.top = "50%";
	     alertFram.style.marginLeft = "-225px";
	     alertFram.style.marginTop = "-75px";
	     alertFram.style.width = "450px";
	     alertFram.style.height = "150px";
	     alertFram.style.background = "#ff0000";
	     alertFram.style.textAlign = "center";
	     alertFram.style.lineHeight = "150px";
	     alertFram.style.zIndex = "300";
	     strHtml = "<ul style=\"position: absolute;list-style:none;margin:0px;padding:0px;width:100%\">\n";
	     strHtml += " <li style=\"background:#DD828D;text-align:left;padding-left:20px;font-size:14px;font-weight:bold;height:25px;line-height:25px;border:1px solid #F9CADE;\">.</li>\n";
	     strHtml += " <li style=\"background:#fff;text-align:center;font-size:12px;height:120px;line-height:120px;border-left:1px solid #F9CADE;border-right:1px solid #F9CADE;\">"+str+"</li>\n";
	     strHtml += " <li style=\"background:#FDEEF4;text-align:center;font-weight:bold;height:25px;line-height:25px; border:1px solid #F9CADE;\"><input type=\"button\" value=\"确 定\" οnclick=\"doOk()\" /></li>\n";
	     strHtml += "</ul>\n";
	     alertFram.innerHTML = strHtml;
	     document.body.appendChild(alertFram);
	     document.body.appendChild(shield);
	     var ad = setInterval("doAlpha()",5);
	     this.doOk = function(){
	         alertFram.style.display = "none";
	         shield.style.display = "none";
	     }
	     alertFram.focus();
	     document.body.onselectstart = function(){return false;};
	    } */
alert("每天刷b站的时间 < 1h（×）\n戒掉短视频(抖音/快手/...)（√）\n不去看qq看点（√）\n每天(堆/学习)代码时间 >= 1h (×)\n每天(自学/学习)时间 >= 2h （×）\n一周读书时间 >= 1h （×）\n每天至多23点睡觉 （×）\n看一眼微信（ ）\n理性消费（ ）");
alert('状态（家里宅）');