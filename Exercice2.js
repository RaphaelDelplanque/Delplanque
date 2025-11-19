function validerInformation(){
    var nom = document.getElementById("nom").value
    var prenom = document.getElementById("prenom").value
    var mail = document.getElementById("mail").value
    if(!verificationMail(mail)){
        alert("l'adresse mail ne contient pas '@")
        return
    }

    var message
    message = ("parfait " + prenom + " " + nom + "\n" + 
        " nous prennons en compte votre mail " + mail)
    alert(message)
}
function verificationMail(mail){
    if(mail.includes('@')){
        return true
    }else{
        return false
    }
}

function ajouterListe() {
    var texteSaisi = demanderTexteNouveauElement() //ici, je reçois une chaine de carac
    if (!texteSaisi) { //on arrete la fonction si rien dans texteSaisi
        return
    }

    var texteDeNouveauElementListe = document.createTextNode(texteSaisi) //ici je transforme en string
    var listeExistante = document.getElementById("liste")
    var nouveauElementDeListe = document.createElement("li")
    nouveauElementDeListe.className = "liste" 
    nouveauElementDeListe.appendChild(texteDeNouveauElementListe)
    listeExistante.appendChild(nouveauElementDeListe)
}

function demanderTexteNouveauElement(){
    var txt = prompt("quel élément souhaitez vous ajouter?")
    return txt
}

function supprimerListe(){
    var elementASuprimer = demanderNumeroElement()
    var verificationSaisi = verification(elementASuprimer)
    var saisiCorrect = verificationSaisi.valider
    var texteRetour = verificationSaisi.message
    var numeroASupprimer = verificationSaisi.numero

    if (!saisiCorrect){
        alert(texteRetour)
        return
    }
    
    var listeExistante = document.getElementById("liste")
    var indexASupprimer = numeroASupprimer - 1
    listeExistante.removeChild(listeExistante.children[indexASupprimer])
}

function demanderNumeroElement(){
    var num = prompt("saisir le numéro de l'élément à supprimer :")
    return num
}
function verification(nbr){
    var numero = Number(nbr);
    if (!Number.isInteger(numero)) {
        return {valider  : false, message : "ce n'est pas un numéro", numero: numero}
    }
    if(numero <= 0){
        return {valider : false, message : "le numéro est négatif ...", numero : numero}
    }
    var liste = document.getElementById("liste")
    var nombreElement = liste.children.length

    if (numero > nombreElement){
        return {valider : false, message : "ce numero n'est pas dans la liste", numero : numero}
    }
    
    return {valider : true, message : "ok pour le numéro", numero :numero}
}