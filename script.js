/** Daily Challenge du jour 5 : Enregistrement sur console.log des paroles de notre propre chanson 99 Bottles of Beer.
/**
 *@author: Maké Gilles-Chris
 *@date_heure:01/01/2023,15:30
 * @type_challenge: Créer une fonction qui demande à l'utilisateur d'entrer un nombre et donne la chanson avec les paroles
 *@retuns: le nombre entrer decrementer jusqu'a 0 et la fonction s'arrete.
 */


function singSong() {
    let numberOfBottles = prompt("Entrez un nombre de bouteilles de bière pour commencer à chanter :");
    numberOfBottles = parseInt(numberOfBottles, 10); // convertir la chaîne de caractères en nombre entier

    if (numberOfBottles < 1) {
        console.log("Pas de bouteilles de bière sur le mur");
        return;
    }

    let count = 1; // compteur de bouteilles prises
    while (numberOfBottles > 0) {
        let bottleWord = "bouteilles";
        if (numberOfBottles === 1) {
            bottleWord = "bouteille";
        }
        console.log(numberOfBottles + " " + bottleWord + " de bière sur le mur");
        console.log(numberOfBottles + " " + bottleWord + " de bière");
        console.log("Prenez-en " + count + ", passez-" + (count === 1 ? "la" : "les") + " autour");
        numberOfBottles -= count;
        count++;
    }
    console.log("Pas de bouteilles de bière sur le mur");
}