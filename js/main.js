// 获取闭合信封的图片节点
let img1 = document.querySelector(".close");
//获取按钮节点
let btn = document.querySelector(".btn");
btn.style.display = "none";
//获取信件节点
let love = document.querySelector(".love");
love.style.display = "none";
// 获取h1和span文字节点
let h1 = document.querySelector("h1");
let span = document.querySelector("span");

// 获取点击音效
let clickMusic = document.querySelector(".clickMusic");
// 获取背景音乐
let bgMusic = document.querySelector(".bgMusic");
// 获取玫瑰，后面添加点击事件
let rose = document.querySelector(".rose");

let show = true;
// 添加点击事件
rose.addEventListener("click", function () {
    // 先隐藏h1和span
    h1.style.display = "none";
    span.style.display = "none";
    setTimeout(function () {
        // 播放拆信封的音效
        clickMusic.play();
        // 200毫秒后切换信封为第二张
        img1.src = "./images/2.png";
    }, 200);
    setTimeout(function () {
        // 800毫秒后切换信封为第三张
        img1.src = "./images/3.png";
        // 播放背景音乐
        bgMusic.volume = 0.25;
        bgMusic.play();
        btn.style.display = "";
    }, 800);
    setTimeout(function () {
        if(show)
        btn.click();
    }, 35000);
})

btn.addEventListener("click",function(){
    show = false;
    setTimeout(()=>{
        clickMusic.play();
        love.style.display = "none";
    },100);
    setTimeout(() => {
        love.style.display = "";
    },300);
});

