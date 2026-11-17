let shadow = document.querySelector(".shadow");
let body = document.querySelector("body");
function updateClock() {
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
if (hours < 6) {
  body.style.background =
  "linear-gradient(135deg, #111a30, #39445f, #81788f)";
  shadow.style.opacity = "0";
} else if (hours < 7) {
  body.style.background =
  "linear-gradient(135deg, #fff1d5, #eea174, #d64132)";
  shadow.style.opacity = "0.35";
} else if (hours < 18) {
  body.style.background =
  "linear-gradient(135deg, #ffffff, #8ed5e7, #079bd3)";
  shadow.style.opacity = "0.35";
} else {
  body.style.background =
  "linear-gradient(135deg, #aca5e8, #d5afd0, #efbb9b)";
  shadow.style.opacity = "0";
}
let time = hours + minutes / 60;
let length;

if (time < 12) {
  length = 18 + (12 - time) * 1;
} else {
  length = 18 + (time - 12) * 1;
}

shadow.style.width = length + "%";
let angle = hours * 15 + minutes * 0.25;

  shadow.style.transform =
    "translate(-3.3%, -50%) rotate(" + angle + "deg)";
}

updateClock();

setInterval(updateClock, 1000);