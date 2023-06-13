createElem('关键字', '.NET CTS 类型名', '描述', '范围和精度', '默认值', 'h2');
createElem('bool', 'System.Boolean', '逻辑值(真或假)', 'true,false', 'false');
createElem('sbyte', 'System.SByte', '8位有符号整数类型', '-128 ~ 127', 0);
createElem('byte', 'System.Byte', '8位无符号整数类型', '0 ~ 255', 0);
createElem('short', 'System.Int16', '16位有符号整数类型', '-32768 ~ 32767', 0);
createElem('ushort', 'System.UInt16', '16位无符号整数类型', '0 ~ 65535', 0);
createElem('int', 'System.Int32', '32位有符号整数类型', '-2147483648 ~ 2147483647', 0);

createElem('uint', 'System.UInt32', '32位无符号整数类型', '0 ~ 4294967295', 0);
createElem('long', 'System.Int64', '64位有符号整数类型', '-9223372036854775808 ' + '\n' + '~ 9223372036854775807', '0L');
createElem('ulong', 'System.UInt64', '64位无符号整数类型', '0 ~ 18446744073709551615', 0);
createElem('char', 'System.Char', '16位字符(Unicode)类型', '所有Unicode编码字符' + '\n' + '(U +0000 ~ U +ffff)', "'\\0'");
createElem('float', 'System.Single', '32位单精浮点类型', '-3.4 x 10<sup>38</sup> ~ 3.4 x 10<sup>38</sup>' + '\n' + '(约7个有效十进制数位)', '0.0F');
createElem('double', 'System.Double', '64位双精浮点类型', '(+/-)5.0 x 10<sup>-324</sup> ~ (+/-)1.7 x 10<sup>308</sup>' + '\n' + '(15~16个有效十进制数位)', '0.0D');
createElem('decimal', 'System.Decimal', '128位高精度十进制数类型', '	(-7.9 x 10<sup>28</sup> ~ 7.9 x 10<sup>28</sup>) / 10<sup>0~28</sup>' + '\n' + '(28~29有效数位)', '0.0M')

createElem('预定义引用类型', '/', '/', '/', '/', 'h2');
createElem('object', 'System.Object', '根类型，C#中所有类型都派生字本类', '/', '/');
createElem('string', 'System.String', '表示Unicode字符串', '/', '/');


/* url: https://www.runoob.com/csharp/csharp-data-types.html */
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
var arr_02_1 = [h4, 1, 111, ud, ud, ud, '3.2L'];
var arr_02 = [h4, 1, ud, ud, ud, ud, '3.2L'];

var titArr = [h3, 0.06, ud, ud, ud, '1rem'];

// add_normalNode([], 'h4');
// add_listNode([], 'p', 8, breakOff = 1);
add_normalNode(['摘自：https://www.cnblogs.com/springsnow/p/9428611.html'], hh1);
add_normalNode(['一、预定义的值类型'], hh2);
add_normalNode(['一个字节（1Byte）=8位（8Bit）'], hh4);
add_normalNode(['BitArarry类可以管理位Bit。'], hh4);

add_normalNode(['1、整型'], hh2);

add_normalNode(['所有的整形变量都能用十进制或十六进制表示：long a=0x12AB'], hh4);
add_normalNode(['对一个整形值如未指定类型，默认为int类型，可加上U，L，UL后缀表示其他类型。', 'long a=1234L'], [h4, 0.08, '0.25rem 0 1.4rem 0.25rem']);

// list
// label, space, breakOff, lType, className, bgc, marginLeft
add_listNode(['sbyte :无符号形式：1字节（8位），范围：0 ~ 255（28-1）,' + ' 十六进制表示：0x00-0xFF，System.SByte'], ['p', 0.4, 111]);
add_listNode(['byte :有符号形式：1字节（8位），范围：-128 ~ 127（-215 ~ 215-1）,' + ' 十六进制表示：0x00-0xFF，System.SByte'], arr_01);
add_listNode(['short  :有符号形式：2字节（16位），范围：-32768 ~ 32767（-231 ~ 231-1）,' + ' 十六进制表示：0x0000-0xFFFF，System.Int16'], arr_01);
add_listNode(['ushort：无符号形式：2字节（16位），范围：0 ~ 65534（216-1）,' + '十六进制表示：0x0000-0xFFFF，System.Int16'], arr_01);
add_listNode(['int : 有符号形式：4个字节（32位），范围：-231 ~ 231-1，System.Int32,'], arr_01);
add_listNode(['uint(U):无符号形式：4个字节（32位），范围：0 ~ 232-1，System.Int32,'], arr_01);
add_listNode(['long(L):有符号形式：8个字节（64位），范围：263  ~ 263-1，System.Int64'], arr_01);
add_listNode(['ulong(UL):无符号形式：8个字节（64位），范围：0 ~ 264-1，System.Int64'], arr_01);

