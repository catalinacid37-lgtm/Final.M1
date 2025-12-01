//botón con id="btnTop" 
const btnUp = document.getElementById("btnUp");
if (btnUp) {
  btnUp.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth"});
    });
}

console.log(btnUp);



