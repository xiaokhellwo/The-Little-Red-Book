var time = document.querySelector(".botright div:nth-child(3) span");
var timediv = document.querySelector(".botright div:nth-child(3)");
var minute = 29;
var seconed = 59;
setInterval(() => {
  // 十位补零
  seconed--;
  minute = minute.toString().padStart(2, "0");
  seconed = seconed.toString().padStart(2, "0");
  time.innerHTML = `${minute}:${seconed}`;
  if (time == 0) {
    timediv.innerHTML = "已超时";
  } else if (seconed == 0) {
    minute--;
    seconed = 59;
  } else if (minute == 0) {
    time = 0;
  }
}, 1000);
