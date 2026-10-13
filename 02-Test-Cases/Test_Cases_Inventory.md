# Test Cases – Module Inventory (Catalogue produits)
**Application** : SauceDemo  
**Auteur** : Medhy  
**Date** : Octobre 2026

---

### TC-INV-001 – Affichage de la liste des produits
- **Priorité** : Haute
- **Type** : Positif
- **Technique ISTQB** : Equivalence Partitioning
- **Préconditions** : Être connecté avec `standard_user`

**Étapes** :
1. Se connecter avec `standard_user` / `secret_sauce`
2. Vérifier la page Inventory

**Résultat attendu** :  
6 produits sont affichés avec leur nom, description, prix et bouton "Add to cart".

---

### TC-INV-002 – Vérification des noms et prix des produits
- **Priorité** : Haute
- **Type** : Positif
- **Technique ISTQB** : Equivalence Partitioning
- **Préconditions** : Être connecté avec `standard_user`

**Étapes** :
1. Se connecter
2. Vérifier les 6 produits suivants :
   - Sauce Labs Backpack → $29.99
   - Sauce Labs Bike Light → $9.99
   - Sauce Labs Bolt T-Shirt → $15.99
   - Sauce Labs Fleece Jacket → $49.99
   - Sauce Labs Onesie → $7.99
   - Test.allTheThings() T-Shirt (Red) → $15.99

**Résultat attendu** :  
Tous les noms et prix sont corrects.

---

### TC-INV-003 – Tri des produits par nom (A to Z)
- **Priorité** : Moyenne
- **Type** : Positif
- **Technique ISTQB** : Decision Table / State Transition
- **Préconditions** : Être connecté avec `standard_user`

**Étapes** :
1. Cliquer sur le filtre de tri
2. Sélectionner "Name (A to Z)"

**Résultat attendu** :  
Les produits sont triés par ordre alphabétique croissant.

---

### TC-INV-004 – Tri des produits par nom (Z to A)
- **Priorité** : Moyenne
- **Type** : Positif
- **Préconditions** : Être connecté avec `standard_user`

**Étapes** :
1. Sélectionner "Name (Z to A)"

**Résultat attendu** :  
Les produits sont triés par ordre alphabétique décroissant.

---

### TC-INV-005 – Tri des produits par prix (low to high)
- **Priorité** : Moyenne
- **Type** : Positif
- **Préconditions** : Être connecté avec `standard_user`

**Étapes** :
1. Sélectionner "Price (low to high)"

**Résultat attendu** :  
Les produits sont triés du moins cher au plus cher.

---

### TC-INV-006 – Tri des produits par prix (high to low)
- **Priorité** : Moyenne
- **Type** : Positif
- **Préconditions** : Être connecté avec `standard_user`

**Étapes** :
1. Sélectionner "Price (high to low)"

**Résultat attendu** :  
Les produits sont triés du plus cher au moins cher.

---

### TC-INV-007 – Ajout d’un produit au panier depuis Inventory
- **Priorité** : Haute
- **Type** : Positif
- **Technique ISTQB** : Equivalence Partitioning
- **Préconditions** : Être connecté avec `standard_user`

**Étapes** :
1. Cliquer sur "Add to cart" d’un produit (ex: Sauce Labs Backpack)
2. Vérifier le badge du panier

**Résultat attendu** :  
- Le bouton devient "Remove"
- Le badge du panier affiche "1"

---

### TC-INV-008 – Suppression d’un produit depuis Inventory
- **Priorité** : Haute
- **Type** : Positif
- **Préconditions** : Avoir ajouté un produit au panier

**Étapes** :
1. Cliquer sur le bouton "Remove" du produit
2. Vérifier le badge du panier

**Résultat attendu** :  
- Le bouton redevient "Add to cart"
- Le badge du panier disparaît (ou affiche 0)

---

### TC-INV-009 – Ajout de plusieurs produits au panier
- **Priorité** : Haute
- **Type** : Positif
- **Préconditions** : Être connecté avec `standard_user`

**Étapes** :
1. Ajouter 3 produits différents au panier
2. Vérifier le badge

**Résultat attendu** :  
Le badge du panier affiche "3".

---

### TC-INV-010 – Comportement avec problem_user (images)
- **Priorité** : Moyenne
- **Type** : Négatif / Exploratoire
- **Technique ISTQB** : Error Guessing
- **Préconditions** : Se connecter avec `problem_user`

**Étapes** :
1. Se connecter avec `problem_user` / `secret_sauce`
2. Observer les images des produits

**Résultat attendu** :  
Toutes les images des produits sont identiques (bug connu).