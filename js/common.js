// 获取ID
function getId(id) {
    return document.getElementById(id);
}

// 获取class
function getClass(cls) {
    //检测当前浏览器是否支持getElementsByClassName
    if (typeof document.getElementsByClassName == "function") {
        return document.getElementsByClassName(cls);
    } else {
        //首先获取页面中的所有标签
        var tags = document.getElementsByTagName("*");

        //检测每一个标签的类名属性
        var resultArr = [];
        for (var i = 0; i < tags.length; i++) {
            //先判断当前的标签有没有类名属性，如果有，再继续操作者
            if (tags[i].className != "") {
                //将tags[i].className 按照“ ”分开，对比每一部分是否跟cls相等
                var temp = tags[i].className;
                temp = temp.split(" ");
                //检测temp中的每一部分
                for (var j = 0; j < temp.length; j++) {
                    //如果有某一部分相等，说明当前这个类名属于的标签就是我们想要的
                    if (temp[j] == cls) {
                        //放到结果数组中
                        resultArr.push(tags[i]);
                    }
                }
            }
        }
        return resultArr;
    }
}

// 创建元素
function createEle(tar) {
    return document.createElement(tar);
}

// 获取屏幕卷曲度
function scroll() {
    return {
        scrollTop: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        scrollLeft: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        scrollHeight: document.documentElement.scrollHeight || document.body.scrollHeight || 0,
        scrollWidth: document.documentElement.scrollWidth || document.body.scrollWidth || 0
    };
}


// 开机动画
var g_l = getId("g_l");
var g_r = getId("g_r");
setTimeout(function() {
    animate(g_l, { "left": "-750" });
    animate(g_r, { "right": "-750" });
}, 1000);

setTimeout(function() {
    document.body.style.backgroundColor = "#fff";
    var bigContainer = getId("bigcontainer");
    var gears = getId("gears");
    bigContainer.style.overflow = "visible";
    bigContainer.style.height="0px";
    gears.style.display = "none";
}, 2000);




// 运动函数 animate
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var flag = true; //true表示可以清理
        for (var k in json) {
            //k:v
            //k:json[k]
            //属性名:属性目标值
            if (k == "opacity") {
                var leader = getStyle(obj, k) * 100;
                //虽然getStyle获取到的是字符串类型 但是参与运算后会自动转换
                var target = json[k] * 100;
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[k] = (leader + step) / 100;
            } else if (k == "zIndex") {
                obj.style[k] = json[k];
            } else {
                var leader = parseInt(getStyle(obj, k)) || 0;
                var target = json[k];
                var step = (target - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                obj.style[k] = leader + step + "px";
            }
            if (leader != target) {
                flag = false; //告诉标记 我这个值还没达到不要清理
            }

        }
        //遍历完成之后再检查
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn(obj);
            }
        }
    }, 15)
}

// 获取元素当前style
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}



// 顶部导航栏 top-list
var subLists = getClass("drop-sub-list");
var students = [
    { "name": "ColorfulWorld", "href": "small_Item/ColorfulWorld.html" },
    { "name": "菜单栏切换", "href": "small_Item/tab切换.html" },
    { "name": "表格的增删改查", "href": "small_Item/表格的增删改查.html" },
    { "name": "菜单跟随", "href": "small_Item/car/index.html" },
    { "name": "图片瀑布流", "href": "small_Item/picture/index.html" }
];
var str = "";
for (var i = 0; i < students.length; i++) {
    str += "<li class='drop-sub-content'><a href='" + students[i].href + "' target='_blank'>" + students[i].name + "</a></li>";
};
subLists[0].innerHTML = str;

var s_support = [
    { "name": "放大镜效果", "href": "small_Item/放大镜效果.html" },
    { "name": "固定导航栏", "href": "small_Item/固定导航栏.html" },
    { "name": "滚动条", "href": "small_Item/滚动条.html" },
    { "name": "动态获取用户", "href": "small_Item/动态获取用户.html" },
    { "name": "筋斗云", "href": "small_Item/筋斗云.html" },
    { "name": "轮播图", "href": "small_Item/轮播图.html" },
    { "name": "手风琴", "href": "small_Item/手风琴.html" },
    { "name": "鼠标跟随", "href": "small_Item/鼠标跟随.html" },
    { "name": "搜索框", "href": "small_Item/搜索框.html" },
    { "name": "拖拽", "href": "small_Item/拖拽.html" }
];
str = "";
for (var i = 0; i < s_support.length; i++) {
    str += "<li class='drop-sub-content'><a href='" + s_support[i].href + "' target='_blank'>" + s_support[i].name + "</a></li>";
};

subLists[1].innerHTML = str;

var device_xbox = [
    { "name": "微博发布", "href": "small_Item/微博发布.html" },
    { "name": "许愿墙", "href": "small_Item/许愿墙.html" },
    { "name": "旋转木马", "href": "small_Item/旋转木马.html" },
    { "name": "选水果", "href": "small_Item/选水果.html" },
    { "name": "验证", "href": "small_Item/验证.html" },
];

