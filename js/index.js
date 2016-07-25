// 登录弹窗  begin
var login = getId("login");
login.onclick = function() {
        loginShow();
    }
    //     //点击close关闭登陆模态框将登录框中内容重置为默认值并显示滚动条
getId("login-close").onclick = function() {
    getId("pop-ups").style.display = "none";
};
//显示模态框函数
function loginShow() {
    getId("pop-ups").style.display = "block";
};

// 登录弹窗end
// 购物车弹窗
var searchCar = getClass("search-car");
searchCar[0].onclick = function() {

    getId("shopping").style.display = "block"
};

getId("shopping-close").onclick = function() {
    getId("shopping").style.display = "none";
};

getId("shopping-pay").onclick = function() {
    getId("shopping").style.display = "none";
};
// 购物车弹窗 end


// 头部幻灯片开始
//获取页面元素
var carousel = document.getElementById("carousel");
var carouselScreen = carousel.children[1];
var carouselUl = carouselScreen.children[0];
var carouselOl = carouselScreen.children[1];
var carouselArrLeft = carousel.children[0];
var carouselArrRight = carousel.children[2];
//获取carouselUl中的所有图片
var carouselLisUl = carouselUl.children;
//获取carouselScreen的宽度，这个宽度等于图片宽
var carouselImgWidth = carouselScreen.offsetWidth;
//设置定时器
var carouselTimer = null;

//--------------------------点击按钮变色和移动carouselUl效果-------------------
//根据图片数量创建下面的小圆点
for (var i = 0; i < carouselLisUl.length; i++) {
    var newLi = document.createElement("li");
    carouselOl.appendChild(newLi);
    //设置newLi的文本

}
//设置第一个按钮默认选中效果
var carouselLisOl = carouselOl.children;
carouselLisOl[0].className = "current";

//给小方块设置点击按钮变色
for (var i = 0; i < carouselLisOl.length; i++) {
    //给每个按钮设置自定义属性，记录索引值
    carouselLisOl[i].index = i + 1;

    //给每个小方块设置点击事件
    carouselLisOl[i].onmouseover = function() {
        //排他，清除所有人的类名，设置自己
        for (var j = 0; j < carouselLisOl.length; j++) {
            carouselLisOl[j].className = "";
        }
        this.className = "current";
        //让carouselUl运动
        var carouselTarget = -this.index * (carouselImgWidth + 10);
        animate(carouselUl, { "left": carouselTarget });

        //每一次点击小方块的时候，不仅要做上面的事情，还需要同步pic的值
        pic = this.index;
    };
}

//克隆前三张图片，放到后面，当作假的前3张
var weiFirstPic = carouselLisUl[0].cloneNode(true);
var weiSecondPic = carouselLisUl[1].cloneNode(true);
var weiThreePic = carouselLisUl[2].cloneNode(true);

carouselUl.appendChild(weiFirstPic);
carouselUl.appendChild(weiSecondPic);
carouselUl.appendChild(weiThreePic);
var liCount = carouselLisUl.length;
var threeWrapFlag = true;


//----------------------------左右按钮点击-----------------w
var aWidth = carouselScreen.offsetLeft;
carouselArrLeft.style.width = aWidth + "px";
carouselArrRight.style.width = aWidth + "px";


//点击左右按钮效果
//创建一个变量去管理 滚过的图片数量
var pic = 1;
carouselArrRight.onclick = play;

//点击左按钮
carouselArrLeft.onclick = function() {
    if (threeWrapFlag) {
        threeWrapFlag = false;
        //如果pic已经是1，就不能再向左滚动了，需要调到后面
        if (pic == 1) {
            pic = liCount - 2;
            carouselUl.style.left = -(carouselImgWidth + 10) * pic + "px";
        }
        pic--;

        //让carouselUl滚动到指定位置
        var carouselTarget = -pic * (carouselImgWidth + 10);
        animate(carouselUl, { "left": carouselTarget }, function() {
            threeWrapFlag = true;
        });

        //先清除所有carouselOl中li的类名，然后设置自己
        for (var i = 0; i < carouselLisOl.length; i++) {
            carouselLisOl[i].className = "";
        }
        carouselLisOl[pic - 1].className = "current";

    }
};

//-----------------------自动播放部分-----------------------
//设置自动播放
carouselTimer = setInterval(play, 2000);

