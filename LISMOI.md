# 🏦 Application Caisse enregistreuse

🔗 **Site en ligne** : []()

> ✨ *Dans ce projet, j'ai créé une application de caisse enregistreuse qui calcule et rend la monnaie au client en fonction du prix de l'article, de l'argent fourni et de la monnaie disponible dans le tiroir-caisse.*

---

## 🎯 Objectif du projet

L'objectif de ce projet est de créer une **application de caisse enregistreuse** qui calcule et rend la monnaie au client en fonction des conditions suivantes :
- Le prix de l'article.
- L'argent fourni par le client.
- La monnaie disponible dans le tiroir-caisse.

L'application doit aussi afficher le message de statut approprié dans divers scénarios, tels que :
- "INSUFFICIENT_FUNDS" lorsque le tiroir-caisse n'a pas assez d'argent pour rendre la monnaie correcte.
- "CLOSED" lorsque le tiroir-caisse a exactement le montant nécessaire pour rendre la monnaie.
- "OPEN" lorsque de la monnaie peut être rendue, avec un détail des pièces et billets dus, triés du plus grand au plus petit.

---

## 📌 Exigences du projet

- [x] Un champ de saisie avec `id="cash"` pour capturer l'argent fourni par le client.
- [x] Un élément `div`, `span` ou `p` avec `id="change-due"` pour afficher la monnaie due.
- [x] Un bouton avec `id="purchase-btn"` pour déclencher le calcul de la monnaie.
- [x] Une validation pour vérifier si l'argent fourni par le client est suffisant pour couvrir le prix :
  - Si le client n'a pas assez d'argent : "Le client n'a pas assez d'argent pour acheter l'article".
  - Si le client fournit le montant exact : "Aucune monnaie due - le client a payé avec l'argent exact".
- [x] Si le tiroir-caisse peut rendre la monnaie correcte, afficher la monnaie due en billets et pièces, triée du plus grand au plus petit.
- [x] Gérer les cas extrêmes tels que :
  - Fonds insuffisants dans le tiroir-caisse.
  - Paiement exact (statut : CLOSED).
  - Monnaie correcte, mais pas assez de dénominations exactes dans le tiroir-caisse.

---

## ✅ Histoires utilisateur

1. **Comparaison du prix** :
   - Lorsque le prix est supérieur à l'argent fourni par le client, une alerte doit s'afficher : "Le client n'a pas assez d'argent pour acheter l'article".
   
2. **Argent exact** :
   - Si le client paie le montant exact, le message de sortie doit indiquer : "Aucune monnaie due - le client a payé avec l'argent exact".

3. **Calcul de la monnaie** :
   - Si le prix est 19.5 et que le client paie 20, et si le tiroir-caisse (`cid`) contient suffisamment de billets/pièces, la sortie doit afficher :  
   "Statut : OPEN QUARTER: $0.5".

4. **Fonds insuffisants dans le tiroir-caisse** :
   - Si le prix est 19.5, que le client paie 20, mais que le tiroir ne contient pas assez d'argent, la sortie doit afficher :  
   "Statut : INSUFFICIENT_FUNDS".

5. **Monnaie due en différentes dénominations** :
   - Pour des prix comme 3.26, si le client paie 100 et que le tiroir-caisse contient suffisamment de dénominations, la sortie doit être triée par ordre décroissant :  
   "Statut : OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04".

---

## 💻 Détails techniques

- **Entrée** : 
  - Le champ `#cash` saisit le montant que le client donne.
  - Le bouton `#purchase-btn` déclenche l'achat et calcule la monnaie.
  - L'élément `#change-due` affiche le résultat avec la monnaie due ou un message de statut.

- **Unités monétaires** : 
  - Penny = 0,01 $
  - Nickel = 0,05 $
  - Dime = 0,10 $
  - Quarter = 0,25 $
  - Dollar = 1 $
  - Cinq dollars = 5 $
  - Dix dollars = 10 $
  - Vingt dollars = 20 $
  - Cent dollars = 100 $

---

## 🧑‍💻 Contexte du projet

Il s'agit d'un projet requis pour la certification **JavaScript Algorithms and Data Structures** de freeCodeCamp.

À travers ce projet, j'ai pratiqué :

- La gestion des cas extrêmes dans un scénario réaliste (par exemple, fonds insuffisants, monnaie exacte).
- Le travail avec des tableaux pour stocker les dénominations monétaires.
- La manipulation du DOM en JavaScript pour créer une application interactive.
- La validation des entrées et la gestion des erreurs pour une expérience utilisateur fluide.
- Le tri des tableaux selon des critères (dénominations de pièces et billets).

---

## 📫 Contact

- GitHub: [@idghim](https://github.com/idghim)  
- freeCodeCamp: [My Profile](https://www.freecodecamp.org/IchemD)  
- Email: [ichemdghim@gmail.com](mailto:ichemdghim@gmail.com)

---

⭐ *Merci d'avoir consulté ce projet ! N'hésite pas à laisser une étoile si tu l'as trouvé utile ou inspirant.*
