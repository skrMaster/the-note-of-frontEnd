# (一)、插件相关

| 插件名称            | 插件作用                              | 插件文档地址                                                 |
| ------------------- | ------------------------------------- | ------------------------------------------------------------ |
| html2canvas         | 将html元素绘制成图片,制作html网页快照 | https://html2canvas.hertzen.com/                             |
| vue-excel-xlsx      | 前端导出成excel表                     | https://github.com/t-chatoyan/vue-excel-xlsx#readme          |
| vue-echarts         | Apache ECharts 的 Vue.js 组件         | https://github.com/ecomfe/vue-echarts/blob/HEAD/README.zh-Hans.md |
| vue-seamless-scroll | vue无缝滚动组件                       | https://chenxuan0000.github.io/vue-seamless-scroll/          |
| postcss-px2rem      | px转rem                               | https://github.com/songsiqi/px2rem-postcss                   |
| vue-baidu-map       | 百度地图的vue.js组件                  | https://dafrok.github.io/vue-baidu-map/                      |
| vue-awesome-swiper  | 一种swiper的Vue.js组件                | https://github.surmon.me/vue-awesome-swiper/                 |
| lru-cache           | 删除最近使用最少的项的缓存对象        | https://github.com/isaacs/node-lru-cache#readme              |
| compressorjs        | 图片压缩                              | https://fengyuanchen.github.io/compressorjs/                 |
# (二)、CSS3相关

### 1、border-collapse

>-   collapse——合并模式共享边框。
>
>-   separate——分隔模式相邻的单元格有独立的边框。
>
>       ```css
>   /*
>    *当border-collapse: separate;时
>    *可以使用border-spacing，调整边框的间距
>    */
>    border-spacing: length/inherit;
>    horizontal <length> | vertical <length>
>     ```

### 2、图像精灵

>   图像精灵是**单个图像**中包含的图像集合
>
>   利用background-position属性实现

### 3、CSS 计数器

>CSS 计数器是由 CSS 保持的“变量”，其值可以通过 CSS 规则递增（以跟踪其使用次数）。计数器使您可以根据内容在文档中的位置来调整其外观。

-   counter-reset - 创建或重置计数器
-   counter-increment - 递增计数器值
-   content - 插入生成的内容
-   counter() 或 counters() 函数 - 将计数器的值添加到元素

```css
/*css代码*/
body {
  counter-reset: section;
}

h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}
/*效果*/
/*
Section 1:
Section 2:
Section 3:
*/
```



### 4、CSS 特异性

>   特异性（specificity）视为得分/等级，能够确定最终将哪些样式声明应用于元素。
>
>   -   从 0 开始，为 style 属性添加 1000，为每个 ID 添加 100，为每个属性、类或伪类添加 10，为每个元素名称或伪元素添加 1。

-   在特异性相同的情况下：最新的规则很重要
-   ID 选择器比属性选择器拥有更高的特异性
-   上下文选择器比单一元素选择器更具体
-   类选择器会击败任意数量的元素选择器
-   通用选择器以及被继承的值拥有 0
    -   内联>ID>类、属性和伪类>元素和伪元素

### 5、CSS过渡

transition-timing-function 属性可接受以下值：

-   ease - 规定过渡效果，先缓慢地开始，然后加速，然后缓慢地结束（默认）
-   linear - 规定从开始到结束具有相同速度的过渡效果
-   ease-in -规定缓慢开始的过渡效果
-   ease-out - 规定缓慢结束的过渡效果
-   ease-in-out - 规定开始和结束较慢的过渡效果
-   cubic-bezier(n,n,n,n) - 允许您在三次贝塞尔函数中定义自己的值

### 6、display

-   与 display: inline 相比，主要区别在于 display: inline-block 允许在元素上设置宽度和高度。
-   如果设置了 display: inline-block，将保留上下外边距/内边距，而 display: inline 则不会。

### 7、CSS居中

-   居中
    -   margin: auto
    -   text-align
-   垂直居中
    -   line-height
    -   padding
    -   position
    -   flex布局
    -   transform

### 8、CSS伪类