//鼠标移入移出盒子。显示隐藏左右箭头
carouselScreen.onmouseover = function() {
    // arr.style.display = "block";
    //让自动播放停止
    clearInterval(carouselTimer);
};
carouselScreen.onmouseout = function() {
    // arr.style.display = "none";
    //设置新的自动播放,一定将定时器给到carouselTimer身上，不然无法清除
    carouselTimer = setInterval(play, 2000);
};


function play() {
    if (threeWrapFlag) {
        threeWrapFlag = false;

        //当调用的时候，发现pic已经是liCount - 2了，这会儿需要进行抽回
        if (pic == liCount - 2) {
            pic = 1;
            carouselUl.style.left = -(carouselImgWidth + 10) * pic + "px";
        }
        pic++;

        //让carouselUl滚动到指定位置
        var carouselTarget = -pic * (carouselImgWidth + 10);
        animate(carouselUl, { "left": carouselTarget }, function() {
            threeWrapFlag = true;
        });


        //在设置点亮之前进行排他
        for (var i = 0; i < carouselLisOl.length; i++) {
            carouselLisOl[i].className = "";
        }
        //如果当前滚到的是假的第一张，需要让carouselLisOl中的第一个按钮点亮
        if (pic == carouselLisOl.length + 1) {
            carouselLisOl[0].className = "current";
        } else {
            carouselLisOl[pic - 1].className = "current";
        }
    }

}

// 头部幻灯片结束


// 灵感渲染  begin

var applys = getClass("xrBg");

for (var i = 0, len = applys.length; i < len; i++) {
    applys[i].index = i;
    applys[i].parentNode.onmouseover = function() {
        animate(this.children[1], { "opacity": "0.5" });
        animate(this.children[2], { "left": "0" });
    };
    applys[i].parentNode.onmouseout = function() {
        animate(this.children[1], { "opacity": "0" });
        animate(this.children[2], { "left": "260" }, function(obj) {
            obj.style.left = "-260px";
        });
    };
}

// 侧边轮播图
// 克隆前5张图片
var fastMains = getClass("fastMain");
var fastUl = fastMains[0].children[0];
var fastUlLis = fastUl.children;
var fastNext = getClass("nextNow");
var fastPrev = getClass("prevNow");
var fastTimer = null;
var fastCount = 5;
var fastFlag = true;
var fastTop = fastUlLis[0].offsetHeight * fastCount;

var fastWei1 = fastUlLis[0].cloneNode(true);
var fastWei2 = fastUlLis[1].cloneNode(true);
var fastWei3 = fastUlLis[2].cloneNode(true);
var fastWei4 = fastUlLis[3].cloneNode(true);
var fastWei5 = fastUlLis[4].cloneNode(true);

fastUl.appendChild(fastWei1);
fastUl.appendChild(fastWei2);
fastUl.appendChild(fastWei3);
fastUl.appendChild(fastWei4);
fastUl.appendChild(fastWei5);

var fastIndex = 0;
var fastIndexCount = fastUlLis.length / fastCount;

fastPrev[0].onclick = function() {
    if (fastFlag) {
        fastFlag = false;
        if (fastIndex == 0) {
            fastIndex = fastIndexCount - 1;
            fastUl.style.top = -fastIndex * fastTop + "px";
        }
        fastIndex--;
        var target = -fastIndex * fastTop;
        animate(fastUl, { "top": target }, function() {
            fastFlag = true;
        });
    }

};


fastNext[0].onclick = function() {
    if (fastFlag) {
        fastFlag = false;
        if (fastIndex == fastIndexCount - 1) {
            fastIndex = 0;
            fastUl.style.top = "0px";
        }
        fastIndex++;
        var target = -fastTop * fastIndex;
        animate(fastUl, { "top": target }, function() {
            fastFlag = true;
        });
    }
};

fastTimer = setInterval(function() {
    fastNext[0].onclick();
}, 3000);

fastMains[0].onmouseover = function() {
    clearInterval(fastTimer);
};

fastMains[0].onmouseout = function() {
    fastTimer = setInterval(function() {
        fastNext[0].onclick();
    }, 3000);
};

// 底部盒子
var firstItems = getClass("first-top-part");

for (var i = 0, len = firstItems.length; i < len; i++) {
    firstItems[i].onmouseover = function() {
        animate(this.children[0], { "top": "0" });
        animate(this.children[3], { "height": "218"});
        animate(this.children[1], { "opacity": "0" });
        animate(this.children[2], { "opacity": "0" });
    };
    firstItems[i].onmouseout = function() {
        animate(this.children[0], { "top": "-219" });
        animate(this.children[3], { "height": "0"});
        animate(this.children[1], { "opacity": "1" });
        animate(this.children[2], { "opacity": "1" });
    };
}


