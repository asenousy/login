# A simple login App

## Setup

1. git clone this repo
2. `npm install`
3. `npm test` - make sure all unit and behaviour tests pass
4. `npm start` - to run
5. open browser on http://localhost:3000/

## Description

The consists of homepage, contact, login and profile page

The profile page is protected so user needs to be logged in first before viewing it otherwise you will be redirected to login page, the login page request a backend auth endpoint for login which returns a jwt token, then user will be able to access profile page, and a reading preference that displays in a table list of books, which it fetches by a protected api that verifies token first, otherwise if token is expired for example then you will be redirected to login again

## Technologies used:

* React was used as a front end framework
* React-Router was used for front end routing
* Redux was used for state mangament to keep track if user is logged in or not
* Bootstrap for styling
* Webpack to bundle react app
* Babel to transpile to pre es6 js
* Eslint for linting
* Express was used for backend api endpoints and serve bundled react app file

## Testing:
* Jest and Enzyme was used for front end unit test
    * It checks that the Navbar displays login or logout button appropiately based on user status
    * It does a snapshot test on the reading books table
* Cucumber and supertest was used fot backend api endpoint test
    * it simulates a login scenario and checks a jwt token is sent back

## Improvements to be made:
* use https since a password is being submitted
* store user details and password in a database with password encrypted using salted hashing

## PS:
you mentioned in task to display first 5 records for books, however the api you mentioned https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699 only returns one, so i used instead this https://www.googleapis.com/books/v1/volumes?q=isbn hope that is ok thanks
