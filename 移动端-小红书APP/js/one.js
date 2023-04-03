var oneSpan = document.querySelectorAll("div.start div.but span");
var oneImg = document.querySelector("div.start div.startimg img:nth-of-type(1)");
var marginLeft = -155;
console.log(oneImg);
var spanaction = function () {
  for (var i = 0; i < oneSpan.length; i++) {
    // 让i保留值
    (function (i) {
      oneSpan[i].onclick = function () {
        for (var j = 0; j < oneSpan.length; j++) {
          // 判断有没有类名;
          if (oneSpan[j].classList.contains("oneaction")) {
            // 删除类名
            oneSpan[j].classList.remove("oneaction");
          }
        }
        // 点击则右移实现图片切换、
        oneImg.style.marginLeft = marginLeft * i + "px";
        // 添加类名
        this.classList.add("oneaction");
      };
    })(i);
  }
};

spanaction();