// 灵感渲染   end
// 旋转木马
var config = [

    {
        width: 400,
        top: 70,
        left: 0,
        opacity: 0.8,
        zIndex: 3
    }, //1
    {
        width: 600,
        top: 100,
        left: 200,
        opacity: 1,
        zIndex: 4
    }, //2
    {
        width: 400,
        top: 70,
        left: 600,
        opacity: 0.8,
        zIndex: 3
    }, //3
    {
        width: 300,
        top: 20,
        left: 750,
        opacity: 0.2,
        zIndex: 2
    }, //4
    {
        width: 300,
        top: 20,
        left: 50,
        opacity: 0.2,
        zIndex: 2
    } //0
]; //一个配置单 规定了每张图片的大小位置层级透明度

//获取页面元素
var commodityWrap = document.getElementById("commodity-wrap");
var commoditySlide = commodityWrap.children[0];
var commodityUl = commoditySlide.children[0];
var commodityLis = commodityUl.children;
var commodityArrow = document.getElementById("commodity-three-arrow");
var threeArrLeft = commodityArrow.children[0];
var threeArrRight = commodityArrow.children[1];
var commodityIntroduce = getClass("commodity-introduce");
var introduceUl = commodityIntroduce[0].children;
var introduceLis = introduceUl[0].children;
var introduce = 0;

//让每一个li根据配置单走到指定位置
for (var i = 0; i < commodityLis.length; i++) {
    animate(commodityLis[i], config[i]);
}

//设置箭头的显示和隐藏
commodityWrap.onmouseover = function() {
    //让透明度渐变为1
    animate(commodityArrow, { "opacity": "1" });
};
commodityWrap.onmouseout = function() {
    //让透明度渐变为0
    animate(commodityArrow, { "opacity": "0" });
};

//设置一个变量去控制当前是否可以播放下一张
var commodityFlag = true;


//点击右按钮
threeArrRight.onclick = function() {
    //点击的时候先判断flag的状态，为true才执行
    if (commodityFlag) {
        //先将commodityFlag设置为false
        commodityFlag = false;
        //更改配置单，让所有的图片根据更改后的配置单运动到新的位置
        //将配置单的第一个元素添加到最后面
        config.push(config.shift());
        //按照新的配置单运动
        for (var i = 0; i < commodityLis.length; i++) {
            animate(commodityLis[i], config[i], function() {
                //这个函数内的代码如果执行说明运动完毕
                commodityFlag = true;
            });
        }
    }

    for (var j = 0, len = introduceLis.length; j < len; j++) {
        introduceLis[j].className = "";
    }
    introduce++;
    if (introduce == introduceLis.length) {
        introduce = 0;
    }
    introduceLis[introduce].className = "commodity-show";

};
threeArrLeft.onclick = function() {
    if (commodityFlag) {
        commodityFlag = false;
        //将config中的最后一个元素添加到第一个位置
        config.unshift(config.pop());
        for (var i = 0; i < commodityLis.length; i++) {
            animate(commodityLis[i], config[i], function() {
                commodityFlag = true;
            });
        }
    }
    for (var j = 0, len = introduceLis.length; j < len; j++) {
        introduceLis[j].className = "";
    }
    if (introduce == 0) {
        introduce = introduceLis.length;
    }
    introduce--;
    introduceLis[introduce].className = "commodity-show";

};


// 留言板
//用来记录当前层级到多少了
var zInd = 0;
var messageCount = 0;

function createEle(tag) {
    return document.createElement(tag);
}

//获取存在的纸条
// 获取元素
var messageTxt = getId("message-txt");
var messageBtn = getId("message-btn");
//获取存放纸条的大盒子
var messageContent = getId("message-content");

