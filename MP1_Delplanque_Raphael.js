var monTexte = " Et on travaille!"
var elementRecuperer = document.getElementById("chaine")
var chaineRecuperer = elementRecuperer.innerText
var fusion = monTexte + chaineRecuperer
var zoneFusion = document.getElementById("chaineFusion")
zoneFusion.value = fusion
//elementRecuperer.innerText = fusion