|         选择器         |         例子          | 例子描述                                                     |
| :--------------------: | :-------------------: | :----------------------------------------------------------- |
|        :active         |       a:active        | 选择活动的链接。                                             |
|        :checked        |     input:checked     | 选择每个被选中的 <input> 元素。                              |
|       :disabled        |    input:disabled     | 选择每个被禁用的 <input> 元素。                              |
|         :empty         |        p:empty        | 选择没有子元素的每个 <p> 元素。                              |
|        :enabled        |     input:enabled     | 选择每个已启用的 <input> 元素。                              |
|      :first-child      |     p:first-child     | 选择作为其父的首个子元素的每个 <p> 元素。                    |
|     :first-of-type     |    p:first-of-type    | 选择作为其父的首个 <p> 元素的每个 <p> 元素。                 |
|         :focus         |      input:focus      | 选择获得焦点的 <input> 元素。                                |
|         :hover         |        a:hover        | 选择鼠标悬停其上的链接。                                     |
|       :in-range        |    input:in-range     | 选择具有指定范围内的值的 <input> 元素。                      |
|        :invalid        |     input:invalid     | 选择所有具有无效值的 <input> 元素。                          |
|   :lang(*language*)    |      p:lang(it)       | 选择每个 lang 属性值以 "it" 开头的 <p> 元素。                |
|      :last-child       |     p:last-child      | 选择作为其父的最后一个子元素的每个 <p> 元素。                |
|     :last-of-type      |    p:last-of-type     | 选择作为其父的最后一个 <p> 元素的每个 <p> 元素。             |
|         :link          |        a:link         | 选择所有未被访问的链接。                                     |
|    :not(*selector*)    |        :not(p)        | 选择每个非 <p> 元素的元素。                                  |
|    :nth-child(*n*)     |    p:nth-child(2)     | 选择作为其父的第二个子元素的每个 <p> 元素。                  |
|  :nth-last-child(*n*)  |  p:nth-last-child(2)  | 选择作为父的第二个子元素的每个<p>元素，从最后一个子元素计数。 |
| :nth-last-of-type(*n*) | p:nth-last-of-type(2) | 选择作为父的第二个<p>元素的每个<p>元素，从最后一个子元素计数 |
|   :nth-of-type(*n*)    |   p:nth-of-type(2)    | 选择作为其父的第二个 <p> 元素的每个 <p> 元素。               |
|     :only-of-type      |    p:only-of-type     | 选择作为其父的唯一 <p> 元素的每个 <p> 元素。                 |
|      :only-child       |     p:only-child      | 选择作为其父的唯一子元素的 <p> 元素。                        |
|       :optional        |    input:optional     | 选择不带 "required" 属性的 <input> 元素。                    |
|     :out-of-range      |  input:out-of-range   | 选择值在指定范围之外的 <input> 元素。                        |
|       :read-only       |    input:read-only    | 选择指定了 "readonly" 属性的 <input> 元素。                  |
|      :read-write       |   input:read-write    | 选择不带 "readonly" 属性的 <input> 元素。                    |
|       :required        |    input:required     | 选择指定了 "required" 属性的 <input> 元素。                  |
|         :root          |         root          | 选择元素的根元素。                                           |
|        :target         |     #news:target      | 选择当前活动的 #news 元素（单击包含该锚名称的 URL）。        |
|         :valid         |      input:valid      | 选择所有具有有效值的 <input> 元素。                          |
|        :visited        |       a:visited       | 选择所有已访问的链接。                                       |

### 9、导航栏 = 链接列表

>   ```<ul><li><a></a></li></ul>```

### 10、CSS 属性选择器

-   css[attribute]选择器

    >   下例选择所有带有 target 属性的 <a> 元素

    ```css
    a[target] {
      background-color: yellow;
    }
    ```

-   CSS [attribute="value"] 选择器

    >   下例选取所有带有 target="_blank" 属性的 <a> 元素

    ```css
    a[target="_blank"] { 
      background-color: yellow;
    }
    ```

-   CSS [attribute~="value"] 选择器

    >   下例选取 title 属性包含 "flower" 单词的所有元素

    ```css
    [title~="flower"] {
      border: 5px solid yellow;
    }
    ```

-   CSS [attribute|="value"] 选择器

    >   下例选取 class 属性以 "top" 开头的所有元素：
    >
    >   **注意：**值必须是完整或单独的单词

    ```css
    [class|="top"] {
      background: yellow;
    }
    ```

