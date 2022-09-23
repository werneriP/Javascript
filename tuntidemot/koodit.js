function omaFunktio() {
  alert("Painoit!");
}

var nappi1 = document.getElementById("button1");
nappi1.addEventListener("click", omaFunktio);

var nappi2 = document.getElementById("button2");
nappi2.addEventListener("click", function () {
  nappi1.removeEventListener("click", omaFunktio);
  alert("Poistettiin kuuntelija napista 1");
});
