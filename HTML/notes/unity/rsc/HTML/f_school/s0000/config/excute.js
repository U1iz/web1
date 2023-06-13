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

function add_localModule(title, msg, pic_path, dldName, link) {

    add_title(title, [
        ['label', 'h1'],
        ['backgroundColor', 'transparent'],
        ['whiteSpace', 'nowrap'],
        ['font', '800 1.6rem "MicroSoft YaHei"'],
        ['boxShadow', 'none'],
        ['padding', '0.6rem 0 0.6rem 0'],
        ['padding', '0.6rem 0 0.6rem 0'],
        ['borderRadius', '2.7rem'],
        ['marginTop', '-3.6rem'],
        ['color', '#666'],
        ['textAlign', 'center'],
        ['width', '90%'],
        ['ML', '5%'],
        ['MR', '5%'],
        ['display', 'none'],
        ['color', 'transparent'],

        ['js-style', 'fontPosition', 'center-middle'],
        // setTimeout  1000-num-3   1000-time-3000
        ['js-event', 'setTimeout', '1800', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '1600', 'boxShadow', '1px 1px 24rem 2rem transparent'],
        ['js-event', 'setTimeout', '1800', 'display', 'block'],
        ['js-event', 'setTimeout', '1900', 'color', '#666'],
        ['js-event', 'setTimeout', '2000', 'MT', '2.4rem'],
        ['js-event', 'setTimeout', '2000', 'MB', '1rem']
    ]);

    add_normalNode(msg, ['h3', 'normal', '0 5% 0 5%'], [
        ['textDecoration', 'none'],
        ['width', '40%'],
        ['fontSize', '1.2rem'],
        ['cursor', 'default'],
        ['color', '#999'],
        ['js-style', 'fontPosition', 'center-middle']
    ], [
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['padding', '0'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['new', 'kid', 'div']
    ]);
    add_normalNode([dldName], ['a', 'normal', '0.2rem 5% 0 5%', ud, ud, 'paragraph-2em'], [
        ['textDecoration', 'none'],
        ['width', '100%'],
        ['height', '100%'],
        ['cursor', 'pointer'],
        ['color', '#999'],
        ['fontSize', '0.84rem'],
        ['letterSpacing', '1rem'],
        ['js-style', 'fontPosition', 'center-middle'],
        ['color', 'transparent'],
        ['element-attribute', 'href', link],
        ['element-attribute', 'target', '_blank'],
        ['transition', 'all 0.64s'],

        ['js-event', 'setTimeout', '1860', 'color', '#999']
    ], [
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['padding', '0'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '2000', 'MT', '0.6rem']
    ]);
    add_normalNode([''], ['img', 'normal', '0.2rem 5% 3.2rem 5%'], [
        ['textDecoration', 'none'],
        ['width', '40%'],
        ['cursor', 'default'],
        ['color', '#999'],
        ['fontSize', '0.4rem'],
        ['element-attribute', 'src', '../../img/' + pic_path]
    ], [
        ['display', 'flex'],
        ['JC', 'center'],
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['padding', '0.6rem auto'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '2000', 'MT', '2.4rem']
    ]);
    add_normalNode([''], ['div', 'normal', '0.2rem 5% 3.2rem 5%'], [], [
        ['width', '90%'],
        ['height', '1.2rem'],
        ['BGC', '#ccc'],
        ['transition', 'all 0.64s'],
        ['padding', '0.6rem auto'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '2000', 'MT', '2.4rem']
    ]);
}

function l_add_pic(name) {
    add_normalNode([''], ['img', 'normal', '0.2rem 5% 3.2rem 5%'], [
        ['textDecoration', 'none'],
        ['width', '40%'],
        ['cursor', 'default'],
        ['color', '#999'],
        ['fontSize', '0.4rem'],
        ['element-attribute', 'src', '../../img/' + name]
    ], [
        ['display', 'flex'],
        ['JC', 'center'],
        ['padding', '0.4rem', '1.6rem'],
        ['width', '90%'],
        ['transition', 'all 0.64s'],
        ['padding', '0.6rem auto'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '2000', 'MT', '2.4rem']
    ]);
    add_normalNode([''], ['div', 'normal', '0.2rem 5% 3.2rem 5%'], [], [
        ['width', '90%'],
        ['height', '1.2rem'],
        ['BGC', '#ccc'],
        ['transition', 'all 0.64s'],
        ['padding', '0.6rem auto'],
        ['borderRadius', '1rem'],
        ['boxShadow', '1px 1px 1rem 0.25rem transparent'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 1rem 0.125rem transparent'],

        ['js-event', 'setTimeout', '2000', 'MT', '2.4rem']
    ]);
}

window.addEventListener('load', function () {
    setDocTitle('2022-03-07');
    add_title(['在校unity课程笔记 0000','12'], [
        ['label', 'h1'],
        ['backgroundColor', 'transparent'],
        ['whiteSpace', 'nowrap'],
        ['font', '800 1.6rem "MicroSoft YaHei"'],
        ['boxShadow', 'none'],
        ['padding', '0.6rem 0 0.6rem 0'],
        ['padding', '0.6rem 0 0.6rem 0'],
        ['borderRadius', '2.7rem'],
        ['marginTop', '-3.6rem'],
        ['color', '#666'],
        ['textAlign', 'center'],
        ['width', '90%'],
        ['ML', '5%'],
        ['MR', '5%'],
        ['display', 'none'],
        ['color', 'transparent'],

        ['js-style', 'fontPosition', 'center-middle'],
        ['js-addEventListener', 'mouseenter', 'LSP', '0.2rem'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 1rem 0.25rem rgba(54, 54, 54,0.64)'],
        ['js-addEventListener', 'mouseenter', 'BGC', 'rgba(54, 54, 54,0.32)'],
        ['js-addEventListener', 'mouseenter', 'color', '#fff'],
        // leave
        ['js-addEventListener', 'mouseleave', 'js-style', 'fontPosition', 'center-middle'],
        ['js-addEventListener', 'mouseleave', 'BGC', '#fff'],
        ['js-addEventListener', 'mouseleave', 'color', '#666'],
        ['js-addEventListener', 'mouseleave', 'LSP', 'normal'],
        ['js-addEventListener', 'mouseleave', 'js-style', 'fontPosition', 'center-middle'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 72rem 2rem transparent'],
        // click
        ['js-AEL', 'click', 'BGC', '#222'],
        ['js-AEL', 'click', 'color', '#ddd'],
        ['js-AEL', 'click', 'boxShadow', '1px 1px 24rem 1.6rem rgba(12, 12, 12,0.72)'],
        // setTimeout  1000-num-3   1000-time-3000
        ['js-event', 'setTimeout', '1800', 'transition', 'all 0.96s'],
        ['js-event', 'setTimeout', '1600', 'boxShadow', '1px 1px 24rem 2rem transparent'],
        ['js-event', 'setTimeout', '1800', 'display', 'block'],
        ['js-event', 'setTimeout', '1900', 'color', '#666'],
        ['js-event', 'setTimeout', '2000', 'MT', '2.4rem']
    ]);
})