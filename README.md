# NUMU NODEJS

## Setup

* Clone repo.
* Install dependencies.

    > npm install
* Set global configurations in config.js (if needed).
* I have used mongodb. For a local test, mongo db community edition service needs to be installed [click here](https://www.mongodb.com/try/download/community?tck=docs_server)
* Run app.

    > npm run server

## API Urls

* http://localhost:4000/users (GET)
* http://localhost:4000/users/add (POST) {body: name}
* http://localhost:4000/users/delete (POST) {body: id}

* http://localhost:4000/hobbies (GET) {params: id}
* http://localhost:4000/hobbies/add (POST) {body: name, passion, year, userId}
* http://localhost:4000/hobbies/delete (POST) {body: id}