messageBtn.onclick = function() {
    if (messageTxt.value == "") {
        alert("您什么也没有写~");
    } else {
        messageCount++;
        // 获取当前时间
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var dates = date.getDate();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        var x = Math.random() * 600;
        var y = Math.random() * 170;


        // 创建许愿纸条
        var tip = createEle("div");

        tip.style.left = x + "px";
        tip.style.top = y + "px";
        tip.setAttribute("class", "tip");
        tip.setAttribute("id", "tip" + messageCount);
        // 纸条头部
        var tip_h = createEle("div");
        tip_h.setAttribute("id", "tip_h" + messageCount);
        tip_h.setAttribute("class", "tip_h");
        tip_h.title = "双击关闭纸条";
        var num = createEle("div");

        num.setAttribute("class", "num");
        num.innerHTML = "第[" + messageCount + "]条" + " " + year + "-" + month + "-" + dates + " " + hours + ":" + minutes + ":" + seconds;
        var close = createEle("div");

        close.setAttribute("class", "close");
        close.title = "关闭纸条";
        close.innerHTML = "×";
        tip_h.appendChild(num);
        tip_h.appendChild(close);
        tip.appendChild(tip_h);
        // 许愿内容
        var tip_c = createEle("div");

        tip_c.setAttribute("class", "tip_c");
        tip_c.innerHTML = messageTxt.value;
        tip.appendChild(tip_c);
        // 纸条尾部
        var tip_f = createEle("div");

        tip_f.setAttribute("class", "tip_f");
        var icon = createEle("div");

        icon.setAttribute("class", "icon");
        var messageImg = createEle("img");
        messageImg.src = "images/bpic_1.gif";
        var messageName = createEle("div");
        messageName.setAttribute("class", "messageName");
        messageName.innerHTML = "无名氏"
        icon.appendChild(messageImg);
        tip_f.appendChild(icon);
        tip_f.appendChild(messageName);;
        tip.appendChild(tip_f);

        messageContent.appendChild(tip);
        // 清空许愿板中的内容
        messageTxt.value = "";


        // 点击纸条显示在最上层
        tip.onclick = function() {
            zInd++;
            //将zInd设置给newNode
            this.style.zIndex = zInd;

        };

        //双击纸条的头部或者单击叉号，关闭当前纸条
        tip_h.ondblclick = function() {
            //设置当前纸条的隐藏
            this.parentNode.style.display = "none";
        };
        close.onclick = function() {
            //设置当前纸条的隐藏
            this.parentNode.parentNode.style.display = "none";
        };

        // 设置许愿条可拖拽
        var drag = getId("tip_h" + messageCount);
        var dialog = getId("tip" + messageCount);

        drag.onmousedown = function(e) {
            var x = e.clientX - dialog.offsetLeft;
            var y = e.clientY - dialog.offsetTop;

            document.onmousemove = function(e) {
                var currentX = e.clientX - x;
                var currentY = e.clientY - y;

                currentX = currentX < 0 ? 0 : currentX;
                currentX = currentX > 740 ? 740 : currentX;
                currentY = currentY < 0 ? 0 : currentY;
                currentY = currentY > 188 ? 188 : currentY;

                dialog.style.top = currentY + "px";
                dialog.style.left = currentX + "px";
            };
        };

        document.onmouseup = function() {
            document.onmousemove = null;
        };
    }
};



//-------------------------1 创建表格数据-----------------------------
//表头的数据
var heads = ["商品", "数目", "单价", "操作"];
var datas = [
    { "commodity": "吹风机", "number": "1", "price": 30 },
    { "commodity": "电视机", "number": "1", "price": 1200 },
    { "commodity": "空调", "number": "2", "price": 500 },
    { "commodity": "电扇", "number": "2", "price": 40 },
    { "commodity": "奶粉", "number": "2", "price": 260 },
    { "commodity": "纸尿布", "number": "3", "price": 170 },
    { "commodity": "棒棒糖", "number": "3", "price": 0.5 }
];
var shoppingNum = 0;
var shoppingTotal = 0;
var shoppingBox = document.getElementById("shopping-box");

var table = document.createElement("table");
table.border = "1px";
table.style.width = "600px";
table.style.borderCollapse = "collapse";

shoppingBox.appendChild(table);

//thead部分
var thead = document.createElement("thead");
thead.style.backgroundColor = "#ccc";
table.appendChild(thead);

for (var i = 0; i < heads.length; i++) {
    var th = document.createElement("th");
    th.innerHTML = heads[i];
    thead.appendChild(th);
}

var tbody = document.createElement("tbody");
tbody.style.textAlign = "center";
table.appendChild(tbody);

