let visionArea = document.getElementsByClassName("visual-area")[0];
let information = document.getElementsByClassName("information")[0];
console.log("Нашёл");
visionArea.addEventListener(
  "mouseover",
  () => {
    information.style.transform = "translate(69px,0)";
  },
  false
);

information.addEventListener(
  "click",
  () => {
    information.style.transform = "translate(-69px,0)";
  },
  false
);

visionArea.addEventListener(
  "click",
  () => {
    information.style.transform = "translate(-69px,0)";
  },
  false
);
