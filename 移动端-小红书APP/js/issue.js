// 找到选中得按钮;

const spanarray = document.querySelectorAll("div.issuebinner  div span");
// 实现点击选择再次点击取消;
for (let i = 0; i < spanarray.length; i++) {
  spanarray[i].onclick = function () {
    // 判断是否已经被选中;
    if (spanarray[i].getAttribute("class") === "issueaction") {
      spanarray[i].classList.remove("issueaction");
    } else {
      spanarray[i].classList.add("issueaction");
    }
  };
}
