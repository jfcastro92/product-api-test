<p align="center">
  <a href="https://expressjs.com/images/express-facebook-share.png" target="blank"><img src="https://expressjs.com/images/express-facebook-share.png" width="200" alt="Express Logo" /></a> +
  <a href="https://www.mysql.com/" target="blank"><img src="https://d1.awsstatic.com/asset-repository/products/amazon-rds/1024px-MySQL.ff87215b43fd7292af172e2a5d9b844217262571.png" width="200" alt="MySQL Logo" /></a>
</p>

<p align="center">
  <h1>Basic API - MySQL Connection using Express and NodeJS Javascript</h1>
</p>


## Description

In the implementation you cand find two endpoints to rerquest for product and most viewed product of a MYSQL Database. Also, the API calculates the products prices in Cadadian Dollars by requesting the exchange rate to a a third-party API (https://currencylayer.com/documentation).

Notes:
1. In the folder, it is a products.sql script to create the database model. Also, in the db.js setup your local database credentials
2. Please in the product-api-test/services/httpCurrency.service  change the API KEY 

Libraries used:
  - axios : ^1.6.7,
  - express : ^4.18.2,
  - mysql2 : ^3.9.1

## Installation

```bash
$ npm install
```
## Database connection config params
```bash
await createConnection({
    host: "localhost",
    database: "localhost",
    user: "root",
    password: "root",
    port: "3306"
});
```

## Axios Http URL config

Change changeme with the API Key
```bash
await axios.get(`http://api.currencylayer.com/convert?access_key=changeme&from=USD&to=CAD&amount=1`);
```

## Running the app

```bash
# development
$ node .\index.js

```
## Stay in touch

- Author - [Juan Fernando Castro - Test for Feufo]

## License

Nest is [MIT licensed](LICENSE).