document.querySelector("button").addEventListener("click", function (ev) {
    ev.preventDefault();
    let texto = document.querySelector("input").value;
    document.querySelectorAll("input")[1].value = texto;
})
