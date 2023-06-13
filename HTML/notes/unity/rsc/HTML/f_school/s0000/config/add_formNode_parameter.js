var win_w = document.body.clientWidth;
var win_h = document.body.clientHeight;

// Initialization

function form_ini_00() {
    let obj = new Object();
    // 必要属性
    // 容器宽高
    obj.ctrSize = ['100%'];

    // 情况01 全局同标签
    // obj.setLabelType = 'all';
    // obj.label = 'h3';
    // url http://96yzl.usa3v.vip/HTML/project/Desktop/index.html

    // 情况02 标题同标签
    obj.setTitLabelType = 'all';
    obj.titLabel = 'h2';

    // 情况03 文本同标签
    obj.setTexLabelType = 'all';
    obj.texLabel = 'h3';
    // 选择属性
    // 情况04（混合） 指定标签
    obj.setLabelType = 'part';
    obj.sLl_00 = ['0', 'h3,h3,h4'];
    obj.setLabel = [obj.sLl_00];

    // 精准写入属性
    obj.cStyle_0 = ['1', '1,1,0', 'fw', '800'];
    obj.cStyle_1 = ['2', '1,1,0', 'fw', '800'];
    obj.cStyle_2 = ['3', '1,1,0', 'fw', '800'];
    obj.cStyle_3 = ['4', '1,1,0', 'fw', '800'];
    obj.cStyle_4 = ['5', '1,1,0', 'fw', '800'];
    obj.cStyle_5 = ['6', '1,1,0', 'fw', '800'];
    obj.cStyle_6 = ['7', '1,1,0', 'fw', '800'];
    obj.cStyle_7 = ['8', '1,1,0', 'fw', '800'];
    obj.cStyle = [obj.cStyle_0, obj.cStyle_1, obj.cStyle_2, obj.cStyle_3, obj.cStyle_4, obj.cStyle_5, obj.cStyle_6, obj.cStyle_7];

    // 基础全局属性
    // textAlign border margin fontWeight
    // 2: 1{上下};2{左右}   3: 1{左}; 2{上}; 3{下};  4: 上 下 左 右
    obj.globalStyle_0 = ['1', '1', [2, 4, 3.2, 3.2], '1', [24]];
    // boxShadow
    obj.boxShadow = ['1px', '1px', '16px', '2px', '#6666666f'];

    // 写入内容
    obj.c0 = ['部件(主要)', '详情', '价格', '链接'];
    obj.c1 = ['显卡', '铭瑄 RTX 1050', '839', 'https://item.jd.com/13898681327.html'];
    obj.c2 = ['处理器', 'AMD R5 3600', '1079', 'https://item.jd.com/10028132385428.html#crumb-wrap'];
    obj.c3 = ['内存', '金士顿8G 3600频', '295', 'https://item.jd.com/100025307046.html'];
    obj.c4 = ['硬盘', '铠侠(东芝) RC10 512G', '359', 'https://item.jd.com/100007080973.html'];
    obj.c5 = ['电源', '酷冷至尊 金牌 450W 非模组', '319', 'https://item.jd.com/387247.html#crumb-wrap'];
    obj.c6 = ['主板', 'MSI B550M M-ATX', '769', 'https://item.jd.com/100013779408.html'];
    obj.c7 = ['cpu 散热', '九州风神 玄冰400', '85', 'https://item.jd.com/598827.html'];
    obj.c8 = ['机箱', '先马 鲁班1', '229', 'https://item.jd.com/68416376130.html'];

    // obj.c8 = ['机箱散热', '爱国者 冰魄彩虹V1', '18.9','https://item.jd.com/100004445117.html'];

    obj.contents = [obj.c1, obj.c2, obj.c3, obj.c4, obj.c5, obj.c6, obj.c7, obj.c8];

    // 写入tr容器属性
    obj.trStyle_0 = ['t', 'bgc', '#ccc'];
    obj.trStyle_1 = ['t', 'c', '#233'];
    obj.trStyle_2 = ['2', 'bgc', '#ddd'];
    obj.trStyle_3 = ['4', 'bgc', '#ddd'];
    obj.trStyle_4 = ['6', 'bgc', '#ddd'];
    obj.trStyle_5 = ['8', 'bgc', '#ddd'];
    obj.trStyle = [obj.trStyle_0, obj.trStyle_1, obj.trStyle_2, obj.trStyle_3, obj.trStyle_4, obj.trStyle_5];

    add_formNode(obj);
}

function form_ini_01() {
    let obj = new Object();
    obj.ctrSize = ['100%'];
    obj.setTitLabelType = 'all';
    obj.titLabel = 'h2';
    obj.setTexLabelType = 'all';
    obj.texLabel = 'h3';
    obj.setLabelType = 'part';
    obj.sLl_00 = ['0', 'h3,h3,h4'];
    obj.setLabel = [obj.sLl_00];
    obj.cStyle_0 = ['1', '1,1,0', 'fw', '800'];
    obj.cStyle_1 = ['2', '1,1,0', 'fw', '800'];
    obj.cStyle_2 = ['3', '1,1,0', 'fw', '800'];
    obj.cStyle_3 = ['4', '1,1,0', 'fw', '800'];
    obj.cStyle_4 = ['5', '1,1,0', 'fw', '800'];
    obj.cStyle_5 = ['6', '1,1,0', 'fw', '800'];
    obj.cStyle_6 = ['7', '1,1,0', 'fw', '800'];
    obj.cStyle_7 = ['8', '1,1,0', 'fw', '800'];
    obj.cStyle = [obj.cStyle_0, obj.cStyle_1, obj.cStyle_2, obj.cStyle_3];
    obj.globalStyle_0 = ['1', '1', [2, 4, 3.2, 3.2], '1', [24]];
    obj.boxShadow = ['1px', '1px', '16px', '2px', '#6666666f'];
    // 写入内容
    obj.c0 = ['部件(次要&外设)', '详情', '价格', '链接'];
    obj.c1 = ['机箱散热', '国者 冰魄彩虹V1', '18.9', 'https://item.jd.com/100004445117.html'];
    obj.c2 = ['显示器', '杂牌 1080p 75hz 24寸', '419', '链接过长，到前面找去'];
    obj.c3 = ['键盘', '雷柏 V500 单光茶轴', '109', 'https://item.jd.com/7555264.html#crumb-wrap'];
    obj.c4 = ['鼠标', '雷蛇 炼狱蝰蛇标准版', '79', 'https://item.jd.com/10031287137870.html'];

    obj.contents = [obj.c1, obj.c2, obj.c3, obj.c4];

    // 写入tr容器属性
    obj.trStyle_0 = ['t', 'bgc', '#ccc'];
    obj.trStyle_1 = ['t', 'c', '#233'];
    obj.trStyle_2 = ['2', 'bgc', '#ddd'];
    obj.trStyle_3 = ['4', 'bgc', '#ddd'];
    obj.trStyle_4 = ['6', 'bgc', '#ddd'];
    obj.trStyle_5 = ['8', 'bgc', '#ddd'];
    obj.trStyle = [obj.trStyle_0, obj.trStyle_1, obj.trStyle_2, obj.trStyle_3];

    add_formNode(obj);
}