str = "";
for (var i = 0; i < device_xbox.length; i++) {
    str += "<li class='drop-sub-content'><a href='" + device_xbox[i].href + "' target='_blank'>" + device_xbox[i].name + "</a></li>";
};
subLists[2].innerHTML = str;


var busniss = [
    { "name": "ColorfulWorld", "href": "small_Item/ColorfulWorld.html" },
    { "name": "菜单跟随", "href": "small_Item/car/index.html" },
    { "name": "图片瀑布流", "href": "small_Item/picture/index.html" },
    { "name": "表格的增删改查", "href": "small_Item/表格的增删改查.html" },
    { "name": "放大镜效果", "href": "small_Item/放大镜效果.html" },
    { "name": "滚动条", "href": "small_Item/滚动条.html" },
    { "name": "动态获取用户", "href": "small_Item/动态获取用户.html" },
    { "name": "轮播图", "href": "small_Item/轮播图.html" },
    { "name": "手风琴", "href": "small_Item/手风琴.html" },
    { "name": "旋转木马", "href": "small_Item/旋转木马.html" },
    { "name": "许愿墙", "href": "small_Item/许愿墙.html" }
];

str = "";
for (var i = 0; i < busniss.length; i++) {
    str += "<li class='drop-sub-content'><a href='" + busniss[i].href + "' target='_blank'>" + busniss[i].name + "</a></li>";
};
subLists[3].innerHTML = str;


var develper = [
    { "name": "鼠标跟随", "href": "small_Item/鼠标跟随.html" },
    { "name": "搜索框", "href": "small_Item/搜索框.html" },
    { "name": "拖拽", "href": "small_Item/拖拽.html" },
    { "name": "微博发布", "href": "small_Item/微博发布.html" },
    { "name": "筋斗云", "href": "small_Item/筋斗云.html" }
];

str = "";
for (var i = 0; i < develper.length; i++) {
    str += "<li class='drop-sub-content'><a href='" + develper[i].href + "' target='_blank'>" + develper[i].name + "</a></li>";
};
subLists[4].innerHTML = str;

var listItems = getClass("top-list-item");
var listInners = getClass("drop-list-inner");

for (var i = 0, len = listItems.length; i < len; i++) {

    // listItem[i].onmouseover=function(){
    //     var current=this.children[1];
    //     console.log(current);
    //     if (current.style.display="none"){
    //         console.log(current);
    //     current.style.display="block";
    //     var height=current.offsetHeight;
    //     console.log(height);
    //     current.style.height="0px";
    //     animate(current,{"height":height});
    //     current.style.zIndex="3";

    //     }
    // };

    // listItem[i].onmouseout=function(){

    //     var current = this.children[1];
    //     console.log(current);
    //     if (current.style.display="block"){
    //         console.log(current);

    //         animate(current,{"height":"0px"});
    //         current.style.display="none";
    //          console.log(current.style.height);

    //     }
    // };

    listItems[i].onmouseover = function() {
        if (this.children[1]) {
            this.children[1].style.display = "block";
            this.children[1].style.zIndex = "2";
            this.style.backgroundColor = "#f2f2f2";

        }
    };
    listItems[i].onmouseout = function() {
        if (this.children[1]) {
            this.children[1].style.display = "none";
            this.style.backgroundColor = "#fff";
        }
    };
};

for (var i = 0, len = listInners.length; i < len; i++) {
    listInners[i].onmouseover = function() {
        if (this.children[1]) {
            this.children[1].style.display = "block";
        }
    };
    listInners[i].onmouseout = function() {
        if (this.children[1]) {
            this.children[1].style.display = "none";
        }
    };
}


// nav导航栏

var dropWraps = getClass("nav-drop-wrap");
str = "";
var dataone = [
    { "name": "video", "href": "H5_Item/video/index.html" },
    { "name": "form表单", "href": "H5_Item/form表单.html" },
    { "name": "localStorange", "href": "H5_Item/localStorange.html" },
    { "name": "tab切换", "href": "H5_Item/tab切换.html" },
    { "name": "拖拽", "href": "H5_Item/拖拽.html" },
    { "name": "3D相册", "href": "H5_Item/3D相册/index.html" }
];
for (var i = 0; i < dataone.length; i++) {
    str += "<li class='nav-drop-item'><a href='" + dataone[i].href + "' target='_blank'>" + dataone[i].name + "</a></li>";
};
dropWraps[0].children[0].innerHTML = str;

str = "";
var live = [
    { "name": "360主页", "href": "css3_Item/360/index.html" },
];
for (var i = 0; i < live.length; i++) {
    str += "<li class='nav-drop-item'><a href='" + live[i].href + "' target='_blank'>" + live[i].name + "</a></li>";
};
dropWraps[1].children[0].innerHTML = str;