-   CSS [attribute^="value"] 选择器

    >   下例选取 class 属性以 "top" 开头的所有元素
    >
    >   **注意**：值可以不是完整的单词
    
    ```css
    [class^="top"] {
      background: yellow;
    }
    ```
    
-   CSS [attribute$="value"] 选择器

    >    下例选取 class 属性以 "test" 结尾的所有元素
    >
    >   **注意：**值可以不是完整的单词

    ```css
    [class$="test"] {
      background: yellow;
    }
    ```
    
-   CSS [attribute*="value"] 选择器

    >   下例选取 class 属性包含 "te" 的所有元素
    >
    >   **注意：**值可以不是完整的单词

    ```css
    [class*="te"] {
      background: yellow;
    }
    ```

### 11 、带有图标/图像的输入框

>   如果希望在输入框中包含图标，请使用 background-image 属性，并将其与 background-position 属性一起设置。还要注意，添加了一个较大的左内边距（padding-left）来留出图标的空间

### 12、border-image

>   需要设置 **border** 属性！
>
>   通过使用 CSS border-image 属性，可以设置图像用作围绕元素的边框。

-   | 属性                | 描述                                         |
    | :------------------ | :------------------------------------------- |
    | border-image        | 用于设置所有 border-image-* 属性的简写属性。 |
    | border-image-source | 规定用作边框的图像的路径。                   |
    | border-image-slice  | 规定如何裁切边框图像。                       |
    | border-image-width  | 规定边框图像的宽度。                         |
    | border-image-outset | 规定边框图像区域超出边框盒的量。             |
    | border-image-repeat | 规定边框图像应重复、圆角、还是拉伸。         |

### 13、background-image

>   CSS 允许通过 background-image 属性为一个元素添加多幅背景图像。

| 属性              | 描述                                                         |
| :---------------- | :----------------------------------------------------------- |
| background        | 用于在一条声明中设置所有背景属性的简写属性。                 |
| background-clip   | 规定背景的绘制区域。设置元素的背景（背景图片或颜色）是否延伸到边框、内边距盒子、内容盒子下面。 |
| background-image  | 为一个元素指定一幅或多幅背景图像。                           |
| background-origin | 规定背景图像的放置位置。当使用 `background-attachment` 为fixed时，该属性将被忽略不起作用。 |
| background-size   | 规定背景图像的大小。                                         |

### 14、文本边框text-shadow

`text-shadow: 水平阴影 垂直阴影 模糊半径 颜色`

```css
h1 {
  color: yellow;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}
```

### 15、使用粗体文本

您必须添加另一条 @font-face 规则，其中包含粗体文本的描述符：

```css
@font-face {
  font-family: myFirstFont;
  src: url(sansation_bold.woff);
  font-weight: bold;
}
```

文件 "sansation_bold.woff" 是另一个字体文件，其中包含 Sansation 字体的粗体字符。

### 16、perspective

>   CSS 属性 **`perspective`**指定了观察者与 z=0 平面的距离，使具有三维位置变换的元素产生透视效果。 z>0 的三维元素比正常大，而 z<0 时则比正常小，大小程度由该属性的值决定

-   通常和translateZ一起使用
    -   perspective是模拟观察者到屏幕的距离
    -   translate控制元素到屏幕坐标系的距离
        -   屏幕上的效果是元素的投影

### 17、vertical-align

>   CSS 的属性 **`vertical-align`** 用来指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。

### 18、CSS transition

>   按钮的**涟漪效果**通过:active结合transition实现
>
>   **注意**： 要将:active的transition设置为0，否则动画效果会覆盖

| 属性                       | 描述                                         |
| :------------------------- | :------------------------------------------- |
| transition                 | 简写属性，用于将四个过渡属性设置为单一属性。 |
| transition-delay           | 规定过渡效果的延迟（以秒计）。               |
| transition-duration        | 规定过渡效果要持续多少秒或毫秒。             |
| transition-property        | 规定过渡效果所针对的 CSS 属性的名称。        |
| transition-timing-function | 规定过渡效果的速度曲线。                     |

### 19、CSS动画

