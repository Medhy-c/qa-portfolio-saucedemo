# Portfolio QA Junior – SauceDemo

![Status](https://img.shields.io/badge/Status-Terminé-success)
![ISTQB](https://img.shields.io/badge/ISTQB-Foundation%20Level%20(préparation)-blue)
![Automation](https://img.shields.io/badge/Automation-Playwright%20+%20TypeScript-green)
![CI](https://img.shields.io/badge/CI-GitHub%20Actions-blue)
![API](https://img.shields.io/badge/API-Postman-orange)

## Présentation

Bonjour, je m'appelle **Medhy**.  
Je suis actuellement en préparation de la certification **ISTQB Foundation Level** et je construis ce portfolio pour postuler à des postes de **Testeur QA Junior** (région Lille / Hauts-de-France).

Ce projet a pour objectif de démontrer mes compétences en :
- Conception de cas de tests (techniques ISTQB)
- Rédaction de Test Plan et Bug Reports professionnels
- Exécution de tests manuels et reporting
- Automatisation de tests avec **Playwright + TypeScript**
- Tests API avec **Postman**
- Utilisation de Git / GitHub

---

## Application sous test

**Sauce Demo (Swag Labs)**  
🔗 [https://www.saucedemo.com](https://www.saucedemo.com)

Site e-commerce de démonstration spécialement conçu pour la pratique des tests manuels et automatisés.

### Comptes de test utilisés

| Username                  | Password       | Comportement                     |
|---------------------------|----------------|----------------------------------|
| standard_user             | secret_sauce   | Utilisateur normal               |
| locked_out_user           | secret_sauce   | Compte bloqué                    |
| problem_user              | secret_sauce   | Bugs UI et fonctionnels          |
| performance_glitch_user   | secret_sauce   | Lenteur                          |
| error_user                | secret_sauce   | Erreurs de formulaire            |
| visual_user               | secret_sauce   | Bugs visuels                     |

---

## Structure du projet

qa-portfolio-saucedemo/
├── 01-Test-Plan/               # Plan de test
├── 02-Test-Cases/              # Cas de tests manuels par module
├── 03-Bug-Reports/             # Rapports de bugs + captures d'écran
├── 04-Test-Execution/          # Rapports d’exécution
├── 05-Automation/              # Tests automatisés Playwright
├── 06-Notes-ISTQB/             # Notes d’exploration et techniques
├── 07-API-Tests/               # Collection Postman
└── README.md


---

## Tests Manuels

| Module          | Nombre de Test Cases | Statut      | Bugs trouvés |
|-----------------|----------------------|-------------|--------------|
| Login           | 8                    | Terminé     | 0            |
| Inventory       | 10                   | Terminé     | 1            |
| Cart            | 10                   | Terminé     | 0            |
| Checkout        | 12                   | Terminé     | 1            |
| **Total**       | **40**               | -           | **3**        |

---

## Bugs identifiés

| ID       | Titre                                              | Sévérité  | Lien |
|----------|----------------------------------------------------|-----------|------|
| BUG-001  | Last Name écrase First Name (problem_user)         | Majeure   | [Voir le bug](03-Bug-Reports/BUG-001_Checkout_LastName_Overwrite.md) |
| BUG-002  | Images des produits identiques (problem_user)      | Moyenne   | [Voir le bug](03-Bug-Reports/BUG-002_Images_Identiques_problem_user.md) |
| BUG-003  | Page About renvoie une erreur 404                  | Mineure   | [Voir le bug](03-Bug-Reports/BUG-003_About_Page_404.md) |

---

## Automatisation (Playwright + TypeScript)

J’ai automatisé les scénarios critiques suivants avec une architecture **Page Object Model** + **Data Driven** :

| ID Test Auto     | Description                                      | Statut  |
|------------------|--------------------------------------------------|---------|
| TC-AUTO-001      | Connexion réussie avec standard_user             | Passé   |
| TC-AUTO-002      | Connexion échouée avec locked_out_user           | Passé   |
| TC-AUTO-003      | Parcours complet (Login → Panier → Checkout)     | Passé   |
| TC-AUTO-004      | Vérification du nombre de produits (6)           | Passé   |
| TC-AUTO-005      | Tri des produits par nom (A to Z)                | Passé   |

**Technologies & pratiques utilisées :**
- Playwright + TypeScript
- Page Object Model (POM)
- Data Driven Testing
- GitHub Actions (CI)

**Lancer les tests localement :**

npx playwright test

**Voir le rapport HTML :**

npx playwright show-report

Les tests s’exécutent aussi automatiquement à chaque push grâce à GitHub Actions.

## Tests API (Postman)

J’ai réalisé des tests API sur l’API publique **ReqRes** :

| Méthode | Endpoint              | Description                  | Statut |
|---------|-----------------------|------------------------------|--------|
| GET     | /api/users?page=2     | Liste des utilisateurs       | Passé  |
| GET     | /api/users/2          | Récupérer un utilisateur     | Passé  |
| POST    | /api/users            | Créer un utilisateur         | Passé  |
| PUT     | /api/users/2          | Modifier un utilisateur      | Passé  |
| DELETE  | /api/users/2          | Supprimer un utilisateur     | Passé  |

La collection Postman est disponible ici :  
[ReqRes_API_Tests.postman_collection.json](07-API-Tests/ReqRes_API_Tests.postman_collection.json)

---

## Techniques ISTQB utilisées

- Equivalence Partitioning
- Boundary Value Analysis
- Decision Table
- Error Guessing
- State Transition
- Tests exploratoires

---

## Prochaines étapes

- [x] Tests manuels complets (Login, Inventory, Cart, Checkout)
- [x] Rédaction de Bug Reports professionnels
- [x] Automatisation des scénarios critiques avec Playwright
- [x] Amélioration du framework (Page Object Model)
- [x] Intégration GitHub Actions (CI)
- [x] Ajout de tests API (Postman)

---

## Contact

Je suis ouvert aux opportunités de **Testeur QA Junior** sur Lille et dans la région du Pas-de-Calais.

N’hésitez pas à me contacter !
