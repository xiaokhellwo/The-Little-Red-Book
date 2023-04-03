var slideShow = document.querySelector("div.slideshow ul");
var slideShowSpan = document.querySelectorAll("div.slideshow div span");

var left = 0;
var count = 0;
var timer = function () {
  setInterval(function () {
    count++;
    // 轮播图
    if (count == 3) {
      count = 0;
    }
    left -= 82.8502;
    // 添加过渡动态
    slideShow.style.transition = "all .5s";
    if (left == -331.4008) {
      left = 0;
      // 最后一页关闭过渡
      slideShow.style.transition = "none";
      // 移动
      slideShow.style.marginLeft = left + "vw";
    }
    setTimeout(function () {
      for (var i = 0; i < slideShowSpan.length; i++) {
        if (slideShowSpan[i].classList.contains("shoppingaction")) {
          slideShowSpan[i].classList.remove("shoppingaction");
        }
      }
      slideShowSpan[count].classList.add("shoppingaction");
      slideShow.style.marginLeft = left + "vw";
    });
  }, 2000);
};
timer();
