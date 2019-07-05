# Kata typescript - Calisthenics Objects

## Objectif

Implémenter une classe qui permet d'effectuer des opérations datée sur un compte en banque.
Ces opérations peuvent avoir lieu en dollars ou en euros (1 euro = 1.12 dollars), mais le compte en banque est lui toujours en euros.

### Les opérations doivent prendre en compte 5 paramètres :

- le type d'opération : "deposit" ou "withdraw"
- le montant
- la date
- la devise : "euro" ou "dollar"
- une description

### Il faudra :

La seule façon d'afficher le compte est d'appeler une méthode `printHistory`.
Voici un exemple de scénario :

- Création du compte
- Dépôt de 100 euros le 1er janvier 2000
- Dépôt de 100 dollars le 2 janvier 2000
- Retrait de 50 euros le 3 janvier 2000
- Affichage de l'historique
- On observe :

```
2000-01-01  : deposit 100 EUR : 100 EUR
2000-01-02  : deposit 100 USD : 212 EUR
2000-01-03  : withdraw 50 EUR : 162 EUR
```

## Contraintes

Respecter les règles des Calisthenics Objects

- One level of indentation per method.
- Don't use the ELSE keyword.
- Wrap all primitives and Strings in classes.
- First class collections.
- One dot per line.
- Don't abbreviate.
- Keep all classes less than 50 lines.
- No classes with more than two instance variables.
- No getters or setters.