| 属性                      | 描述                                                         |
| :------------------------ | :----------------------------------------------------------- |
| @keyframes                | 规定动画模式。                                               |
| animation                 | 设置所有动画属性的简写属性。                                 |
| animation-delay           | 规定动画开始的延迟。                                         |
| animation-direction       | 定动画是向前播放、向后播放还是交替播放。                     |
| animation-duration        | 规定动画完成一个周期应花费的时间。                           |
| animation-fill-mode       | 规定元素在不播放动画时的样式（在开始前、结束后，或两者同时）。 |
| animation-iteration-count | 规定动画应播放的次数。                                       |
| animation-name            | 规定 @keyframes 动画的名称。                                 |
| animation-play-state      | 规定动画是运行还是暂停。                                     |
| animation-timing-function | 规定动画的速度曲线。                                         |

### 20、object-fit

object-fit 属性可接受如下值：

-   fill - 默认值。调整替换后的内容大小，以填充元素的内容框。如有必要，将拉伸或挤压物体以适应该对象。
-   contain - 缩放替换后的内容以保持其纵横比，同时将其放入元素的内容框。
-   cover - 调整替换内容的大小，以在填充元素的整个内容框时保持其长宽比。该对象将被裁剪以适应。
-   none - 不对替换的内容调整大小。
-   scale-down - 调整内容大小就像没有指定内容或包含内容一样（将导致较小的具体对象尺寸）

### 21、CSS变量

>   var() 函数用于插入 CSS 变量的值。
>
>   CSS 变量可以访问 DOM，这意味着您可以创建具有局部或全局范围的变量，使用 JavaScript 来修改变量，以及基于媒体查询来修改变量。
>
>   使用 CSS 变量的一种好方法涉及设计的颜色。您可以将它们放在变量中，而不必一遍又一遍地复制和粘贴相同的颜色。

var() 函数的语法如下：

```
var(name, value)
```

| 值    | 描述                                 |
| :---- | :----------------------------------- |
| name  | 必需。变量名（以两条破折号开头）。   |
| value | 可选。回退值（在未找到变量时使用）。 |

-   可设置在全局和局部，全局:root，局部会覆盖全局；javascript可以更改变量

```css
:root {
  --blue: #1e90ff;//定义变量方式 --变量名
  --white: #ffffff;
}

body { background-color: var(--blue); }

h2 { border-bottom: 2px solid var(--blue); }

.container {
  color: var(--blue);
  background-color: var(--white);
  padding: 15px;
}

button {
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  padding: 5px;
}
```

### 22、媒体类型

| 值     | 描述                                     |
| :----- | :--------------------------------------- |
| all    | 用于所有媒体类型设备。                   |
| print  | 用于打印机。                             |
| screen | 用于计算机屏幕、平板电脑、智能手机等等。 |
| speech | 用于大声“读出”页面的屏幕阅读器。         |

```css
/* 创建彼此相邻浮动的四个相等的列 */
.column {
  float: left;
  width: 25%;
}

/* 在 992p x或更小的屏幕上，从四列变为两列 */
@media screen and (max-width: 992px) {
  .column {
    width: 50%;
  }
}

/* 在宽度小于或等于 600 像素的屏幕上，使各列堆叠，而不是并排 */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
  }
}
```

### 23、响应式设计

>   -   响应式 web 设计会让您的网页在所有设备上看起来都不错。
>
>   -   响应式 web 设计仅使用 HTML 和 CSS。
>
>   -   响应式 web 设计并<u>不是程序或 JavaScript。</u>

***

**视口viewport**：是用户在网页上的可见区域

>   HTML5 引入了一种方法，使 Web 设计者可以通过 <meta> 标签来控制视口。
>
>   ```html
>   <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   <!--
>   width=device-width 部分将页面的宽度设置为跟随设备的屏幕宽度（视设备而定）。
>   当浏览器首次加载页面时，initial-scale=1.0 部分设置初始缩放级别。
>   -->
>   ```

**注意：**

1.   请勿使用较大的固定宽度元素

2.   不要让内容依赖于特定的视口宽度来呈现好的效果
3.   使用 CSS 媒体查询为小屏幕和大屏幕应用不同的样式

**网格视图**

>   -   响应式网格视图通常有 12 列，总宽度为 100％，并且在调整浏览器窗口大小时会收缩和伸展。
>       -   确保所有 HTML 元素的 box-sizing 属性设置为 border-box。这样可以确保元素的总宽度和高度中包括内边距（填充）和边框。

