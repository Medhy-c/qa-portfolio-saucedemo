# Test Plan – SauceDemo

Projet : Portfolio QA Junior – SauceDemo  
Auteur : Medhy  
Date : Octobre 2026  
Version : 1.0

---

## 1. Introduction

Ce document décrit la stratégie et le plan de tests pour l’application SauceDemo.

## 2. Objectifs des tests

- Valider les fonctionnalités principales de l’application
- Vérifier le comportement des différents types d’utilisateurs
- Identifier et documenter les anomalies
- Appliquer les techniques de conception de tests ISTQB

## 3. Périmètre (Scope)

### Inclus
- Login / Logout
- Catalogue produits (affichage, tri)
- Ajout / suppression d’articles au panier
- Processus de checkout (informations + confirmation)
- Comportement des comptes spéciaux (locked, problem, performance…)

### Exclus
- Tests de performance avancés
- Tests de sécurité
- Tests mobile natifs
- Paiement réel (le site est une démo)

## 4. Approche de test

- Tests fonctionnels manuels
- Techniques ISTQB utilisées : Equivalence Partitioning, Boundary Value Analysis, Decision Table, Error Guessing
- Tests d’exploration
- Automatisation progressive avec Playwright

## 5. Environnement de test

- Navigateurs : Chrome , Firefox
- Système d’exploitation : Windows 11
- Outils : VS Code, Playwright, Git

## 6. Critères d’entrée

- Accès au site SauceDemo
- Comptes de test disponibles
- Documentation des fonctionnalités rédigée

## 7. Critères de sortie

- Au moins 90 % des cas de tests exécutés
- Tous les bugs critiques et majeurs documentés
- Rapport d’exécution finalisé

## 8. Risques

| Risque                          | Impact | Mitigation                     |
|--------------------------------|--------|--------------------------------|
| Site de démo modifié           | Moyen  | Vérifier régulièrement le site |
| Comptes de test indisponibles  | Faible | Utiliser plusieurs navigateurs |

## 9. Livrables

- Test Plan
- Cas de tests
- Bug Reports
- Rapport d’exécution
- Scripts d’automatisation