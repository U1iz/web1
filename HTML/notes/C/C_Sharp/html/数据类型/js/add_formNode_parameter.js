var win_w = document.body.clientWidth;
var win_h = document.body.clientHeight;

// Initialization

function form_ini_00(iniType) {
    var obj = new Object();

    if (iniType == 1) {
        // 必要属性
        // 容器宽高
        obj.ctrSize = ['100%'];

        // 情况01 全局同标签
        // obj.setLabelType = 'all';
        // obj.label = 'h3';

        // 情况02 标题同标签
        obj.setTitLabelType = 'all';
        obj.titLabel = 'h2';

        // 情况03 文本同标签
        obj.setTexLabelType = 'all';
        obj.texLabel = 'h3';
        // 选择属性
        // 情况04（混合） 指定标签
        /* obj.setLabelType = 'part';
        obj.sLl_00 = ['0', 'h4'];
        obj.sLl_01 = ['1', 'h4'];
        obj.setLabel = [obj.sLl_00, obj.sLl_01]; */

        // 精准写入属性
        // obj.cStyle_0 = ['0', '1', 'bgc', '#ddd'];
        obj.cStyle_1 = ['0', '1', 'pd', '0.5rem 0'];
        // obj.cStyle_2 = ['1', '1,1,0', 'bgc', '#ddd'];
        // obj.cStyle_3 = ['2', '0,1,1', 'bgc', '#ccc'];
        obj.cStyle_4 = ['1', '1', 'pd', '0.32rem 0'];
        obj.cStyle = [obj.cStyle_0, obj.cStyle_1, obj.cStyle_2, obj.cStyle_3, obj.cStyle_4];


        // 基础全局属性
        // textAlign border margin fontWeight
        // 2: 1{上下};2{左右}   3: 1{左}; 2{上}; 3{下};  4: 上 下 左 右
        obj.globalStyle_0 = ['1', '1', [4, 3, 2, 1], '1', [12, 16, 24]];
        // boxShadow
        obj.boxShadow = ['1px', '1px', '16px', '2px', '#6666666f'];
    }


    // 写入内容
    /*     
        \0    空字符    
        \a    警报符    
        \b    退格    
        \f    换页    
        \n    换行    
        \r    回车    
        \t    水平制表    
        \v    垂直制表
    */
    obj.c0 = ['转义字符', '释义', 'Unicode编码'];
    obj.c1 = ['\\\'', '单引号字符', '\\u0027'];
    obj.c2 = ['\\"', '双引号字符', '\\u0022'];
    obj.c3 = ['\\\\', '反斜杠字符', '\\u005C'];
    obj.c4 = ['\\0', '空字符(Null)', '\\u0000'];
    obj.c5 = ['\\a', '警报', '\\u0007'];
    obj.c6 = ['\\b', '退格', '\\u0008'];
    obj.c7 = ['\\f', '换页', '\\u000C'];
    obj.c8 = ['\\r', '回车', '\\u000D'];
    obj.c9 = ['\\n', '换行', '\\u000A'];
    obj.c10 = ['\\t', '水平tab', '\\u000D'];
    obj.c11 = ['\\v', '垂直tab', '\\u000B'];
    obj.contents = [obj.c1, obj.c2, obj.c3, obj.c4, obj.c5, obj.c6, obj.c7, obj.c8, obj.c9, obj.c10, obj.c11];

    // 写入tr容器属性
    obj.trStyle_0 = ['t', 'bgc', '#ccc'];
    obj.trStyle_1 = ['t', 'c', '#233'];
    obj.trStyle_2 = ['2', 'bgc', '#ddd'];
    obj.trStyle_3 = ['4', 'bgc', '#ddd'];
    obj.trStyle_4 = ['6', 'bgc', '#ddd'];
    obj.trStyle_5 = ['8', 'bgc', '#ddd'];
    obj.trStyle_6 = ['10', 'bgc', '#ddd'];
    obj.trStyle = [obj.trStyle_0, obj.trStyle_1, obj.trStyle_2, obj.trStyle_3, obj.trStyle_4, obj.trStyle_5, obj.trStyle_6];

    add_formNode(obj);
}

function form_ini_01(iniType) {
    var obj = new Object();

    if (iniType == 1) {
        obj.ctrSize = ['100%'];
        obj.setTitLabelType = 'all';
        obj.titLabel = 'h2';
        obj.setTexLabelType = 'all';
        obj.texLabel = 'h3';
        obj.cStyle_1 = ['0', '1', 'pd', '0.5rem 0'];
        obj.cStyle_4 = ['1', '1', 'pd', '0.32rem 0'];
        obj.cStyle = [obj.cStyle_0, obj.cStyle_1, obj.cStyle_2, obj.cStyle_3, obj.cStyle_4];
        obj.globalStyle_0 = ['1', '1', [4, 3, 2, 1], '1', [12, 16, 24]];
        obj.boxShadow = ['1px', '1px', '16px', '2px', '#6666666f'];
    }
    obj.c0 = ['转义字符', '释义', 'Unicode编码'];
    obj.c1 = ['\\\'', '单引号字符', '\\u0027'];
    obj.c2 = ['\\"', '双引号字符', '\\u0022'];
    obj.c3 = ['\\\\', '反斜杠字符', '\\u005C'];
    obj.c4 = ['\\0', '空字符(Null)', '\\u0000'];
    obj.c5 = ['\\a', '警报', '\\u0007'];
    obj.c6 = ['\\b', '退格', '\\u0008'];
    obj.c7 = ['\\f', '换页', '\\u000C'];
    obj.c8 = ['\\r', '回车', '\\u000D'];
    obj.c9 = ['\\n', '换行', '\\u000A'];
    obj.c10 = ['\\t', '水平tab', '\\u000D'];
    obj.c11 = ['\\v', '垂直tab', '\\u000B'];
    obj.contents = [obj.c1, obj.c2, obj.c3, obj.c4, obj.c5, obj.c6, obj.c7, obj.c8, obj.c9, obj.c10, obj.c11];
    obj.trStyle_0 = ['t', 'bgc', '#ccc'];
    obj.trStyle_1 = ['t', 'c', '#233'];
    obj.trStyle_2 = ['2', 'bgc', '#ddd'];
    obj.trStyle_3 = ['4', 'bgc', '#ddd'];
    obj.trStyle_4 = ['6', 'bgc', '#ddd'];
    obj.trStyle_5 = ['8', 'bgc', '#ddd'];
    obj.trStyle_6 = ['10', 'bgc', '#ddd'];
    obj.trStyle = [obj.trStyle_0, obj.trStyle_1, obj.trStyle_2, obj.trStyle_3, obj.trStyle_4, obj.trStyle_5, obj.trStyle_6];
    add_formNode(obj);
}