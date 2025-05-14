// Définir le prix de l'article et la monnaie disponible dans la caisse (cid)
let price = 19.5;
let cid = [
  ["PENNY", 0.5],    // Pièces de 1 cent
  ["NICKEL", 0],     // Pièces de 5 cents
  ["DIME", 0],       // Pièces de 10 cents
  ["QUARTER", 0],    // Pièces de 25 cents
  ["ONE", 0],        // Billets de 1 dollar
  ["FIVE", 0],       // Billets de 5 dollars
  ["TEN", 0],        // Billets de 10 dollars
  ["TWENTY", 0],     // Billets de 20 dollars
  ["ONE HUNDRED", 0] // Billets de 100 dollars
];

// Récupérer les éléments HTML
const cashInput = document.getElementById('cash'); // Champ de saisie pour la somme donnée par le client
const changeDue = document.getElementById('change-due'); // Élément pour afficher la monnaie à rendre
const purchaseBtn = document.getElementById('purchase-btn'); // Bouton pour procéder à l'achat

// Dictionnaire des unités de monnaie et de leur valeur
const currencyUnits = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.10,
  "QUARTER": 0.25,
  "ONE": 1.00,
  "FIVE": 5.00,
  "TEN": 10.00,
  "TWENTY": 20.00,
  "ONE HUNDRED": 100.00
};

// Ajouter un événement au clic sur le bouton d'achat
purchaseBtn.addEventListener('click', () => {
  // Récupérer la somme donnée par le client
  let cash = parseFloat(cashInput.value);
  
  // Vérifier si le client a assez d'argent pour acheter l'article
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }
  
  // Si le client paie exactement la somme requise
  if (cash === price) {
    changeDue.textContent = "No change due - customer paid with exact cash";
    return;
  }

  // Calculer la monnaie à rendre
  let change = parseFloat((cash - price).toFixed(2));
  
  // Créer une copie de la caisse initiale pour vérifier le statut "CLOSED" plus tard
  let originalCID = JSON.parse(JSON.stringify(cid));
  
  // Tableau pour stocker la monnaie à rendre
  let changeArr = [];
  
  // Calculer le total de la monnaie disponible dans la caisse
  let totalCID = parseFloat(cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2));

  // Inverser la caisse pour traiter les plus grandes unités de monnaie en premier
  cid = cid.slice().reverse();

  // Boucle pour déterminer la monnaie à rendre
  for (let [unit, amount] of cid) {
    let unitValue = currencyUnits[unit]; // Valeur de l'unité de monnaie (par ex. 0.25 pour QUARTER)
    let unitTotal = 0;

    // Tant que le montant restant à rendre est supérieur à la valeur de l'unité et que l'on a assez de cette unité dans la caisse
    while (change >= unitValue && amount >= unitValue) {
      change -= unitValue; // Réduire la monnaie à rendre
      change = parseFloat(change.toFixed(2)); // Arrondir à 2 décimales
      amount -= unitValue; // Réduire la quantité disponible de cette unité
      unitTotal += unitValue; // Ajouter à la monnaie rendue
    }

    // Si on a utilisé des unités de cette monnaie, on les ajoute au tableau des pièces à rendre
    if (unitTotal > 0) {
      changeArr.push([unit, parseFloat(unitTotal.toFixed(2))]);
    }
  }

  // Si on n'a pas pu rendre la monnaie complète (change > 0), afficher INSUFFICIENT_FUNDS
  if (change > 0) {
    changeDue.textContent = "Status: INSUFFICIENT_FUNDS";
    cid = originalCID; // Restaurer la caisse initiale
    return;
  }

  // Calculer le total de la monnaie rendue
  const changeTotal = parseFloat(changeArr.reduce((acc, curr) => acc + curr[1], 0).toFixed(2));
  
  // Calculer la monnaie restante dans la caisse après avoir rendu la monnaie
  const remainingCID = parseFloat((totalCID - changeTotal).toFixed(2));

  // Si la monnaie restante dans la caisse est de 0, afficher "CLOSED"
  if (remainingCID === 0) {
    let closedMessage = "Status: CLOSED";
    
    // Afficher la monnaie rendue dans l'ordre des unités (de la plus grande à la plus petite)
    for (let [unit, amount] of originalCID) {
      const match = changeArr.find(item => item[0] === unit);
      const displayAmount = match ? match[1] : 0; // Vérifier si cette unité a été utilisée
      closedMessage += ` ${unit}: $${displayAmount.toFixed(2)}`;
    }
    changeDue.textContent = closedMessage;
  } else {
    // Si la monnaie restante n'est pas égale à 0, afficher "OPEN" avec la monnaie rendue
    let openMessage = "Status: OPEN";
    for (let [unit, amount] of changeArr) {
      openMessage += ` ${unit}: $${amount.toFixed(2)}`;
    }
    changeDue.textContent = openMessage;
  }
});
