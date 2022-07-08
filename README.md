
## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

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
# Run existing migrations
$  yarn migration:generate src/database/migrations/{MIGRATION_NAME}

# Create new migrations
$  yarn typeorm migration:generate -n -d src/database/data-source.ts src/database/migrations/{MIGRATION_NAME} 
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
