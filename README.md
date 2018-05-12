# A simple login App

## Setup

1. git clone this repo
2. `npm install`
3. `npm test` - make sure all unit and behaviour tests pass
4. `npm start` - to run
5. open browser on http://localhost:3000/

## Description

The consists of homepage, contact, login and profile page

the profile page is protected so user needs to be logged in first before viewing it otherwise you will be redirected to login page, the login page request a backend auth endpoint for login which returns a jwt token, then user will be able to access profile page, and a reading preference that displays in a table list of books, which it fetches by a protected api that verifies token first, otherwise if token is expired for example then you will be redirected to login again

## Technologies used:

* react was used as a front end framework
* react router was used for front end routing
* redux was used for state mangament to keep track if user is logged in or not
* Bootstrap for styling
* webpack to bundle react app
* babel to transpile to pre es6 js
* Eslint for linting
* Express was used for backend api endpoints and serve bundled react app file

## Testing:
* Jest and Enzyme was used for front end unit test
* Cucumber and supertest was used fot backend api endpoint test

P.S - you mentioned in task to display first 5 records for books, however the api you mentioned https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699 only returns one, so i used instead this https://www.googleapis.com/books/v1/volumes?q=isbn hope that is ok thanks
