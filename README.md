### 1、border-collapse
>-   collapse——合并模式共享边框。
>
>-   separate——分隔模式相邻的单元格有独立的边框。
>
>    
>
>    ```css
>    /*
>    *当border-collapse: separate;时
>    *可以使用border-spacing，调整边框的间距
>    */
>    border-spacing: length/inherit;
>    horizontal <length> | vertical <length>
>    ```

### 2、Browser core(渲染引擎)

-   分类
    -   Trident：IE内核
    -   Gecko：Firefox内核
    -   Presto：前Opera内核
    -   Webkit：Android默认浏览器、Apple Safari、Chrome、360、搜狗
    -   Blink：chrome下一个内核
-   内核技术
    -   排版渲染引擎
    -   JavaScript引擎
    -   ···

### 3、图像精灵

>   图像精灵是**单个图像**中包含的图像集合

### 4、CSS 计数器

>CSS 计数器是由 CSS 保持的“变量”，其值可以通过 CSS 规则递增（以跟踪其使用次数）。计数器使您可以根据内容在文档中的位置来调整其外观。

-   counter-reset - 创建或重置计数器
-   counter-increment - 递增计数器值
-   content - 插入生成的内容
-   counter() 或 counters() 函数 - 将计数器的值添加到元素

### 5、CSS 特异性

>   特异性（specificity）视为得分/等级，能够确定最终将哪些样式声明应用于元素。
>
>   -   -   从 0 开始，为 style 属性添加 1000，为每个 ID 添加 100，为每个属性、类或伪类添加 10，为每个元素名称或伪元素添加 1。

-   在特异性相同的情况下：最新的规则很重要
-   ID 选择器比属性选择器拥有更高的特异性
-   上下文选择器比单一元素选择器更具体
-   类选择器会击败任意数量的元素选择器
-   通用选择器以及被继承的值拥有 0
    -   内联>ID>类、属性和伪类>元素和伪元素

### 6、css过渡

transition-timing-function 属性可接受以下值：

-   ease - 规定过渡效果，先缓慢地开始，然后加速，然后缓慢地结束（默认）
-   linear - 规定从开始到结束具有相同速度的过渡效果
-   ease-in -规定缓慢开始的过渡效果
-   ease-out - 规定缓慢结束的过渡效果
-   ease-in-out - 规定开始和结束较慢的过渡效果
-   cubic-bezier(n,n,n,n) - 允许您在三次贝塞尔函数中定义自己的值

