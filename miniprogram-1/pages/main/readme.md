   需要随时刷新的数据放入onShow  返回页面不变的使用onLoad
    画三角标
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #000;
        float: left;
        margin-left: 1px;
        
    line-heigh;  线条高度
    text-align: center; 水平对齐
     三元运算符 ？
        语法为：条件表达式？表达式1：表达式2。
        说明：问号前面的位置是判断的条件，判断结果为bool型，为true时调用表达式1，为false时调用表达式2。
        其逻辑为：“如果条件表达式成立或者满足则执行表达式1，
        否则执行第二个。”常用在设置默认值,例如某个值不一定存在,
        则判断这个值是否存在,不存在给默认值(表达式2)。

    wx:for微信for循环 添加一个key  
        for循环接收js传来的数组 
        设置每次的key键通过key+变量名输出属性值
        block 只是为块方便设置for循环
    position relative 和position absolute
        position：absolute这个是绝对定位；
        是相对于浏览器的定位。
        比如：position：absolute；left:20px;top:80px; 这个容器始终位于距离浏览器左20px,距离浏览器上80px的这个位置。
        position：relative是相对定位，是相对于前面的容器定位的。这个时候不能用top left在定位。应该用margin。
        比如：<div class="1"></div><div class="2"></div>
        当1固定了位置。1的样式float:left;width:100px; height:800px;
        2的样式为float:left; position：relative；margin-left:20px;width:50px;
        2的位置在1的右边，距离120px

