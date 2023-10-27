function sumar() {
  let divi = document.querySelector("div");
  let num = parseInt(divi.innerHTML);
  num++;
  divi.innerHTML = num;
}
function restar() {
  let divi = document.querySelector("div");
  let num = parseInt(divi.innerHTML);
  num--;
  divi.innerHTML = num;
}
