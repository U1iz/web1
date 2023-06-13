/* url: https://blog.csdn.net/wxzyq/article/details/6705512 */
var hh1 = ['h1'];
var hh2 = ['h2'];
var hh3 = ['h3'];
var hh4 = ['h4'];
var hh5 = ['h5'];
var hh6 = ['h6'];

var h1 = 'h1';
var h2 = 'h2';
var h3 = 'h3';
var h4 = 'h4';
var h5 = 'h5';
var h6 = 'h6';

var p = ['p'];
var ud = undefined;

var arr_01 = ['p', 0.4];
// notes 01
var arr_02_1 = [h4, 1, 111, ud, ud, ud, [3.2, 'L']];
var arr_02 = [h4, 1, ud, ud, ud, ud, [3.2, 'L']];

var titArr = [h3, 0.06, ud, ud, ud, '1rem'];

var random_num = Math.round(Math.random()) + '.' + Math.round(Math.random() * 10);
random_num <= 0.64 ? random_num = 0.6 : random_num = random_num + Math.round(Math.random());
random_num >= 1.24 ? random_num = 1 : random_num = random_num - 0.3;

function split_p(str) {
    let arr = new Array;
    for(let i = 0; i < str.length;i++){
        arr[i] = str[i];
    }
    return arr;
}

let paragraph_0000 = '我是来自计算机201班的郁志良，是一个内向的男生。';
let paragraph_0001 = '在老师的谆谆教导下，好友间的互帮互助以及我自身的不懈努力下，我在各个学科都有着不错的成绩，同时也在最终的学业水平考取得了语数英三门全A的战果。';
let paragraph_0002 = '之前进入计算机专业的时候我对计算机的了解不过才刚刚起步，起初的兴趣主要是源于对未知领域的好奇以及对知识的渴望。在过去的三个学期的时间里，我不仅对计算机有了更多的了解，也结交了一些很实在的朋友且一并走出了“中考没考上高中”的阴霾。';
let paragraph_0003 = '在此过程中我基本摆脱了自己拖延和懒散的性格习惯，自学了很多专业相关和自己感兴趣的技术。';
let paragraph_0004 = '目前我能够熟练使用C4D（Cinema 4D）进行建模并调整PBR材质后使用ProRender进行渲染。';
let paragraph_0005 = '此外我通过收集合法的网络资源，自学了H5C3和js（JavaScript）这几门主要用于web的语言。我享受着使用js成功封装一个个功能齐全且足够严谨的函数后带来的快感，感慨着长时间debug后找到答案时的茅塞顿开，为学到了新的内置API而兴奋。正是因为我对前端的热爱，我在2021年7月正式购买了属于我个人的公网ip和服务器，拥有了属于我自己的网站用于记录我自己的学习笔记，目前我仍在更新。';
let paragraph_0006 = '我对知识充满渴望，对未来抱有期待。正所谓“技多不压身”，“活到老学到老”，相信在未来的我也不会停止学习和思考，坚持做我热爱的事，通过我自身的努力考上我心仪的本科院校。';

window.addEventListener('load', function () {
    add_title('计算机201 32 郁志良 初稿0000', [
        ['label', 'h1'],
        ['fontWeight', 400],
        ['backgroundColor', 'transparent'],
        ['whiteSpace', 'nowrap'],
        ['font', '800 1.6rem "MicroSoft YaHei"'],
        ['fontFamily', 'Arial'],
        ['boxShadow', '1px 1px 24px 3px #66666636'],
        ['padding', '0.6rem 0 0.6rem 0'],
        ['padding', '0.6rem 0 0.6rem 0'],
        ['borderRadius', '64px 0 0 64px'],
        ['margin', '1rem -0.6rem 1.4rem 24rem'],
        ['transition', 'all ' + random_num + 's'],

        ['js-style', 'fontPosition', '0.24-middle'],
        ['js-addEventListener', 'mouseenter', 'ML', '2.4rem'],
        ['js-addEventListener', 'mouseenter', 'LSP', '2.4rem'],
        ['js-addEventListener', 'mouseenter', 'TID', '4.6rem'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 24px 6px rgba(54, 54, 54,0.64)'],
        // leave
        ['js-addEventListener', 'mouseleave', 'ML', '12rem'],
        ['js-addEventListener', 'mouseleave', 'LSP', 'normal'],
        ['js-addEventListener', 'mouseleave', 'js-style', 'fontPosition', '0.24-middle'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 24px 3px #66666636'],
        // click
        ['js-AEL', 'click', 'BGC', '#222'],
        ['js-AEL', 'click', 'color', '#ddd'],
        // setTimeout  1000-num-3   1000-time-3000
        ['js-event', 'setTimeout', '1000', 'BGC', '#ccc'],
        // setInterval
        ['js-event', 'setInterval', '960-time-3000', 'BGC', '#fff']

    ]);


    // label, space, mgn, name, bgColor, textIndent, font
    add_normalNode(split_p(paragraph_0000), ['p', 'normal', '10% 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '24px'],
        ['boxShadow', '1px 1px 24px 6px transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 24px 6px rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 24px 3px transparent']
    ]);
    add_normalNode(split_p(paragraph_0001), ['p', 'normal', '0 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '24px'],
        ['boxShadow', '1px 1px 24px 6px transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 24px 6px rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 24px 3px transparent']
    ]);
    add_normalNode(split_p(paragraph_0002), ['p', 'normal', '0 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '24px'],
        ['boxShadow', '1px 1px 24px 6px transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 24px 6px rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 24px 3px transparent']
    ]);
    add_normalNode(split_p(paragraph_0003), ['p', 'normal', '0 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '24px'],
        ['boxShadow', '1px 1px 24px 6px transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 24px 6px rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 24px 3px transparent']
    ]);
    add_normalNode(split_p(paragraph_0004), ['p', 'normal', '0 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '24px'],
        ['boxShadow', '1px 1px 24px 6px transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 24px 6px rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 24px 3px transparent']
    ]);
    add_normalNode(split_p(paragraph_0005), ['p', 'normal', '0 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '24px'],
        ['boxShadow', '1px 1px 24px 6px transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 24px 6px rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 24px 3px transparent']
    ]);
    add_normalNode(split_p(paragraph_0006), ['p', 'normal', '0 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '24px'],
        ['boxShadow', '1px 1px 24px 6px transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 24px 6px rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 24px 3px transparent']
    ]);
    add_normalNode(['Word文档 source: 0000.docx'], ['a', 'normal', '6.4% 5% 0 5%', ud, ud, 'paragraph-2em'], [
        ['textDecoration','none'],
        ['color','#999'],
        ['width','100%'],
        ['height','100%'],
        ['cursor','pointer'],
        ['fontSize', '0.4rem'],
        ['element-attribute', 'href', 'source/0000.docx']
    ], [
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['padding', '0'],
        ['borderRadius', '24px'],
        ['boxShadow', '1px 1px 24px 6px transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 24px 6px rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 24px 3px transparent']
    ]);
    add_normalNode(['pdf文档 source: 0000.pdf'], ['a', 'normal', '0.2rem 5% 12% 5%', ud, ud, 'paragraph-2em'], [
        ['textDecoration','none'],
        ['width','100%'],
        ['height','100%'],
        ['cursor','pointer'],
        ['color','#999'],
        ['fontSize', '0.4rem'],
        ['element-attribute', 'href', 'source/0000.pdf']
    ], [
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['padding', '0'],
        ['borderRadius', '24px'],
        ['boxShadow', '1px 1px 24px 6px transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 24px 6px rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 24px 3px transparent']
    ]);

})