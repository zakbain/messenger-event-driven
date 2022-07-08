## Requirements of system
1. Basic user CRUD (no delete)
2. Basic message CRUD (no delete)
3. Get messages between two users
4. Search for word in messages

Check swagger for REST API - http://localhost:3000/api

## Installation

```bash
$ yarn install
```

## Running the app

```bash
$ yarn start:dev
```

Navigate to http://localhost:3000/api for swagger documentation

## Seed data
Make sure server is running (yarn start)
```bash
./scripts/seed-users.sh
./scripts/seed-messages.sh <userId1> <userId2>
```
Note: Replace userId1 and userId2 with the user ids returned from seed-users.sh

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Migrations
```bash
# Create new migration (because you updated/created an entity)
$ yarn migration:generate src/database/migrations/{MIGRATION_NAME}

# Run existing migrations
$ yarn build
$ yarn migration:run 
```
For my other projects, I generally add this to the package.json to make things easier.



# messenger-event-driven
Event Driven messenger arch

The following guides are very helpful
- https://medium.com/event-driven-utopia/configuring-debezium-to-capture-postgresql-changes-with-docker-compose-224742ca5372#:~:text=Register%20the%20Postgres%20connector%20in%20Debezium&text=Log%20in%20to%20the%20Debezium,consistent%20snapshot%20of%20the%20shipment_db%20
- https://arctype.com/blog/kafka-tutorial-1/
- https://docs.confluent.io/home/connect/self-managed/extending.html
- https://www.confluent.io/blog/kafka-elasticsearch-connector-tutorial/
- https://github.com/confluentinc/cp-all-in-one/blob/7.1.2-post/cp-all-in-one/docker-compose.yml
