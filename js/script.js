const dia = document.querySelector("dialog");
const diashow = document.getElementById("divshow");
const diaclose = document.getElementById("divclose");
const html = document.querySelector("html");

mode = 0;

diashow.addEventListener("click", () => {
  dia.showModal();
});

diaclose.addEventListener("click", () => {
  dia.close();
});

document.getElementById("mode").addEventListener("click", () => {
  if (mode == 0) {
    html.style.filter = "invert(95%) hue-rotate(180deg)";
    mode = 1;
    document.getElementById("mode").innerHTML = "DARK MODE";
  } else {
    html.style.filter = "invert(0)";
    mode = 0;
    document.getElementById("mode").innerHTML = "LIGHT MODE";
  }
});
