# Full Cycle  Challenge:  Nginx -> Node.js -> MySQL

This is a simple project to show the connection between Nginx, Node and MySQL.

The intent of this challenge is to show the a list of default people already set up by the app and supply a way to add a new person.

This is done with a Nginx server acting as a reverse proxy, redirecting all request to a Node.js app, wich stores people data into a MySQL database.

## Routes

#### Home
Shows the current people in the database.
`http://localhost:8080`

#### Insert
Adds a new person to the database. You must inform the personName at the `name` query parameter.
`http://localhost:8080/insert?name={personName}`

## How To Run

To see it running, follow the steps:

1. Clone the repo and access its root folder;
2. Run `docker-compose up -d --build`
3. Access `http://localhost:8080`.