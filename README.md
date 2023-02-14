
# API Gateway

API Gateway centralisant l'accès à plusieurs services GraphQl bas sur NestJs, fournissant une interface (Playground).

# Architecture

L'API Gateway utilise une architecture de microservices pour agréger et fédérer des services GraphQL.



## Services
L'API Gateway fédère les services suivants :
- Account
- User
- Operation
- Activity
- Course


## Tech Stack

    NestJS, GraphQL, ApolloGateway


## Exécuter localement

Importer le projet

```bash
  git clone https://github.com/vitokuko/api-gateway.git
```

Allez dans le répertoire du projet

```bash
  cd api-gateway
```

Installer les dépendances

```bash
  yarn
```

Démarrer le serveur

```bash
  yarn start:local
```


## Authors

- [@souaibou](https://github.com/vitokuko)