//创建行
for (var j = 0; j < datas.length; j++) {
    var tr = document.createElement("tr");
    tbody.appendChild(tr);

    //datas中的每一项都是对象，对象中有多少个属性，就创建多少个td
    for (var key in datas[j]) {
        //datas[j][key]
        var td = document.createElement("td");
        td.innerHTML = datas[j][key];
        tr.appendChild(td);
    }
    // 计算商品总数和总价
    shoppingNum += parseFloat(tr.children[1].innerHTML);
    shoppingTotal += parseFloat(tr.children[2].innerHTML);
    //创建每行中最后一个删除标签
    var td = document.createElement("td");
    var link = document.createElement("a");
    link.href = "javascript:void(0)";
    link.innerHTML = "删除";
    td.appendChild(link);

    tr.appendChild(td);

    //给link添加删除的事件
    link.onclick = shoppingDelete;
}

var shoppingAll = getId("shopping-total");
shoppingAll.innerHTML = "商品总数为：<span>" + shoppingNum + "</span>&nbsp;&nbsp;商品总价为：<span>" + shoppingTotal + "</span>元";
//添加按钮
var shoppingAdd = document.getElementById("shopping-add");
shoppingAdd.onclick = function() {
    var tr = document.createElement("tr");
    tbody.appendChild(tr);
    for (var i = 0; i < 3; i++) {
        var td = document.createElement("td");
        td.innerHTML = "<input type='text' style='width:60px'>";
        tr.appendChild(td);
    }
    var td = document.createElement("td");
    td.innerHTML = "<a href='javascript:void(0)'>确定</a>&nbsp;<a href='javascript:void(0)'>取消</a>";

    tr.appendChild(td);

    var cancel = td.lastElementChild;
    cancel.onclick = function() {
        tbody.removeChild(this.parentNode.parentNode);
    };

    var yes = td.firstElementChild;
    yes.onclick = function() {
        var name = tr.children[0].children[0].value;
        var subject = tr.children[1].children[0].value;
        var score = tr.children[2].children[0].value;

        datas.push({ "name": name, "subject": subject, "score": score });

        tr.children[0].innerHTML = name;
        tr.children[1].innerHTML = subject;
        tr.children[2].innerHTML = score;

        shoppingNum += parseFloat(subject);
        shoppingTotal += parseFloat(score);
        shoppingAll.innerHTML = "商品总数为：<span>" + shoppingNum + "</span>&nbsp;&nbsp;商品总价为：<span>" + shoppingTotal + "</span>元";

        var link = document.createElement("a");
        tr.children[3].innerHTML = link;
        link.href = "javascript:void(0)";
        link.innerHTML = "删除";
        td.appendChild(link);

        tr.appendChild(td);

        //给link添加删除的事件
        link.onclick = shoppingDelete;
    };
};

function shoppingDelete() {
    //先看一下我这个tr在所有tr中的位置
    var trs = shoppingBox.getElementsByTagName("tr");
    var index;
    for (var i = 0; i < trs.length; i++) {
        if (this.parentNode.parentNode == trs[i]) {
            index = i;
        }
    }
    shoppingNum -= parseFloat(trs[index].children[1].innerHTML);
    shoppingTotal -= parseFloat(trs[index].children[2].innerHTML);
    shoppingAll.innerHTML = "商品总数为：<span>" + shoppingNum + "</span>&nbsp;&nbsp;商品总价为：<span>" + shoppingTotal + "</span>元";
    datas.splice(index, 1);
    //表格的删除必须在数据删除之后
    tbody.removeChild(this.parentNode.parentNode);
};


// 窗口滚动
var searchFloat = getId("search-float");
var searchTxt = getId("txtSearch");
var searchImgs = getClass("search-float-img")
var winScr;

window.onscroll = function() {
    winScr = scroll().scrollTop;
    if (winScr > 50) {
        searchFloat.className = "search-fixed";
        searchImgs[0].style.display = "block";
        txtSearch.style.display = "none";
        searchImgs[0].onmouseover = function() {
            txtSearch.style.display = "block";
        };
        txtSearch.onmouseout = function() {
            txtSearch.style.display = "none";
            var pop = getId("pop");
            if (pop) {
                searchFloat.removeChild(pop);
            }
        };
    } else {
        txtSearch.onmouseout = function() {};
        searchFloat.className = "";
        searchImgs[0].style.display = "none";
        txtSearch.style.display = "inline-block";
    }
};

