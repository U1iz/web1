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
    obj.c0 = ['名称', '释义', '释义二'];
    obj.c1 = ['Public', '公有成员', '最开放，所有本程序集以及其他的程序集里的对象都能访问'];
    obj.c2 = ['Protected', '保护成员', '自身成员以及子类成员可访问</br>(保护成员在本类内部和本类的派生类中可以访问)'];
    obj.c3 = ['Private', '私有成员', '只有自身成员才能访问'];
    obj.c4 = ['Internal', '内部成员', '本程序集内部成员可以访问(在同一个命名空间内可以访问)'];
    obj.c5 = ['Partial', '部分类', '可以将一个类分成几部分卸载不同文件中，最终编译时将合并成一个文件,</br>且个各部分不能分散在程序集中'];
    obj.c6 = ['Abstract', '', '修饰类的时候表示该类为抽象类，不能够创建该类的实例。</br>修饰方法的时候表示该方法需要由子类来实现，</br>如果子类没有实现该方法那么子类同样是抽象类；且含有抽象方法的类一定是抽象类'];
    obj.c7 = ['Sealed', '', '修饰类时表示该类不能够被继承，</br>修饰方法时表示该方法不能被覆写。'];
    obj.c8 = ['Static', '', '修饰类时表示该类时静态类，不能够实例化该类的对象，</br>既然不能实例化该类，那么这个类也就不能够含有对象成员，即该类所有成员为静态；</br>修饰类成员时，该成员为类成员，只能通过【 类.成员名】的方式访问 '];
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

function form_ini_01(iniType) {
    let obj = new Object();
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
    obj.c0 = ['转义字符', '释义', 'Unicode编码'];
    obj.c1 = ['\\\'', '单引号字符', '\\u0027'];
    obj.c2 = ['\\"', '双引号字符', '\\u0022'];
    obj.c3 = ['\\\\', '反斜杠字符', '\\u005C'];
    obj.c4 = ['\\0', '空字符(Null)', '\\u0000'];
    obj.c5 = ['\\a', '警报', '\\u0007'];
    obj.c6 = ['\\b', '退格', '\\u0008'];
    obj.c7 = ['\\f', '换页', '\\u000C'];
    obj.c8 = ['\\r', '回车', '\\u000D'];
    obj.c8 = ['\\n', '换行', '\\u000A'];
    obj.c9 = ['\\t', '水平tab', '\\u000D'];
    obj.c10 = ['\\v', '垂直tab', '\\u000B'];
    obj.contents = [obj.c1, obj.c2, obj.c3, obj.c4, obj.c5, obj.c6, obj.c7, obj.c8, obj.c9, obj.c10];
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