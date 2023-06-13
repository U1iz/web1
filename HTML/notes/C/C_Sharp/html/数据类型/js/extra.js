var mainStyleNode = document.createElement('style');
var mainStyleDoc = '.normalNodeWrap {-webkit-justify-content: left;} * { margin: 0; padding: 0; cursor: default; } ::selection { background-color: rgba(189, 198, 198, 0.4); color: #234234; } ::-webkit-scrollbar { position: absolute; background-color: rgba(189, 198, 198, 0.4); width: 0.25rem; height: 0.25rem } ::-webkit-scrollbar-track { background-color: transparent; -webkit-border-radius: 2em; -moz-border-radius: 2em; border-radius: 2em } ::-webkit-scrollbar-thumb { /* background-color: #3549ff3b; */ background-image: linear-gradient(0deg, rgba(134, 84, 226, 0.205),rgba(150, 90, 218, 0.199)); -webkit-border-radius: 2em; -moz-border-radius: 2em; border-radius: 2em } li { position: relative; list-style-type: none; } h2 { font: 800 0.8333333333 "microsoft YaHei"; } h3 { font: 400 0.6666666rem "microsoft YaHei"; }';
var head = document.getElementsByTagName('head')[0];
var styleNode = document.createElement('style');
var styleDoc = '#notranslate { font-size: 1.2em; font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #333; -webkit-text-size-adjust: none; border: 0; margin: 0; padding: 0; border-collapse: collapse; width: 100%; margin-bottom: 4px; margin-top: 4px; } #notranslate tr { font-size: 1.2em; font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #333; -webkit-text-size-adjust: none; border-collapse: collapse; border: 0; margin: 0; padding: 0; background-color: #f6f4f0; } #notranslate th { font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; border-collapse: collapse; margin: 0; color: #fff; background-color: #555; border: 1px solid #555; font-size: 13px; padding: 3px; vertical-align: top; text-align: left; width: 10%; } #notranslate td { font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #333; -webkit-text-size-adjust: none; border-collapse: collapse; margin: 0; font-size: 13px; line-height: 2em; min-width: 24px; border: 1px solid #d4d4d4; padding: 5px; padding-top: 7px; padding-bottom: 7px; vertical-align: top; } #notranslate tbody tr:nth-child(2n) { font-size: 1.2em; font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Noto Sans CJK SC, WenQuanYi Micro Hei, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #333; -webkit-text-size-adjust: none; border-collapse: collapse; border: 0; margin: 0; padding: 0; background-color: #fff; }';
var extraCtr = document.createElement('div');
var div01 = document.createElement('div');
var remSize = (document.documentElement.style.fontSize).toString().substring(0, (document.documentElement.style.fontSize).toString().length - 2);

var eqt = localStorage.getItem('equipmentType');

mainStyleNode.type = 'text/css';
head.appendChild(mainStyleNode);
styleNode.type = 'text/css';
head.appendChild(styleNode);

mainStyleNode.innerText = mainStyleDoc;
styleNode.innerText = styleDoc;
 document.body.appendChild(extraCtr);
document.body.appendChild(div01);
extraCtr.id = 'extraCtr';
extraCtr.innerHTML = '<table id="notranslate"> <tbody> <tr> <th style="width:10%;">类型</th> <th style="width:35%;">描述</th> <th style="width:45%;">范围</th> <th style="width:10%;">默认值</th> </tr> <tr> <td>bool</td> <td>布尔值</td> <td>True 或 False</td> <td>False</td> </tr> <tr> <td>byte</td> <td>8 位无符号整数</td> <td>0 到 255</td> <td>0</td> </tr> <tr> <td>char</td> <td>16 位 Unicode 字符</td> <td>U +0000 到 U +ffff</td> <td>\'\\0\'</td> </tr> <tr> <td>decimal</td> <td>128 位精确的十进制值，28-29 有效位数</td> <td>(-7.9 x 10<sup>28</sup> 到 7.9 x 10<sup>28</sup>) / 10<sup>0 到 28</sup> </td> <td>0.0M</td> </tr> <tr> <td>double</td> <td>64 位双精度浮点型</td> <td>(+/-)5.0 x 10<sup>-324</sup> 到 (+/-)1.7 x 10<sup>308</sup></td> <td>0.0D</td> </tr> <tr> <td>float</td> <td>32 位单精度浮点型</td> <td>-3.4 x 10<sup>38</sup> 到 + 3.4 x 10<sup>38</sup></td> <td>0.0F</td> </tr> <tr> <td>int</td> <td>32 位有符号整数类型</td> <td>-2,147,483,648 到 2,147,483,647</td> <td>0</td> </tr> <tr> <td>long</td> <td>64 位有符号整数类型</td> <td>-9,223,372,036,854,775,808 到 9,223,372,036,854,775,807 </td> <td>0L</td> </tr> <tr> <td>sbyte</td> <td>8 位有符号整数类型</td> <td>-128 到 127</td> <td>0</td> </tr> <tr> <td>short</td> <td>16 位有符号整数类型</td> <td>-32,768 到 32,767</td> <td>0</td> </tr> <tr> <td>uint</td> <td>32 位无符号整数类型</td> <td>0 到 4,294,967,295</td> <td>0</td> </tr> <tr> <td>ulong</td> <td>64 位无符号整数类型</td> <td>0 到 18,446,744,073,709,551,615</td> <td>0</td> </tr> <tr> <td>ushort</td> <td>16 位无符号整数类型</td> <td>0 到 65,535</td> <td>0</td> </tr> </tbody> </table>';


