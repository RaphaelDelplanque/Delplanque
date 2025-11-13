var adresseSaisi = prompt("saisir une @ web")

//vérification 
//commence par http:// ??
if (adresseSaisi.substring(0,8) == "http://"){
    alert("OK!! ça commence par http://")
}else{
    alert("PAS BIEN : ne commence pas par https://")
    adresseSaisi = "http://" + adresseSaisi
    alert(adresseSaisi)
}
//le lien doit être divisé >> http >www. puis ' mot ' puis .fr
//je veux que 'mot' soit le lien
var zoneLien = document.getElementById("adresseLien")
var tableauLien = adresseSaisi.split(".")
//console.log(tableauLien[1])
zoneLien.href = adresseSaisi
zoneLien.textContent =  tableauLien[1]