// 旋转球
//ball是内层球的集合，其中position和innerText没用到
var ball = [{
    "backgroundColor": "#cb76f0",
    "r": 100,
    "position": [180, 75],
    "innerText": "iphone4",
    "borderColor": "#EFE4FA"
}, {
    "backgroundColor": "#FB828B",
    "r": 100,
    "position": [-30, 75],
    "innerText": "iphone5",
    "borderColor": "#FDEBEC"
}, {
    "backgroundColor": "#97CDEB",
    "r": 100,
    "position": [75, 180],
    "innerText": "iphone4s",
    "borderColor": "#E8F1F8"
}, {
    "backgroundColor": "#FF7F27",
    "r": 100,
    "position": [75, -30],
    "innerText": "iphone5",
    "borderColor": "#E8F2F0"
}];
//ball2是外层球的集合，其中position和innerText没用到
var ball2 = [{
    "backgroundColor": "#22B12F",
    "r": 100,
    "position": [180, 75],
    "backgroundImage": " project_2.jpg",
    "innerText": "iphone5s",
    "borderColor": "#D5E3F2"
}, {
    "backgroundColor": "#FFFFFF",
    "r": 100,
    "position": [-30, 75],
    "innerText": "iphone6",
    "borderColor": "#DDEAF9"
}, {
    "backgroundColor": "#7F7F7F",
    "backgroundImage": 'url(project_2.jpg)',
    "r": 100,
    "position": [75, 180],
    "innerText": "iphone6s",
    "borderColor": "#EDE0EC"
}, {
    "backgroundColor": "#FFE400",
    "r": 100,
    "position": [75, -30],
    "innerText": "iphone7",
    "borderColor": "#F8E6ED"
}];
var bang = getId("bang");
var circle1 = getId("circle1");
var circle3 = getId("circle3");
bang.onmouseover = function() {
    step1 = 3;
    step2 = -3;
};
bang.onmouseout = function() {
    step1 = 10;
    step2 = -15;
};
var step1 = 10;
var step2 = -15;


//调用创建球函数--------提高：动态创建
createBall(ball, circle1, true);
createBall(ball2, circle3, false);
//createBall(ball3,$("#circle2"),true)
//创建球函数----参数：球集合，圆圈（用到半径），步子
function createBall(ball, circle, flag) {
    //                var a=document.createElement("div")
    var r = parseFloat(getStyle(circle, "width")) / 2;

    var balls = circle.children;

    for (var i = 0; i < ball.length; i++) {
        balls[i].style.backgroundColor = ball[i]["backgroundColor"];
        balls[i].innerText = ball[i]["innerText"];
        balls[i].style.width = ball[i]["r"] + "px";
        balls[i].style.height = ball[i]["r"] + "px";
        balls[i].style.border = 10 + "px";
        balls[i].style.borderStyle = "solid";
        balls[i].style.borderColor = ball[i]["borderColor"];
        balls[i].style.borderRadius = ball[i]["r"] + "px";
        balls[i].style.position = "absolute"
        balls[i].style.lineHeight = ball[i]["r"] + "px";
        balls[i].style.textAlign = "center";
        balls[i].style.opacity = "0.4";


        var v = i * 570;
        var flag = flag;
        //                    让球动起来

        moveBall(balls[i], r, flag, v, ball[i]);


        balls[i].onmouseover = function() {
            animate(this, { "width": "120", "height": "120", "opacity": "1" });
        };
        balls[i].onmouseout = function() {
            animate(this, { "width": "100", "height": "100", "opacity": "0.4", "zIndex": "1" });
        };
    }
}
//            移动球
function moveBall(balls, r, flag, v, ball) {

    var v = v;
    balls.timeId = setInterval(function() {

        if (flag) {
            var step = step1
        } else {
            var step = step2
        }
        v += step;
        //                    x等于x轴，left值
        //                    y等于Y轴，top值
        var x = r - 10 - ball["r"] / 2 - Math.cos(v / 360) * r;
        var y = r - 10 - ball["r"] / 2 - Math.sin(v / 360) * r;

        balls.style.top = y + "px";
        balls.style.left = x + "px";


    }, 30);
}



// 产品展示
var productDisplay = getClass("product-display")
var produceBoxes = productDisplay[0].children;
var produceFlag = true;
var index = 0;
//      为每个produceBox注册事件
for (var i = 0; i < produceBoxes.length; i++) {
    var produceBox = produceBoxes[i];
  
    produceBox.onmouseover = function() {
        if(produceFlag){
            produceFlag = false;
        index = parseInt(18 * Math.random()); 
        this.innerHTML = "<img src='images/product"+index+".png'>";
        }
    };
    produceBox.onmouseout = function (){
        produceFlag = true;
    }
}
