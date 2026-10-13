# Rapport d’exécution – Module Login
**Date d’exécution** : 09/10/2026  
**Exécuté par** : Medhy  
**Environnement** : Chrome / Windows 11  
**Application** : https://www.saucedemo.com

---

| ID Test Case     | Titre                                      | Statut   | Commentaire                              |
|------------------|--------------------------------------------|----------|------------------------------------------|
| TC-LOGIN-001     | Connexion réussie (standard_user)          | Pass     |                                          |
| TC-LOGIN-002     | Connexion échouée (locked_out_user)        | Pass     | Message d’erreur correct                 |
| TC-LOGIN-003     | Username incorrect                         | Pass     |                                          |
| TC-LOGIN-004     | Password incorrect                         | Pass     |                                          |
| TC-LOGIN-005     | Username vide                              | Pass     |                                          |
| TC-LOGIN-006     | Password vide                              | Pass     |                                          |
| TC-LOGIN-007     | Les deux champs vides                      | Pass     |                                          |
| TC-LOGIN-008     | Espaces avant/après username               | Pass     | Le système ne trimme pas les espaces     |

---

### Résumé
- Total de cas de tests : 8
- Passés : 8
- Échoués : 0
- Bloqués : 0
- Non exécutés : 0
- Taux de réussite : **100 %**

### Observations
- Tous les messages d’erreur sont clairs et conformes.
- Le système **ne supprime pas automatiquement les espaces** avant/après le username (comportement confirmé avec TC-LOGIN-008).
- Aucun bug bloquant trouvé sur le module Login.