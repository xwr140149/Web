


// 封装函数
function getId(id){
    return document.getElementById(id);
}

function getClass(cls) {
        //检测当前浏览器是否支持getElementsByClassName
        if (typeof document.getElementsByClassName == "function") {
            return document.getElementsByClassName(cls);
        } else {
            //首先获取页面中的所有标签
            var tags = document.getElementsByTagName("*");
            //console.log(tags);
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

function createEle(tar){
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
setTimeout(function(){
    animate(g_l,{"left":"-750"});
    animate(g_r,{"right":"-750"});
},1000);

setTimeout(function (){
    document.body.style.backgroundColor="#fff";
    var bigContainer = getId("bigcontainer");
    var gears = getId("gears");
    bigContainer.style.overflow="visible";
    // bigContainer.style.height="0px";
    gears.style.display="none";
},2000);




// 运动函数 animate
function animate(obj, json, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;//true表示可以清理
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
                flag = false;//告诉标记 我这个值还没达到不要清理
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

function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}



// 顶部导航栏 top-list
 var subLists = getClass("drop-sub-list");
 var students=[
        {"name":"面向学生的 Office"},
        {"name":"教室中的 OneNote"},
        {"name":"Microsoft 教育"}
    ];
    var str="";
    for (var i= 0;i<students.length;i++){
       str += "<li class='drop-sub-content'>"+students[i].name+"</li>";
    };
        subLists[0].innerHTML=str;

 var s_support=[
        {"name":"Windows"},
        {"name":"Office"},
        {"name":"免费下载与安全性"},
        {"name":"Internet Explorer"},
        {"name":"Microsoft Edge"},
        {"name":"Skype"},
        {"name":"OneNote"},
        {"name":"OneDrive"},
        {"name":"MSN"},
        {"name":"必应"}
    ];
    str="";
    for (var i= 0;i<s_support.length;i++){
       str += "<li class='drop-sub-content'>"+s_support[i].name+"</li>";
    };
   
        subLists[1].innerHTML=str;

    var device_xbox=[
        {"name":"Microsoft Surface"},
        {"name":"所有 Windows 台式机和平板电脑"},
        {"name":"PC 配件"},
        {"name":"Xbox 与游戏"},
        {"name":"Microsoft Lumia"},
    ];

    str="";
    for (var i= 0;i<device_xbox.length;i++){
       str += "<li class='drop-sub-content'>"+device_xbox[i].name+"</li>";
    };
        subLists[2].innerHTML=str;
        
   
    var busniss=[
        {"name":"云平台"},
        {"name":"Microsoft Azure"},
        {"name":"Microsoft Dynamics"},
        {"name":"商用 Windows"},
        {"name":"面向企业的 Office"},
        {"name":"Skype for Business"},
        {"name":"商业适用的 Surface"},
        {"name":"企业解决方案"},
        {"name":"小型企业解决方案"},
        {"name":"查找解决方案提供商"},
        {"name":"批量许可"}
    ];
   
    str="";
    for (var i= 0;i<busniss.length;i++){
       str += "<li class='drop-sub-content'>"+busniss[i].name+"</li>";
    };
        subLists[3].innerHTML=str;
       

    var develper=[
        {"name":"开发 Windows 应用"},
        {"name":"Microsoft Azure"},
        {"name":"MSDN"},
        {"name":"Technet"},
        {"name":"Visual Studio"}
    ];
   
   str="";
    for (var i= 0;i<develper.length;i++){
       str += "<li class='drop-sub-content'>"+develper[i].name+"</li>";
    };
        subLists[4].innerHTML=str;

var listItems=getClass("top-list-item");
var listInners=getClass("drop-list-inner");

for (var i=0,len=listItems.length;i<len;i++){

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

    listItems[i].onmouseover=function(){
        if (this.children[1]){
        this.children[1].style.display="block";
        this.children[1].style.zIndex="2";
        this.style.backgroundColor = "#f2f2f2";

        }
    };
     listItems[i].onmouseout=function(){
        if (this.children[1]){
        this.children[1].style.display="none";
        this.style.backgroundColor = "#fff";
        }
    };
};  

for (var i=0,len=listInners.length;i<len;i++){
    listInners[i].onmouseover = function (){
        if(this.children[1]){
            this.children[1].style.display="block";
        }
    };
     listInners[i].onmouseout = function (){
        if(this.children[1]){
            this.children[1].style.display="none";
        }
    };
}


// nav导航栏

var dropWraps=getClass("nav-drop-wrap");
str="";
var dataone =[
        {"name":"深入了解Xbox One"},
        {"name":"主机"},
        {"name":"配件"},
        {"name":"购买"},
        {"name":"Xbox One实用技巧"},
        {"name":"致客户通知"},
    ];
    for (var i= 0;i<dataone.length;i++){
       str += "<li class='nav-drop-item'>"+dataone[i].name+"</li>";
    };
    dropWraps[0].children[0].innerHTML = str;

    str = "";
    var live =[
        {"name":"关于Xbox Live会员"}
    ];
    for (var i= 0;i<live.length;i++){
       str += "<li class='nav-drop-item'>"+live[i].name+"</li>";
    };
    dropWraps[1].children[0].innerHTML = str;

    str = "";
    var onwin =[
        {"name":"在Windows 10上游戏"},
        {"name":"Windows 10里的Xbox应用"},
        {"name":"Windows 10游戏"},
        {"name":"Windows 10配件"}
    ];
     for (var i= 0;i<onwin.length;i++){
       str += "<li class='nav-drop-item'>"+onwin[i].name+"</li>";
    };
    dropWraps[3].children[0].innerHTML = str;

    str = "";
    var yule =[
        {"name":"娱乐"},
        {"name":"百视通"},
        {"name":"Xbox Fitness"},
        {"name":"Xbox One Apps"}
    ];
    for (var i= 0;i<yule.length;i++){
       str += "<li class='nav-drop-item'>"+yule[i].name+"</li>";
    };
    dropWraps[4].children[0].innerHTML = str;

    str = "";
    var support =[
        {"name":"所有支持"},
        {"name":"Xbox One"},
        {"name":"基于 Windows 10 的 Xbox"},
        {"name":"游戏"},
        {"name":"帐单"},
        {"name":"我的帐户"},
        {"name":"其他设备上的 Xbox"},
        {"name":"Xbox 论坛"},
        {"name":"错误和状态代码搜索"},
        {"name":"Xbox Live 状态"}
    ];
   for (var i= 0;i<support.length;i++){
       str += "<li class='nav-drop-item'>"+support[i].name+"</li>";
    };
    dropWraps[5].children[0].innerHTML = str;

      
var dropLists=getClass("nav-drop-list");

for (var i=0,len=dropLists.length;i<len;i++){
    dropLists[i].onmouseover=function (){
    if (this.children[1]){
        this.children[1].style.display="block";
        }
    };

    dropLists[i].onmouseout = function (){
        if (this.children[1]){
            this.children[1].style.display = "none";
        }
    }
}


// 搜索按钮
 var searchDatas = ["a", "abc", "abbbb", "abxxxx", "xyz", "abcdef", "abzzzz"];
    //先获取页面元素
    var txtSearch = document.getElementById("txtSearch");
    var topSearch = getId("search-float");

    //在选中txtSearch的时候，检测键盘输入
    txtSearch.onkeyup = function () {
        console.log(searchDatas);
        //找到词库中我想要的：以我输入的内容开头的元素
        //这个数组用于存储词库中满足条件的元素
        var resultArr = [];
        for (var i = 0; i < searchDatas.length; i++) {
            //如果是以txtSearch.value开头，就放到结果数组中
            if (searchDatas[i].indexOf(txtSearch.value) == 0) {
                //console.log(searchDatas[i]);
                //讲找到的词库内容放到resultArr中
                resultArr.push(searchDatas[i]);
                console.log(txtSearch.value+"---------"+resultArr);
            }
        }
        //得到需要的词库内容后，需要将这些显示到页面的下拉框中
        //由于没有，需要去创建下拉框

        //获取页面中的pop，看看有没有
        var pop = document.getElementById("pop");

        //如果有pop，获取结果是一个标签，也就是一个对象，对象转换为bool为true
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
var resultLists=txtUl.children;
        for (var i=0,len=resultLists.length; i<len;i++){
            resultLists[i].onclick = function (){
                txtSearch.value = this.innerHTML;
                topSearch.removeChild(pop);
            }
        }
    };