```css
/*计算
12 列的响应式网格视图
计算一列的百分比：100% / 12 列 = 8.33%
*/
.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

/*这些列应向左浮动，并带有 15px 的内边距：*/
[class*="col-"] {
  float: left;
  padding: 15px;
  border: 1px solid red;
}

/*防止应设置了float而导致元素从页面流中移出*/
.row::after {
  content: "";
  clear: both;
  display: table;
}
```

 -   断点
   -   始终移动优先设计

```css
/* 针对手机： */
[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 600px) {
  /* 针对平板电脑： */
  .col-s-1 {width: 8.33%;}
  .col-s-2 {width: 16.66%;}
  .col-s-3 {width: 25%;}
  .col-s-4 {width: 33.33%;}
  .col-s-5 {width: 41.66%;}
  .col-s-6 {width: 50%;}
  .col-s-7 {width: 58.33%;}
  .col-s-8 {width: 66.66%;}
  .col-s-9 {width: 75%;}
  .col-s-10 {width: 83.33%;}
  .col-s-11 {width: 91.66%;}
  .col-s-12 {width: 100%;}
}

@media only screen and (min-width: 768px) {
  /* 针对桌面： */
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  .col-3 {width: 25%;}
  .col-4 {width: 33.33%;}
  .col-5 {width: 41.66%;}
  .col-6 {width: 50%;}
  .col-7 {width: 58.33%;}
  .col-8 {width: 66.66%;}
  .col-9 {width: 75%;}
  .col-10 {width: 83.33%;}
  .col-11 {width: 91.66%;}
  .col-12 {width: 100%;}
}
```

-   典型设备断点

    ```css
    /* 超小型设备（电话，600px 及以下） */
    @media only screen and (max-width: 600px) {...} 
    
    /* 小型设备（纵向平板电脑和大型手机，600 像素及以上） */
    @media only screen and (min-width: 600px) {...} 
    
    /* 中型设备（横向平板电脑，768 像素及以上） */
    @media only screen and (min-width: 768px) {...} 
    
    /* 大型设备（笔记本电脑/台式机，992px 及以上） */
    @media only screen and (min-width: 992px) {...} 
    
    /* 超大型设备（大型笔记本电脑和台式机，1200px 及以上） */
    @media only screen and (min-width: 1200px) {...}
    ```

-   方向：媒体查询还可用于根据浏览器的方向来更改页面的布局

-   用媒体查询隐藏元素：媒体查询的另一种常见用法是在不同屏幕尺寸上对元素进行隐藏

-   用媒体查询修改字体：媒体查询来更改不同屏幕尺寸上的元素的字体大小

### 24、CSS网格布局模块Grid

1.   网格列 <u>Grid Columns</u>：网格项的垂直线被称为列。

2.   网格行 <u>Grid Rows</u>：网格项的水平线被称为行。

3.   网格间隙 <u>Grid Gaps</u>：每列/行之间的间隔称为间隙。

4.   列之间的线称为列线  <u>column lines</u>

5.   行之间的线称为行线 <u>row lines</u>
-    grid-column 属性定义将项目放置在哪一列上。

     ```css
     /*"item1" 从第 1 列开始并在第 5 列之前结束：*/
     .item1 {
       grid-column: 1 / 5;
     }
     
     /*使 "item1" 从第 1 列开始，并跨越 3 列：*/
     .item1 {
       grid-column: 1 / span 3;
     }
     ```

-	grid-row 属性定义了将项目放置在哪一行。

    ```css
    /*"item1" 在 row-line 1 开始，在 row-line 4 结束*/
    .item1 {
      grid-row: 1 / 4;
    }
    
    /*使 "item1" 从第 1 行开始并跨越 2 行：*/
    .item1 {
      grid-row: 1 / span 2;
    }
    ```

-	grid-area：grid-row-start、grid-column-start、grid-row-end 和 grid-column-end 属性的简写属性。




# （三）浏览器相关

### 1、Browser core(渲染引擎)

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

# （四）坑

### 4.1 关于在vue2的单页面应用中使用echarts

-   一个页面

    -   多个组件

        -   每个组件都使用了eharts图表

        -   echarts会默认使用CanvasRenderer

        -   若其中有一个组件设置了渲染方式为SVGRenderer，修改无效

        -   要改就全部都改为SVGRenderer

            -   >   -d
                >
                >   "echarts": "^5.1.2"
                >
                >   "vue-echarts": "^6.0.0"
                >
                >   --dev d
                >
                >   "@vue/composition-api": "^1.1.1"
