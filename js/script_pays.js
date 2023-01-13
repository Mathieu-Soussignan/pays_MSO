// Tableau des pays
const paysMonde = {
    "pays": [
        { nom: "France", countryCode: 'FR', capital: "Paris", devise: 'eur', continent: "Europe", population: 67000000 },
        { nom: "Espagne", countryCode: 'ES', capital: "Madrid", devise: 'eur', continent: "Europe", population: 47000000 },
        { nom: "Allemagne", countryCode: 'DE', capital: "Berlin", devise: 'eur', continent: "Europe", population: 83000000 },
        { nom: "Italie", countryCode: 'IT', capital: "Rome", devise: 'eur', continent: "Europe", population: 62000000 },
        { nom: "Canada", countryCode: 'CA', capital: "Ottawa", devise: 'cad', continent: "Nord-Americain", population: 37000000 },
        { nom: "Etats-Unis", countryCode: 'US', capital: "Washington D.C.", devise: 'dollar', continent: "Nord-Americain", population: 331000000 },
        { nom: "Mexique", countryCode: 'MX', capital: "Mexico", devise: 'peso', continent: "Nord-Américain", population: 130000000 },
        { nom: "Argentine", countryCode: "AR", capital: "Buenos Aires", devise: 'peso argentin', continent: "Sud-Amerique", population: 45000000 },
        { nom: "Afghanistan", countryCode: "AF", capital: "Kabul", devise: "AFN", continent: "Asia", population: 29121286 }
    ]
};

//Demande à l'utilisateur de saisir un Pays
let nomPays = prompt("Veuillez saisir le pays à rechercher: ").toLowerCase();

//Fonction qui filtre la recherche uniquement sur le continent
function filtrerPaysParContinent(continent) {
    let nomContinentLower = continent.toLowerCase();
    return paysMonde.pays.filter(pays => pays.continent.toLowerCase() === nomContinentLower);
}

//déclaration des variables
let nomContinent = prompt("Veuillez saisir le continent à rechercher: ").toLowerCase();
let paysTrouve = filtrerPaysParContinent(nomContinent);
console.log(paysTrouve);

//Utilisation de la fonction reduce, merci Nico pour les explications ^^
let sommePopulation = paysTrouve.reduce((acc, pays) => acc + pays.population, 0);
console.log(`La somme totale de la population des pays du continent ${nomContinent} est: ${sommePopulation} d'habitants au total`);

//fonction pour rechercher le nom du pays dans le tableau, si rien n'est entrer retourne un message (`Aucun pays trouvé pour ${nom}`)
function trouverPays(nom) {
    let nomLower = nom.toLowerCase();
    for (let i = 0; i < paysMonde.pays.length; i++)
        if (paysMonde.pays[i].nom.toLowerCase() === nomLower) {
            return paysMonde.pays[i];
        }
    return (`Aucun pays trouvé pour ${nom}`);
}
// 
let paysTrouver = trouverPays(nomPays);

//Déclaration d'un tableau de voyelles pour gérer le résultat des réponses
const voyelles = ['a', 'e', 'i', 'o', 'u', 'y'];
//si le pays est trouver, on entre ici et on affiche un message informatif sur le pays recherché,
//si rien n'est entrer retourne un message (`Aucun pays trouvé pour ${nomPays}`)
if (paysTrouver) {
    let nomPaysAffiche = nomPays;
    if (voyelles.includes(nomPays[0])) {
        nomPaysAffiche = `l'${nomPays}`;

        // On vérifie aussi pour les devise, si la première lettre est une voyelle on rajoute l'
        if (voyelles.includes(paysTrouver.devise[0])) {

            paysTrouver.devise = `l'${paysTrouver.devise}`;
        }
    }
    function afficherMessage(nom_pays, nom_capitale, devise, continent, population) {
        let message = `La capitale de ${nom_pays} est ${nom_capitale}, sa devise est ${devise}, le pays est sur le continent ${continent} et sa population est de ${population} d'habitants.`;
        console.log(message);
    }
    afficherMessage(nomPaysAffiche, paysTrouver.capital, paysTrouver.devise, paysTrouver.continent, paysTrouver.population);
} else {
    console.log(`Aucun pays trouvé pour ${nomPays}`);
}
