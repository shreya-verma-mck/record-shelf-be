# Record Shelf | Backend Application

## Project setup

- Clone the repository and navigate to the project directory.
- Perform `npm install` at command line.
- Create an empty postgres database.
- Define the environment variables in a `.env` file.
- Run the command `npm run start` to run migrations, seed the database and start the server in development mode. This starts `nodemon`, which restarts the server for any changes in the source files.

## Required environment variables

- DB_USER: username to be used for database
- DB_PASS: password to be used for database
- DB_HOST: hostname to connect to for database
- POSTGRESQL_DB_NAME: database name to connect to