add_normalNode(['2、浮点型'], hh2);
add_normalNode(['对一个浮点数值默认为double类型，其后加F、M指定为其他类型。'], hh4);
add_listNode(['float(F):单精度浮点数,4字节（32位），小数精度：7，范围：1.5*10-45 ~ 3.4*1038 ,System.Single'], ['p', 8, 111]);
add_listNode(['double:双精度浮点数,8字节（64位），小数精度：15/16，范围：5.0*10-324  ~ 3.4*10308  ,System.Double'], arr_01);
add_listNode(['decimal(M):128位高精度，16字节（128位），小数精度：28，范围：1.0*10-28 ~ 7.9*1028 ,System.Decimal'], arr_01);

add_normalNode(['3、布尔型'], hh2);
add_listNode(['bool :一个字节（8位），范围：true/false,System.Boolean'], ['p', 0.4, 111]);

add_normalNode(['4、字符型（一个字符用2个字节表示）'], hh2);
add_listNode(['char:2字节（16位），范围：Unicode字符。'], ['p', 0.4, 111]);
add_normalNode(['字符表示法：'], p);
add_listNode(['字面法：char a=’x’'], ['p', 8, 111, 'decimal']);
add_listNode(['十六进制法：char a=’\\x0058’'], ['p', 0.4, 0, 'decimal']);
add_listNode(['显示转换整数：char a=(char)88'], ['p', 0.4, 0, 'decimal']);

add_normalNode(['二、预定义的引用类型：object和string'], hh2);
add_listNode(['注意：string作为函数的参数时，为传值形式，传递地址仍然需要增加”ref”'], ['p', 0.4, 111]);

// normal
// label, space, mgn, name, bgColor, textIndent, font
add_normalNode(['-----------------------', '华丽的分割线', '-----------------------'], [h4, 0.16, '2.4rem 0px 0.72rem 0px', 'SplitLine', '#ffffff66', '0.25rem']);
add_normalNode(['笔记:'], hh2)
add_normalNode(['string 类型表示零活更多 Unicode 字符组成的序列。string 是 .NET Framework 中 String 的别名', '(人话: string 和 String 一样)'], [h2, '2', '24px']);
add_normalNode(['4.常量:'], [h2, '2', '0.25rem'])

add_normalNode(['在常量后面加u(不区分大小写)', '表示无符号整数。', '例如:'], titArr);
add_listNode(['64U', '// 这是一个 uint 类型'], arr_02);
add_listNode(['64UL', '// 这是一个 ulong 类型'], arr_02);

add_normalNode(['整型常量既可以采用十进制也可以采用十六进制，默认为十进制', '在数值前加 0x(或0X) 则表示为十六进制'], titArr);
add_listNode(['0x20', '// 十六进制数20，等于十进制数32'], arr_02);

add_normalNode(['一般带小数点的数或用科学计数法表示的数都被认为是浮点数', '其数据类型默认为 double 类型'], titArr);
add_listNode(['在数字后面加F（f）', '表示是 float 类型。'], arr_02_1);
add_listNode(['在数字后面加D（d）', '表示是 double 类型。'], arr_02);
add_listNode(['在数字后面加M（m）', '表示是 decimal 类型。'], arr_02);
add_listNode(['0x1F', '// 十六进制1F, 等于十进制数31'], arr_02);

add_normalNode(['字符常量'], hh2)
add_normalNode(['简单地说是单引号括起来的单个字符，如\'A\'，它占16位，以无符号整型数的形式存储这个字符所对应的Unicode代码', '这对大多数图形字符是可行的，但对一些非图形的控制字符（如回车符）则行不通，所以字符常量的表达有若干种形式。'], titArr);
add_listNode(['十六进制的换码系列，', '以 “\\x” 或 “\\X” 开始'], arr_02_1);
add_listNode(['Unicode码表示形式', '以 “\\u” 或 “\\U” 开始'], arr_02);
add_listNode(['显示转换整数字符代码，', '如 (char)64'], arr_02);
add_normalNode(['字符转义对照表'], hh2);

form_ini_00(1);