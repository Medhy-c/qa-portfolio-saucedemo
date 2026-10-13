# Rapport d’exécution – Module Checkout
**Date d’exécution** : 10/10/2026  
**Exécuté par** : Medhy  
**Environnement** : Chrome / Windows 11  
**Application** : https://www.saucedemo.com

---

| ID Test Case    | Titre                                           | Statut   | Commentaire                                              |
|-----------------|-------------------------------------------------|----------|----------------------------------------------------------|
| TC-CHECK-001    | Accès à la page Checkout Information            | Pass     |                                                          |
| TC-CHECK-002    | Checkout avec informations valides              | Pass     |                                                          |
| TC-CHECK-003    | First Name vide                                 | Pass     |                                                          |
| TC-CHECK-004    | Last Name vide                                  | Pass     |                                                          |
| TC-CHECK-005    | Postal Code vide                                | Pass     |                                                          |
| TC-CHECK-006    | Tous les champs vides                           | Pass     |                                                          |
| TC-CHECK-007    | Vérification de la page Overview                | Pass     |                                                          |
| TC-CHECK-008    | Calcul du total (Item total + Tax)              | Pass     | Calcul correct                                           |
| TC-CHECK-009    | Finalisation de la commande                     | Pass     |                                                          |
| TC-CHECK-010    | Bouton Cancel depuis Checkout Information       | Pass     |                                                          |
| TC-CHECK-011    | Bouton Cancel depuis Overview                   | Pass     |                                                          |
| TC-CHECK-012    | Comportement avec problem_user                  | Pass     | Bug confirmé : la saisie dans Last Name écrase First Name et laisse Last Name vide |

---

### Résumé
- Total de cas de tests : 12
- Passés : 12
- Échoués : 0
- Bloqués : 0
- Non exécutés : 0
- Taux de réussite : **100 %**

### Observations
- Tous les contrôles de validation des champs fonctionnent correctement avec `standard_user`.
- Le calcul du total (Item total + Tax) est exact.
- Avec `problem_user`, le bug connu du formulaire a bien été reproduit : la saisie dans le champ Last Name écrase le contenu du champ First Name et laisse le champ Last Name vide.