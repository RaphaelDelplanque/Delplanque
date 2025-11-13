const nombreMystere = Math.floor(Math.random(100)+1)
let nombreDeChance = 10

function LancerLeJeu(){
    alert("début du jeu")
    alert("tu as " + nombreDeChance + " chance")
}

function Appel(){
    let saisiUtilisateur = document.getElementById('chiffre').value;
    let nombreUtilisateur= Number(saisiUtilisateur)
   
    if (!Number.isInteger(nombreUtilisateur)){
        alert("vous devez saisir un entier!")
        return
    }

    if (nombreDeChance <= 0) {
        zoneReponse.value = "Perdu ! Le nombre était " + nombreMystere + ".";
        alert("Vous n'avez plus de chance. Réinitialisez le jeu pour rejouer.");
        return;
    }

    let zoneReponse = document.getElementById('reponse');
    let rep = RepondreAUtilisateur(nombreUtilisateur)
    zoneReponse.value = rep

    if (rep !== "Trouvé") {
        nombreDeChance--; 
        alert("Il te reste " + nombreDeChance + " chance!"); 
        
        if (nombreDeChance === 0) {
             zoneReponse.value = "Dernier essai manqué. C'est Perdu !";
        }

    } else {
        alert("Bravo, vous avez trouvé !");
    }
}

function RepondreAUtilisateur(nbr){
    let rep
    if(nbr == nombreMystere){
        rep = "Trouvé"
    }else if(nbr > nombreMystere){
        rep = "plus petit"
    }else{
        rep = "plus grand"
    }
    return rep
}