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
random_num <= 0.32 ? random_num = 0.32 : random_num = random_num + Math.round(Math.random());

window.addEventListener('load', function () {
    add_title('title', [
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
        ['js-addEventListener', 'mouseenter', 'LSP', '3.6rem'],
        ['js-addEventListener', 'mouseenter', 'TID', '4.6rem'],
        ['js-addEventListener', 'mouseenter', 'boxShadow', '1px 1px 24px 6px #36363664'],
        // leave
        ['js-addEventListener', 'mouseleave', 'ML', '24rem'],
        ['js-addEventListener', 'mouseleave', 'LSP', 'normal'],
        ['js-addEventListener', 'mouseleave', 'js-style', 'fontPosition', '0.24-middle'],
        ['js-addEventListener', 'mouseleave', 'boxShadow', '1px 1px 24px 3px #66666636'],
        // click
        ['js-AEL','click','BGC','#000'],
        // setTimeout  1000-num-3   1000-time-3000
        ['js-event','setTimeout','1000','BGC','#ccc'],
        // setInterval
        ['js-event','setInterval','640-num-3','BGC','#242424cc'],
        ['js-event','setInterval','960-time-3000','BGC','#fff']

    ]);
    

    // add_normalNode([], 'h4');
    // add_listNode([], 'p', 8, breakOff = 1);
    add_normalNode(['参考文档'], hh1);

    add_normalNode(['moduleTitle00'], hh2,
        [
            ['display', 'block'],
            ['margin', '1rem 0 0.6rem 0rem'],
            ['padding', '0'],
            ['bgc', '#ccc']
        ],
        [
            ['margin', '0px'],
            ['ml', '-10px']
        ]
    );
    add_normalNode(['container'], hh3);
    add_normalNode(['moduleTitle01'], hh2);
    add_normalNode(['container'], hh3);

})