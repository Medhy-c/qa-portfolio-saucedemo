# Test Cases – Module Cart (Panier)
**Application** : SauceDemo  
**Auteur** : Medhy  
**Date** : Octobre 2026

---

### TC-CART-001 – Accès à la page Panier
- **Priorité** : Haute
- **Type** : Positif
- **Préconditions** : Être connecté avec `standard_user`

**Étapes** :
1. Se connecter
2. Cliquer sur l’icône du panier

**Résultat attendu** :  
La page « Your Cart » s’affiche.

---

### TC-CART-002 – Affichage d’un produit dans le panier
- **Priorité** : Haute
- **Type** : Positif
- **Préconditions** : Avoir ajouté 1 produit au panier

**Étapes** :
1. Ajouter un produit (ex: Sauce Labs Backpack)
2. Aller dans le panier

**Résultat attendu** :  
Le produit apparaît avec son nom, sa description, son prix et la quantité 1.

---

### TC-CART-003 – Affichage de plusieurs produits dans le panier
- **Priorité** : Haute
- **Type** : Positif
- **Préconditions** : Avoir ajouté 3 produits différents

**Étapes** :
1. Ajouter 3 produits
2. Aller dans le panier

**Résultat attendu** :  
Les 3 produits sont bien listés avec leurs informations correctes.

---

### TC-CART-004 – Suppression d’un produit depuis le panier
- **Priorité** : Haute
- **Type** : Positif
- **Préconditions** : Avoir au moins 1 produit dans le panier

**Étapes** :
1. Aller dans le panier
2. Cliquer sur le bouton « Remove » d’un produit

**Résultat attendu** :  
Le produit disparaît du panier et le badge se met à jour.

---

### TC-CART-005 – Panier vide
- **Priorité** : Moyenne
- **Type** : Positif
- **Préconditions** : Aucun produit dans le panier

**Étapes** :
1. Aller dans le panier sans avoir ajouté de produit

**Résultat attendu** :  
Le panier est vide (aucun produit listé). Le bouton « Checkout » est présent.

---

### TC-CART-006 – Bouton « Continue Shopping »
- **Priorité** : Moyenne
- **Type** : Positif
- **Préconditions** : Être sur la page Panier

**Étapes** :
1. Cliquer sur le bouton « Continue Shopping »

**Résultat attendu** :  
L’utilisateur est redirigé vers la page Inventory.

---

### TC-CART-007 – Bouton « Checkout »
- **Priorité** : Haute
- **Type** : Positif
- **Préconditions** : Avoir au moins 1 produit dans le panier

**Étapes** :
1. Aller dans le panier
2. Cliquer sur le bouton « Checkout »

**Résultat attendu** :  
L’utilisateur est redirigé vers la page « Checkout: Your Information ».

---

### TC-CART-008 – Quantité des produits
- **Priorité** : Moyenne
- **Type** : Positif
- **Préconditions** : Avoir ajouté des produits

**Étapes** :
1. Ajouter plusieurs fois le même produit (si possible) ou différents produits
2. Vérifier la quantité affichée dans le panier

**Résultat attendu** :  
La quantité affichée correspond au nombre d’ajouts (sur SauceDemo la quantité reste à 1 par produit car on ne peut pas augmenter la quantité).

---

### TC-CART-009 – Prix total (sous-total)
- **Priorité** : Haute
- **Type** : Positif
- **Préconditions** : Avoir plusieurs produits dans le panier

**Étapes** :
1. Ajouter 2 ou 3 produits
2. Aller dans le panier
3. Vérifier le sous-total (Item total)

**Résultat attendu** :  
Le sous-total correspond à la somme des prix des produits présents dans le panier.

---

### TC-CART-010 – Comportement avec problem_user
- **Priorité** : Moyenne
- **Type** : Négatif / Exploratoire
- **Préconditions** : Se connecter avec `problem_user`

**Étapes** :
1. Se connecter avec `problem_user`
2. Ajouter des produits
3. Aller dans le panier et tester la suppression

**Résultat attendu** :  
Observer les éventuels bugs (difficulté à supprimer, comportements anormaux…).