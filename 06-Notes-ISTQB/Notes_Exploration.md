# Notes d’exploration – SauceDemo

## Produits (standard_user)
1. Sauce Labs Backpack - $29.99
2. Sauce Labs Bike Light - $9.99
3. Sauce Labs Bolt T-Shirt - $15.99
4. Sauce Labs Fleece Jacket - $49.99
5. Sauce Labs Onesie - $7.99
6. Test.allTheThings() T-Shirt (Red) - $15.99

## Fonctionnalités qui marchent (standard_user)
- Login / Logout
- Tri des produits
- Ajout / suppression panier
- Checkout complet
- Reset App State

## Comptes testés
- **standard_user** → fonctionne normalement
- **locked_out_user** → Message : "Epic sadface: Sorry, this user has been locked out."

## Bugs / comportements anormaux observés (problem_user)
- Toutes les images produits sont identiques
- Bouton de tri non fonctionnel
- Impossible de retirer un produit depuis la page Inventory (seulement depuis le panier)
- Certains produits ne peuvent pas être ajoutés au panier
- Bug sur le formulaire Checkout : saisir dans "Last Name" écrase le contenu de "First Name"
- Page About → Erreur 404

## Pages principales
- Login
- Inventory (All Items)
- Cart
- Checkout Information
- Checkout Overview
- Checkout Complete
- About
- Logout
- Reset App State

## Boutons / éléments importants
- Menu hamburger (en haut à gauche)
- Icône panier
- Filtres de tri
- Boutons "Add to cart" / "Remove"
- Boutons réseaux sociaux (footer)