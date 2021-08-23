// btn_1 select

const button1 = document.getElementById("btn_1");
const img1 = document.getElementById("img_1");

button1.onclick = function () {
  let mySrc = img1.getAttribute("src");

  if (mySrc === "./images/icon-luxury.svg") {
    img1.setAttribute("src", "./images/icon-suvs.svg");
  } else {
    img1.setAttribute("src", "./images/icon-luxury.svg");
  }
};
