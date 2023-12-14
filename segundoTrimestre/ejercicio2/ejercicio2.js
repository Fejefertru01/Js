document.querySelector("input").addEventListener("keyup", function () {
    document.querySelectorAll("input")[1].value = this.value;
})
