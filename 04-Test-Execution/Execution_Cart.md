# Rapport d’exécution – Module Cart (Panier)
**Date d’exécution** : 10/10/2026  
**Exécuté par** : Medhy  
**Environnement** : Chrome / Windows 11  
**Application** : https://www.saucedemo.com

---

| ID Test Case   | Titre                                      | Statut   | Commentaire                                      |
|----------------|--------------------------------------------|----------|--------------------------------------------------|
| TC-CART-001    | Accès à la page Panier                     | Pass     |                                                  |
| TC-CART-002    | Affichage d’un produit dans le panier      | Pass     |                                                  |
| TC-CART-003    | Affichage de plusieurs produits            | Pass     |                                                  |
| TC-CART-004    | Suppression d’un produit depuis le panier  | Pass     |                                                  |
| TC-CART-005    | Panier vide                                | Pass     |                                                  |
| TC-CART-006    | Bouton « Continue Shopping »               | Pass     |                                                  |
| TC-CART-007    | Bouton « Checkout »                        | Pass     |                                                  |
| TC-CART-008    | Quantité des produits                      | Pass     | Quantité affichée (toujours 1). Impossible d’ajouter plusieurs fois le même produit |
| TC-CART-009    | Prix total (sous-total)                    | Pass     | Le total n’apparaît pas sur la page Cart, seulement à partir de la page Checkout Overview |
| TC-CART-010    | Comportement avec problem_user             | Pass     | Aucun problème rencontré pour supprimer les produits |

---

### Résumé
- Total de cas de tests : 10
- Passés : 10
- Échoués : 0
- Bloqués : 0
- Non exécutés : 0
- Taux de réussite : **100 %**

### Observations
- Il n’est pas possible d’augmenter la quantité d’un même produit (comportement normal de SauceDemo).
- Le sous-total (Item total) n’est pas visible sur la page Panier. Il apparaît uniquement à l’étape « Checkout: Overview ».
- Avec `problem_user`, la suppression des produits depuis le panier fonctionne correctement.