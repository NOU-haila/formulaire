function valideForm(){
    var nom = document.getElementById("nom").value;
    console.log("Nom verifier :", nom);
    if (/^[a-zA-Z]+$/.test(nom)) {
        alert("Nom correct : " + nom);
    } else {
        alert("Le nom doit contenir uniquement des lettres.");
    }


    var prenom = document.getElementById("prenom").value;
    console.log("prenom verifier:",prenom);
    if (/^[a-zA-Z]+$/.test(nom)) {
        alert("Prenom correct : " + nom);
    } else {
        alert("Le prenom doit contenir uniquement des lettres.");
    }


    var date = document.getElementById("date_naissance").value;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        alert("Le format de la date doit être YYYY-MM-DD.");
        return;
    }

 
    var annee = parseInt(date.split("-")[0], 10);

    
    if (annee >= 2006) {
        alert("La date doit être antérieure à 2006.");
        return;
    }
    

    var langages = document.getElementById("langage").selectedOptions;

    if (langages.length === 0) {
        alert("Veuillez sélectionner au moins un langage.");
        return;
    }

    var langagesSelectionnes = Array.from(langages).map(option => option.value);

    alert("Nom correct : " + nom + "\nDate correcte : " + date + "\nSexe : " + sexe + "\nLangages sélectionnés : " + langagesSelectionnes.join(", "));
}



