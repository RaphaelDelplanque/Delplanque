var texteRouge = true
function ChangerLaCouleur(){
    var texteAChanger = document.getElementById("paraAChanger")
    if(texteRouge){
        texteAChanger.style.color = "pink";
        texteRouge = false
    }else{
        texteAChanger.style.color = "red";
        texteRouge = true
    } 
}

function augmenterLeCompteur(){
    var texteCompteur = document.getElementById("compteur")
    var valeurCompteur = texteCompteur.value
    var valeur = Number(valeurCompteur)
    valeur = valeur + 1
    texteCompteur.innerText = valeur
}
function baisseLeCompteur(){
    var texteCompteur = document.getElementById("compteur")
    var valeurCompteur = texteCompteur.value
    var valeur = Number(valeurCompteur)
    if (valeur <= 0){
        alert("je ne peux descendre en dessous de zéro")
    }else{
        valeur = valeur - 1
        texteCompteur.innerText = valeur
    }
}

function afficherDate(){
    let texteDateHeure = document.getElementById("dateHeure")

    let maintenant = new Date()
    let texteDate = String(maintenant.getDate()).padStart(2, '0') + '/' +
        String(maintenant.getMonth()).padStart(2, '0') + '/' + maintenant.getFullYear()
    let texteHeure = String(maintenant.getHours()).padStart(2, '0') + ':' +
         String(maintenant.getMinutes()).padStart(2, '0')

    texteDateHeure.value = texteDate + ' \n ' + texteHeure

}