str = "";
var onwin = [
    { "name": "切割轮播图", "href": "css3_Item/切割轮播图/index.html" },
    { "name": "大海波涛", "href": "css3_Item/大海波涛.html" },
    { "name": "小宇宙", "href": "css3_Item/小宇宙.html" },
    { "name": "跳动的心", "href": "css3_Item/跳动的心.html" }
];
for (var i = 0; i < onwin.length; i++) {
    str += "<li class='nav-drop-item'><a href='" + onwin[i].href + "' target='_blank'>" + onwin[i].name + "</a></li>";
};
dropWraps[3].children[0].innerHTML = str;

str = "";
var yule = [
    { "name": "钟表", "href": "css3_Item/钟表.html" },
    { "name": "纸牌旋转", "href": "css3_Item/纸牌旋转.html" },
    { "name": "旋转风车", "href": "css3_Item/旋转风车.html" },
    { "name": "立方体", "href": "css3_Item/立方体.html" }
];
for (var i = 0; i < yule.length; i++) {
    str += "<li class='nav-drop-item'><a href='" + yule[i].href + "' target='_blank'>" + yule[i].name + "</a></li>";
};
dropWraps[4].children[0].innerHTML = str;

str = "";
var support = [
    { "name": "CSS3边框圆角", "href": "small_Item/CSS3边框圆角.html" },
    { "name": "css3画android", "href": "small_Item/css3画android.html" },
    { "name": "翻转的字体", "href": "small_Item/翻转的字体.html" },
    { "name": "动态进度条", "href": "small_Item/动态进度条.html" },
    { "name": "疯狂按键", "href": "small_Item/疯狂按键.html" },
    { "name": "球体", "href": "small_Item/球体.html" },
    { "name": "全屏切换", "href": "small_Item/全屏切换.html" },
    { "name": "手风琴切换菜单", "href": "small_Item/手风琴切换菜单.html" },
    { "name": "无缝滚动", "href": "small_Item/无缝滚动.html" },
    { "name": "携程", "href": "small_Item/携程.html" }
];
for (var i = 0; i < support.length; i++) {
    str += "<li class='nav-drop-item'><a href='" + support[i].href + "' target='_blank'>" + support[i].name + "</a></li>";
};
dropWraps[5].children[0].innerHTML = str;


var dropLists = getClass("nav-drop-list");

for (var i = 0, len = dropLists.length; i < len; i++) {
    dropLists[i].onmouseover = function() {
        if (this.children[1]) {
            this.children[1].style.display = "block";
        }
    };

    dropLists[i].onmouseout = function() {
        if (this.children[1]) {
            this.children[1].style.display = "none";
        }
    }
}


// 搜索按钮
var searchDatas = ["a", "abc", "abbbb", "abxxxx", "xyz", "abcdef", "abzzzz"];
//先获取页面元素
var txtSearch = getId("txtSearch");
var topSearch = getId("search-float");

//在选中txtSearch的时候，检测键盘输入
txtSearch.onkeyup = function() {
    //这个数组用于存储词库中满足条件的元素
    var resultArr = [];
    for (var i = 0; i < searchDatas.length; i++) {
        //如果是以txtSearch.value开头，就放到结果数组中
        if (searchDatas[i].indexOf(txtSearch.value) == 0) {

            //讲找到的词库内容放到resultArr中
            resultArr.push(searchDatas[i]);

        }
    }
    //得到需要的词库内容后，需要将这些显示到页面的下拉框中
    //由于没有，需要去创建下拉框

    //获取页面中的pop，看看有没有
    var pop = document.getElementById("pop");

    //如果有pop
    if (pop) {
        //删除掉旧的pop
        topSearch.removeChild(pop);
    }

    //如果用户什么也没输入，就不需要创建pop了，直接return
    if (txtSearch.value.length == 0) {
        return;
    }


    //如果没有，就让pop为一个创建的新div
    pop = document.createElement("div");
    //设置pop的id
    pop.id = "pop";
    //将pop添加到box中
    topSearch.appendChild(pop);

    //在pop中创建txtUl，在txtUl中添加txtLi，txtLi的数量由resultArr的元素数量决定
    var txtUl = document.createElement("ul");
    pop.appendChild(txtUl);

    //根据resultArr的元素数量创建txtLi
    for (var j = 0; j < resultArr.length; j++) {
        //创建txtLi
        var txtLi = document.createElement("li");
        txtLi.innerHTML = resultArr[j];
        //放到txtUl中
        txtUl.appendChild(txtLi);
    }
    var resultLists = txtUl.children;
    for (var i = 0, len = resultLists.length; i < len; i++) {
        resultLists[i].onclick = function() {
            txtSearch.value = this.innerHTML;
            topSearch.removeChild(pop);
        }
    }
};
