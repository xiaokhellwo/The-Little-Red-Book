var time = document.getElementById("time");


// 获取当前时间
var date = new Date();
// 获取当前小时
var houre = date.getHours();
// 获取当前分钟数;
var minutes = date.getMinutes();
time.innerHTML = "";
// 判断是否小于十 小于十十位补零;

if (houre < 10 && minutes < 10) {
  time.innerHTML = "0" + houre + ": 0" + minutes;
} else if (houre >= 10 && minutes < 10) {
  time.innerHTML = houre + ": 0" + minutes;
} else if (houre < 10 && minutes >= 10) {
  time.innerHTML = "0" + houre + ":" + minutes;
} else {
  time.innerHTML = houre + ":" + minutes;
}

