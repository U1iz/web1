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
random_num <= 0.72 ? random_num = 0.8 : random_num = random_num + Math.round(Math.random());
random_num >= 1.24 ? random_num = 1 : random_num = random_num - 0.3;

// marginLeft
let random_bool = (function () {
    return Math.round(Math.random()) == true;
})();
let randomNum_000 = (function () {
    return Math.random() * 2;
})();
let randomNum_001 = (function () {
    return Math.random() * 3;
})();
let randomNum_002 = (function () {
    return Math.random() * 4;
})();
let randomNum_003 = (function () {
    return Math.random() * 5;
})();
let randomNum_004 = (function () {
    return Math.random() * 6;
})();

function split_p(str) {
    let arr = new Array;
    for (let i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }
    return arr;
}

let paragraph_0000 = '我是来自计算机201班的郁志良，是个内向的男生。';
let paragraph_0001 = '在过去的三个学期中老师们孜孜不倦的谆谆教诲下，与好友间的互帮互助下，当然还有我自身的不懈努力下，我在各个学科都有着不错的成绩，同时也在最终的学业水平考取得了语数英三门全A的战果。';
let paragraph_0002 = '在此过程中，我不仅对计算机领域有了更多的了解，也结交了一些真正实在的朋友且一并走出了中考的阴霾。';
let paragraph_0003 = '我们常常结伴参加各项比赛活动以及社团，曾参加了第七届中国国际 “互联网”+大学生创新创业比赛以《城市小区智能垃圾房》为主题获得了优胜奖，也参加了首届长三角人工智能挑战赛也同样获得了优胜奖。虽然没能排上名次，但我们各个都收获了团体合作的经验以及带来的乐趣。';
let paragraph_0004 = '慢慢地，我基本摆脱了自己惯于拖延和懒散的性格习惯，积极地利用闲暇时间自学了很多专业相关和自己感兴趣的技术。';
let paragraph_0005 = '目前我能够熟练使用C4D（Cinema 目前我能够熟练使用C4D（Cinema 4D）进行建模且在调整PBR材质后使用ProRender渲染出真假难辨的效果；能够使用PR和AE搞定大部分的视频剪辑使用场景，同时我也是哔哩哔哩的一位小up主。';
let paragraph_0006 = '通过收集合法的网络资源，我自学了HTML 5、CSS 3（及其扩展语言less和scss）和js（JavaScript）这几门主要用于web的语言。我享受着使用js成功封装一个个功能齐全且严谨的函数后带来的快感，感慨着长时间debug后找到一个合适解决方案时茅塞顿开，豁然开朗时的欣喜若狂，为学到了新的API而不由自主地感到兴奋。';
let paragraph_0007 = '正是因为我对web前端的热爱，我于2021年7月正式注册了属于我个人的公网ip，购买了我专属的服务器空间，拥有了属于我自己的网站用于记录我自己的学习笔记。我给自己的网站加入了索引功能，之后每次我的笔记有所更新我都会告诉我的同伴，以便他们来复习。';
let paragraph_0008 = '在制作web笔记的工程中，我经常会遇到一些自己回想起来感到模棱两可的知识点，我便会利用搜索引擎查找资料再反复求证，直到我认为万无一失之后才会同步在服务器上。这样一来，我不但能够加深这个知识点在我脑海中的记忆，同时也很容易发掘出其他相关的知识点继续深入了解，可谓是一举两得。';
let paragraph_0009 = '我对知识充满渴望，对未来抱有期待，我相信合理的付出一定会在某个机遇下得以体现。正所谓“技多不压身”，“活到老学到老”，相信在未来的我也不会停止学习和思考，坚持做我所热爱的事，通过我自身的努力考上我心仪的本科院校。';
window.addEventListener('load', function () {
    add_title('计算机201 32 郁志良 定稿0003', [
        ['label', 'h1'],
        ['fontWeight', 400],
        ['backgroundColor', 'transparent'],
        ['whiteSpace', 'nowrap'],
        ['font', '800 1.6rem "MicroSoft YaHei"'],
        ['fontFamily', 'Arial'],
        ['boxShadow', '1px 1px 1rem 0.125rem #66666636'],
        ['padding', '0.6rem 0 0.6rem 0'],
        ['padding', '0.6rem 0 0.6rem 0'],
        ['borderRadius', '64px 0 0 64px'],
        ['margin', '1rem -0.6rem 1.4rem 12rem'],
        ['transition', 'all ' + random_num + 's'],

        ['js-style', 'fontPosition', '0.24-middle'],
        ['js-addEventListener', 'mouseenter', 'ML', '2.4rem'],
        ['js-addEventListener', 'mouseenter', 'LSP', '0.6rem'],
        ['js-addEventListener', 'mouseenter', 'TID', '4.6rem'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        // leave
        ['js-addEventListener', 'mouseleave', 'ML', '12rem'],
        ['js-addEventListener', 'mouseleave', 'LSP', 'normal'],
        ['js-addEventListener', 'mouseleave', 'js-style', 'fontPosition', '0.24-middle'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem #66666636'],
        // click
        ['js-AEL', 'click', 'BGC', '#222'],
        ['js-AEL', 'click', 'color', '#ddd'],
        // setTimeout  1000-num-3   1000-time-3000
        ['js-event', 'setTimeout', '1000', 'BGC', '#ccc'],
        ['ML', 'wiw-0'],
        ['js-event', 'setTimeout', '32', 'MR', '0'],
        // setInterval
        ['js-event', 'setInterval', '960-time-3000', 'BGC', '#fff']

    ]);


    // label, space, mgn, name, bgColor, textIndent, font
    add_normalNode(split_p(paragraph_0000), ['p', 'normal', '6% 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['position', 'relative'],
        ['right', '-100%'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '120', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '240', 'right', '0']
    ]);
    add_normalNode(split_p(paragraph_0001), ['p', 'normal', '0 5% 0 5%', ud, ud, 'paragraph-2em', ud, 1000], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['position', 'relative'],
        ['right', '-100%'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '120', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '360', 'right', '0']
    ]);
    add_normalNode(split_p(paragraph_0002), ['p', 'normal', '0 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['position', 'relative'],
        ['right', '-100%'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '120', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '480', 'right', '0']
    ]);
    add_normalNode(split_p(paragraph_0003), ['p', 'normal', '0 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['position', 'relative'],
        ['right', '-100%'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '120', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '600', 'right', '0']
    ]);
    add_normalNode(split_p(paragraph_0004), ['p', 'normal', '0 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['position', 'relative'],
        ['right', '-100%'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '120', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '720', 'right', '0']
    ]);
    add_normalNode(split_p(paragraph_0005), ['p', 'normal', '0 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['position', 'relative'],
        ['right', '-100%'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '120', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '840', 'right', '0']
    ]);
    add_normalNode(split_p(paragraph_0006), ['p', 'normal', '0 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['position', 'relative'],
        ['right', '-100%'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '120', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '960', 'right', '0']
    ]);
    add_normalNode(split_p(paragraph_0007), ['p', 'normal', '0 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['position', 'relative'],
        ['right', '-100%'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '120', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '1080', 'right', '0']
    ]);
    add_normalNode(split_p(paragraph_0008), ['p', 'normal', '0 5% 0 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['position', 'relative'],
        ['right', '-100%'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '120', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '1200', 'right', '0']
    ]);
    add_normalNode(split_p(paragraph_0009), ['p', 'normal', '0 5% 3.6% 5%', ud, ud, 'paragraph-2em'], [], [
        ['padding', '0.4rem', '1.6rem'],
        ['position', 'relative'],
        ['right', '-100%'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '120', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '1320', 'right', '0']
    ]);
    add_normalNode(['Word文档 source: 0003.docx'], ['a', 'normal', '6.4% 5% 0 5%', ud, ud, 'paragraph-2em'], [
        ['textDecoration', 'none'],
        ['color', '#999'],
        ['width', '100%'],
        ['height', '100%'],
        ['cursor', 'pointer'],
        ['fontSize', '0.4rem'],
        ['element-attribute', 'href', 'source/0003.docx']
    ], [
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['padding', '0'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent']
    ]);
    add_normalNode(['pdf文档 source: 0003.pdf'], ['a', 'normal', '0.2rem 5% 12% 5%', ud, ud, 'paragraph-2em'], [
        ['textDecoration', 'none'],
        ['width', '100%'],
        ['height', '100%'],
        ['cursor', 'pointer'],
        ['color', '#999'],
        ['fontSize', '0.4rem'],
        ['element-attribute', 'href', 'source/0003.pdf']
    ], [
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['padding', '0'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent']
    ]);
})