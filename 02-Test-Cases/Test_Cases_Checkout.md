# Test Cases – Module Checkout
**Application** : SauceDemo  
**Auteur** : Medhy  
**Date** : Octobre 2026

---

### TC-CHECK-001 – Accès à la page Checkout Information
- **Priorité** : Haute
- **Type** : Positif
- **Préconditions** : Avoir au moins 1 produit dans le panier

**Étapes** :
1. Aller dans le panier
2. Cliquer sur « Checkout »

**Résultat attendu** :  
La page « Checkout: Your Information » s’affiche.

---

### TC-CHECK-002 – Checkout avec informations valides
- **Priorité** : Haute
- **Type** : Positif
- **Technique ISTQB** : Equivalence Partitioning
- **Préconditions** : Être sur la page Checkout Information

**Étapes** :
1. Saisir First Name = `John`
2. Saisir Last Name = `Doe`
3. Saisir Postal Code = `59000`
4. Cliquer sur « Continue »

**Résultat attendu** :  
Redirection vers la page « Checkout: Overview ».

---

### TC-CHECK-003 – First Name vide
- **Priorité** : Haute
- **Type** : Négatif
- **Technique ISTQB** : Boundary Value Analysis / Error Guessing

**Étapes** :
1. Laisser First Name vide
2. Remplir Last Name et Postal Code
3. Cliquer sur « Continue »

**Résultat attendu** :  
Message d’erreur : « Error: First Name is required »

---

### TC-CHECK-004 – Last Name vide
- **Priorité** : Haute
- **Type** : Négatif

**Étapes** :
1. Remplir First Name
2. Laisser Last Name vide
3. Remplir Postal Code
4. Cliquer sur « Continue »

**Résultat attendu** :  
Message d’erreur : « Error: Last Name is required »

---

### TC-CHECK-005 – Postal Code vide
- **Priorité** : Haute
- **Type** : Négatif

**Étapes** :
1. Remplir First Name et Last Name
2. Laisser Postal Code vide
3. Cliquer sur « Continue »

**Résultat attendu** :  
Message d’erreur : « Error: Postal Code is required »

---

### TC-CHECK-006 – Tous les champs vides
- **Priorité** : Moyenne
- **Type** : Négatif

**Étapes** :
1. Laisser tous les champs vides
2. Cliquer sur « Continue »

**Résultat attendu** :  
Message d’erreur : « Error: First Name is required »

---

### TC-CHECK-007 – Vérification de la page Overview
- **Priorité** : Haute
- **Type** : Positif
- **Préconditions** : Avoir validé les informations de checkout

**Étapes** :
1. Arriver sur la page « Checkout: Overview »
2. Vérifier les éléments affichés

**Résultat attendu** :  
- Liste des produits
- Payment Information
- Shipping Information
- Item total + Tax + Total
- Boutons « Cancel » et « Finish »

---

### TC-CHECK-008 – Calcul du total (Item total + Tax)
- **Priorité** : Haute
- **Type** : Positif

**Étapes** :
1. Ajouter des produits connus
2. Aller jusqu’à la page Overview
3. Vérifier le calcul

**Résultat attendu** :  
Item total + Tax = Total (le calcul doit être correct).

---

### TC-CHECK-009 – Finalisation de la commande
- **Priorité** : Haute
- **Type** : Positif

**Étapes** :
1. Sur la page Overview, cliquer sur « Finish »

**Résultat attendu** :  
Redirection vers la page « Checkout: Complete! » avec le message de confirmation.

---

### TC-CHECK-010 – Bouton Cancel depuis Checkout Information
- **Priorité** : Moyenne
- **Type** : Positif

**Étapes** :
1. Sur la page Checkout Information, cliquer sur « Cancel »

**Résultat attendu** :  
Retour à la page Panier.

---

### TC-CHECK-011 – Bouton Cancel depuis Overview
- **Priorité** : Moyenne
- **Type** : Positif

**Étapes** :
1. Sur la page Overview, cliquer sur « Cancel »

**Résultat attendu** :  
Retour à la page Inventory.

---

### TC-CHECK-012 – Comportement avec problem_user (bug known)
- **Priorité** : Moyenne
- **Type** : Négatif / Exploratoire
- **Préconditions** : Se connecter avec `problem_user`

**Étapes** :
1. Ajouter des produits
2. Aller au checkout
3. Tester la saisie des champs (surtout Last Name)

**Résultat attendu** :  
Observer le bug connu : la saisie dans Last Name peut écraser le First Name.