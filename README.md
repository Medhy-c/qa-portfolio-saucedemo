# Portfolio QA Junior – SauceDemo

![Status](https://img.shields.io/badge/Status-En%20cours-yellow)
![ISTQB](https://img.shields.io/badge/ISTQB-Foundation%20Level%20(préparation)-blue)
![Automation](https://img.shields.io/badge/Automation-Playwright-green)

## Présentation

Bonjour, je m'appelle **Medhy**.  
Je suis actuellement en préparation de la certification **ISTQB Foundation Level** et je construis ce portfolio pour postuler à des postes de **Testeur QA Junior** (région Lille / Hauts-de-France).

Ce projet a pour objectif de démontrer mes compétences en :
- Conception de cas de tests (techniques ISTQB)
- Rédaction de Test Plan et Bug Reports professionnels
- Exécution de tests manuels et reporting
- Automatisation de tests avec **Playwright** (TypeScript) – *en cours*
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
├── 02-Test-Cases/              # Cas de tests par module
├── 03-Bug-Reports/             # Rapports de bugs + preuves
├── 04-Test-Execution/          # Rapports d’exécution
├── 05-Automation/              # Tests automatisés Playwright (à venir)
├── 06-Notes-ISTQB/             # Notes d’exploration et techniques
└── README.md

---

## Modules testés

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
| BUG-001  | Last Name écrase First Name (problem_user)         | Majeure   | [Voir](./03-Bug-Reports/BUG-001_Checkout_LastName_Overwrite.md) |
| BUG-002  | Images des produits identiques (problem_user)      | Moyenne   | [Voir](./03-Bug-Reports/BUG-002_Images_Identiques_problem_user.md) |
| BUG-003  | Page About renvoie une erreur 404                  | Mineure   | [Voir](./03-Bug-Reports/BUG-003_About_Page_404.md) |

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

- [ ] Automatisation des scénarios critiques avec Playwright + TypeScript
- [ ] Mise en place d’un rapport HTML
- [ ] Intégration GitHub Actions (CI)
- [ ] Ajout de tests API (Postman)

---

## Contact

Je suis ouvert aux opportunités de **Testeur QA Junior** sur Lille et sa région.

N’hésitez pas à me contacter !
