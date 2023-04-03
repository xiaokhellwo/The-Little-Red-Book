var navigaWidth = document.getElementById("naviga");
var searchboxdiv = document.querySelectorAll("div.searchbox div");
var hobby = document.querySelectorAll("div.onee :nth-of-type(3)");
var hobbysrc = document.querySelectorAll("div.onee :nth-of-type(3) img");
var hobbyNumber = document.querySelectorAll("div.onee p");
var navigationLi = document.querySelectorAll("ul#naviga li");
Hobby();
serchBoxblod();
naviGationLi();
// 点赞

function Hobby() {
  for (var i = 0; i < hobby.length; i++) {
    // 选择点赞的标签
    hobby[i].onclick = function () {
      // 找到点赞的初始图片路径
      this.querySelector("img").getAttribute("src");
      // 判断是否点赞
      if (this.querySelector("img").getAttribute("src") != "./pbl95mx15k6x9hkz-1665579310/uploads4/images/5472/54722861/1.png") {
        this.querySelector("img").src = "./pbl95mx15k6x9hkz-1665579310/uploads4/images/5472/54722861/1.png";
        // 点赞数 - 1 ;
        hobbyn = parseInt(this.parentNode.querySelector("p").innerHTML);
        this.parentNode.querySelector("p").innerHTML = hobbyn - 1;
      } else {
        // console.log(this.querySelector("img").getAttribute("src"));
        // console.log(typeof this.querySelector("img").getAttribute("src"));
        this.querySelector("img").src = "./pbl95mx15k6x9hkz-1665579310/uploads4/images/5472/54723032/2.png";
        // 点赞数 + 1 ;
        hobbyn = parseInt(this.parentNode.querySelector("p").innerHTML);
        this.parentNode.querySelector("p").innerHTML = hobbyn + 1;
      }
    };
  }
}

function serchBoxblod() {
  for (var i = 0; i < searchboxdiv.length; i++) {
    searchboxdiv[i].onclick = function () {
      for (var j = 0; j < searchboxdiv.length; j++) {
        if (this.parentNode.querySelectorAll("div")[j].getAttribute("class") == "action") {
          this.parentNode.querySelectorAll("div")[j].classList.remove("action");
        }
      }
      if (this.getAttribute("class") == null) {
        this.classList.add("action");
      } else {
        this.classList.add("action");
      }
    };
  }
}
function naviGationLi() {
  for (let i = 0; i < navigationLi.length; i++) {
    // 点击事件;
    navigationLi[i].onclick = function () {
      for (var j = 0; j < navigationLi.length; j++) {
        // 判断其他是否被选择并去掉其他得选择
        if (navigationLi[j].getAttribute("class") == "action") {
          navigationLi[j].classList.remove("action");
        }
      }
      // 选择当前
      if (this.classList.value == " ") {
        this.classList.add("action");
      } else {
        this.classList.add("action");
      }
    };
  }
}
