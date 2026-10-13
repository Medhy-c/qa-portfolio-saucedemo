# Test Cases – Module Login
**Application** : SauceDemo  
**Auteur** : Medhy  
**Date** : Octobre 2026


### TC-LOGIN-001 – Connexion réussie avec un utilisateur valide
- **Priorité** : Haute
- **Type** : Positif
- **Technique ISTQB** : Equivalence Partitioning
- **Préconditions** : Être sur la page de login
- **Données de test** : Username = `standard_user` / Password = `secret_sauce`

**Étapes** :
1. Saisir le username `standard_user`
2. Saisir le password `secret_sauce`
3. Cliquer sur le bouton Login

**Résultat attendu** :  
L’utilisateur est redirigé vers la page Inventory (liste des produits).



### TC-LOGIN-002 – Connexion échouée avec un utilisateur bloqué
- **Priorité** : Haute
- **Type** : Négatif
- **Technique ISTQB** : Equivalence Partitioning
- **Préconditions** : Être sur la page de login
- **Données de test** : Username = `locked_out_user` / Password = `secret_sauce`

**Étapes** :
1. Saisir le username `locked_out_user`
2. Saisir le password `secret_sauce`
3. Cliquer sur le bouton Login

**Résultat attendu** :  
Un message d’erreur s’affiche :  
« Epic sadface: Sorry, this user has been locked out. »



### TC-LOGIN-003 – Connexion échouée avec username incorrect
- **Priorité** : Moyenne
- **Type** : Négatif
- **Technique ISTQB** : Equivalence Partitioning
- **Données de test** : Username = `wrong_user` / Password = `secret_sauce`

**Étapes** :
1. Saisir un username incorrect
2. Saisir le password valide
3. Cliquer sur Login

**Résultat attendu** :  
Message d’erreur : « Epic sadface: Username and password do not match any user in this service »


### TC-LOGIN-004 – Connexion échouée avec password incorrect
- **Priorité** : Moyenne
- **Type** : Négatif
- **Technique ISTQB** : Equivalence Partitioning
- **Données de test** : Username = `standard_user` / Password = `wrong_password`

**Étapes** :
1. Saisir un username valide
2. Saisir un password incorrect
3. Cliquer sur Login

**Résultat attendu** :  
Message d’erreur : « Epic sadface: Username and password do not match any user in this service »


### TC-LOGIN-005 – Connexion échouée avec username vide
- **Priorité** : Moyenne
- **Type** : Négatif
- **Technique ISTQB** : Boundary Value Analysis / Error Guessing
- **Données de test** : Username = (vide) / Password = `secret_sauce`

**Étapes** :
1. Laisser le champ Username vide
2. Saisir le password
3. Cliquer sur Login

**Résultat attendu** :  
Message d’erreur : « Epic sadface: Username is required »


### TC-LOGIN-006 – Connexion échouée avec password vide
- **Priorité** : Moyenne
- **Type** : Négatif
- **Technique ISTQB** : Boundary Value Analysis / Error Guessing
- **Données de test** : Username = `standard_user` / Password = (vide)

**Étapes** :
1. Saisir le username
2. Laisser le champ Password vide
3. Cliquer sur Login

**Résultat attendu** :  
Message d’erreur : « Epic sadface: Password is required »


### TC-LOGIN-007 – Connexion échouée avec les deux champs vides
- **Priorité** : Moyenne
- **Type** : Négatif
- **Technique ISTQB** : Error Guessing
- **Données de test** : Username = (vide) / Password = (vide)

**Étapes** :
1. Laisser les deux champs vides
2. Cliquer sur Login

**Résultat attendu** :  
Message d’erreur : « Epic sadface: Username is required »


### TC-LOGIN-008 – Connexion avec espaces avant/après le username
- **Priorité** : Basse
- **Type** : Négatif
- **Technique ISTQB** : Boundary Value Analysis
- **Données de test** : Username = ` standard_user ` / Password = `secret_sauce`

**Étapes** :
1. Saisir le username avec des espaces avant et après
2. Saisir le password
3. Cliquer sur Login

**Résultat attendu** :  
Soit la connexion échoue, soit le système trimme automatiquement les espaces (à vérifier).