var linkArr = ['https://www.runoob.com/csharp/csharp-data-types.html', 'https://www.cnblogs.com/springsnow/p/9428611.html', ''];
var linkDiv = document.createElement('div');
document.body.appendChild(linkDiv);
linkDiv.style.position = 'sticky';
linkDiv.style.top = document.body.clientHeight - 6.25 * remSize + 'px';
linkDiv.style.left = '4%';
for (var i = 0; i < 2; i++) {
    var link = document.createElement('a');
    link.style.position = 'relative';
    link.innerHTML = '相关链接' + i;
    link.setAttribute('href', linkArr[i]);
    link.setAttribute('target', '_blank');
    linkDiv.appendChild(link);
}

window.addEventListener('load', function () {
    var mc = document.getElementById('ctr');
    extraCtr.style.position = 'absolute';
    extraCtr.style.top = mc.clientHeight + document.getElementById('title').clientHeight + 'px';
    extraCtr.style.marginTop = 2.4 + 'rem';
    extraCtr.style.width = document.body.clientWidth + 'px';
    var bg = document.createElement('div');
    if (eqt == 2) {
        bg.style.width = document.body.clientWidth + 'px';
        bg.style.height = document.body.clientHeight + 'px';
    } else if (eqt == 1) {
        bg.style.width = document.body.clientWidth + 'px';
        bg.style.height = document.body.clientHeight * 2 + 'px';
        document.body.style.overflowX = 'hidden';
    }
    bg.style.backgroundColor = 'rgb(229, 238, 238)';
    bg.style.position = 'absolute';
    bg.style.top = 0;
    bg.style.zIndex = -1;
    document.body.appendChild(bg);

    window.addEventListener('resize', function () {
        if (eqt == 2) {
            bg.style.width = document.body.clientWidth + 'px';
            bg.style.height = document.body.clientHeight + 'px';
        } else if (eqt == 1) {
            bg.style.width = document.body.clientWidth + 'px';
            bg.style.height = document.body.clientHeight * 2 + 'px';
            document.body.style.overflowX = 'hidden';
        }
        ManualResize_style();
    });
});

var ManualResize = document.createElement('div');

function ManualResize_style() {
    ManualResize.innerText = "手动 “resize”" + '\n' + " 解决布局问题";
    document.body.appendChild(ManualResize);
    // ManualResize.style.width = 1.64 + 'rem';
    // ManualResize.style.height = 0.72 + 'rem';
    ManualResize.style.boxSizing = 'contentBox';
    ManualResize.style.position = 'absolute';
    ManualResize.style.top = 0;
    ManualResize.style.left = document.body.clientWidth * 0.7 + 'px';
    ManualResize.style.backgroundColor = '#24272E6c';
    ManualResize.style.color = '#fffffff6';
    ManualResize.style.padding = '0.12rem 0.32rem';
    ManualResize.style.borderRadius = '0 0 6px 6px';
    ManualResize.style.whiteSpace = 'nowrap';
    ManualResize.style.cursor = 'pointer';
    ManualResize.style.transition = 'all 0.32s';
    var mrStyle = ManualResize.getAttribute('style');
    ManualResize.setAttribute('style', 'font: 100 0.32rem "MicroSoft YaHei";' + mrStyle);
    window.original_mrWidth = ManualResize.clientWidth;
}
ManualResize_style();

ManualResize.onclick = function () {
    setResize();
    // this.style.left = this.offsetLeft - space / 2 + 'px';
    // this.style.left = this.offsetLeft - 0.84 * remSize + 'px';
    this.style.left = this.offsetLeft - 56.795 + 'px';
    this.style.borderRadius = '0 0 24px 24px';
    this.style.padding = '0.64rem 1.6rem';
    var space = original_mrWidth - this.clientWidth;
    var index = this.getAttribute('style').indexOf("\;");
    str = this.getAttribute('style').substring(index + 1, this.getAttribute('style').length);
    ManualResize.setAttribute('style', 'font: 800 0.72rem "MicroSoft YaHei";' + str);

    setTimeout(function () {
        ManualResize.style.borderRadius = '0 0 54px 54px';
        setTimeout(function () {
            ManualResize.style.padding = '2.4rem 1.6rem 0.64rem 1.6rem';
            ManualResize.style.backgroundColor = '#24272E64';
            ManualResize.style.color = '#ffffff64';
            setTimeout(function () {
                // ManualResize.style.padding = '0rem 0.2rem 0.64rem 0.2rem';
                ManualResize.style.top = -ManualResize.clientHeight + 'px';
                setTimeout(function () {
                    ManualResize.remove();
                }, 320)
            }, 720)
        }, 960)
    }, 20);
}