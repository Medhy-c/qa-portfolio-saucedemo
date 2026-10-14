# Portfolio QA Junior – SauceDemo

![Status](https://img.shields.io/badge/Status-Terminé%20(Manuel%20+%20Auto)-success)
![ISTQB](https://img.shields.io/badge/ISTQB-Foundation%20Level%20(préparation)-blue)
![Automation](https://img.shields.io/badge/Automation-Playwright%20+%20TypeScript-green)

## Présentation

Bonjour, je m'appelle **Medhy**.  
Je suis actuellement en préparation de la certification **ISTQB Foundation Level** et je construis ce portfolio pour postuler à des postes de **Testeur QA Junior** (région Lille / Hauts-de-France).

Ce projet a pour objectif de démontrer mes compétences en :
- Conception de cas de tests (techniques ISTQB)
- Rédaction de Test Plan et Bug Reports professionnels
- Exécution de tests manuels et reporting
- Automatisation de tests avec **Playwright + TypeScript**
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

J’ai automatisé les scénarios critiques suivants :

| ID Test Auto     | Description                                      | Statut  |
|------------------|--------------------------------------------------|---------|
| TC-AUTO-001      | Connexion réussie avec standard_user             | Passé   |
| TC-AUTO-002      | Connexion échouée avec locked_out_user           | Passé   |
| TC-AUTO-003      | Parcours complet (Login → Panier → Checkout)     | Passé   |

**Lancer les tests automatisés :**

"npx playwright test"

**Voir le rapport HTML :**

npx playwright show-report

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

Tests manuels complets (Login, Inventory, Cart, Checkout)
Rédaction de Bug Reports professionnels
Automatisation des scénarios critiques avec Playwright
Amélioration du framework (Page Object Model)
Intégration GitHub Actions (CI)
Ajout de tests API (Postman)

---

## Contact

Je suis ouvert aux opportunités de **Testeur QA Junior** sur Lille et dans la région du Pas de Calais.

N’hésitez pas à me contacter !
