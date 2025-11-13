/*
Créez une fonction calculatrice de pourboire qui doit prendre en premier paramètre le 
montant de la commande et en second paramètre le pourcentage de pourboire 
accordé dont la valeur par défaut est 10%. 
● La fonction retourne alors le montant du pourboire. 
● Rajoutez un troisième paramètre à la fonction qui par défaut est à « false », mais qui 
permet s’il est passé à « true », d’afficher dans la console le montant de la 
commande hors pourboire et le montant du pourboire. 
Appelez la fonction au moins deux fois dans la page.
*/

function CalculerLePrixCommande(){
    var prixPourboire, prixTotal
    var affichageCommande = document.getElementById("afficherPrix")
    var prixCommandeString = document.getElementById("prixCommande").value
    var tauxPourboireString = document.getElementById("tauxPourboire").value

    var prixCommande = Number(prixCommandeString)
    var tauxPourboire = Number(tauxPourboireString)
    //alert(prixCommande + "    " + tauxPourboire)

    if(prixCommande<=0){
        alert("la commande doit etre renseigner et positive!")
        return
    }

    if(tauxPourboireString==""){
        tauxPourboire = 10
    }

    tauxPourboire = tauxPourboire*0.01

    prixPourboire = prixCommande * tauxPourboire
    prixTotal = prixCommande + prixCommande * tauxPourboire

    affichageCommande.value = "le pourboire s'élève à :" + prixPourboire + "euros et le prix de la commande : "+ prixTotal + "euros"
}


function EncoreUneFois(){
    var affichageCommande = document.getElementById("afficherPrix")
    var prixCommandeString = document.getElementById("prixCommande")
    var tauxPourboireString = document.getElementById("tauxPourboire")

    affichageCommande.value =" "
    prixCommandeString.value=" "
    tauxPourboireString.value=" "
}