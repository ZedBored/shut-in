const dia = document.querySelector("dialog");
const diashow = document.getElementById("divshow");
const diaclose = document.getElementById("divclose");

diashow.addEventListener("click", () => {
  dia.showModal();
});

diaclose.addEventListener("click", () => {
  dia.close();
});
