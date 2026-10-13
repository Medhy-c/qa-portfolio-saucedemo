# Rapport d’exécution – Module Inventory
**Date d’exécution** : 09/10/2026  
**Exécuté par** : Medhy  
**Environnement** : Chrome / Windows 11  
**Application** : https://www.saucedemo.com

---

| ID Test Case   | Titre                                              | Statut   | Commentaire                              |
|----------------|----------------------------------------------------|----------|------------------------------------------|
| TC-INV-001     | Affichage de la liste des produits                 | Pass     | 6 produits affichés correctement         |
| TC-INV-002     | Vérification des noms et prix des produits         | Pass     | Tous les noms et prix sont corrects      |
| TC-INV-003     | Tri par nom (A to Z)                               | Pass     |                                          |
| TC-INV-004     | Tri par nom (Z to A)                               | Pass     |                                          |
| TC-INV-005     | Tri par prix (low to high)                         | Pass     |                                          |
| TC-INV-006     | Tri par prix (high to low)                         | Pass     |                                          |
| TC-INV-007     | Ajout d’un produit au panier                       | Pass     | Badge mis à jour correctement            |
| TC-INV-008     | Suppression d’un produit depuis Inventory          | Pass     |                                          |
| TC-INV-009     | Ajout de plusieurs produits au panier              | Pass     | Badge affiche bien le bon nombre         |
| TC-INV-010     | Comportement avec problem_user (images)            | Pass     | Toutes les images sont identiques (bug connu) |

---

### Résumé
- Total de cas de tests : 10
- Passés : 10
- Échoués : 0
- Bloqués : 0
- Non exécutés : 0
- Taux de réussite : **100 %**

### Observations
- Le catalogue fonctionne correctement avec `standard_user`.
- Le tri (nom et prix) fonctionne bien.
- L’ajout et la suppression de produits depuis la page Inventory fonctionnent.
- Avec `problem_user`, toutes les images des produits sont identiques (comportement attendu / bug connu du site de démo).
- Un produit a volontairement un nom différent (`Test.allTheThings() T-Shirt (Red)`).