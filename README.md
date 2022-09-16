# project

Project using React + Node + ESP32(C/C++).

# Requirements

This project requires the following:
* Node (needed to run backend and frontend)
* MySQL (needed to save and persists data)

# Recommended

When coding, it's recommended to use VsCode and those extensions bellow:
* Better Comments
* PlatformIO

# Installation & Configuration

First you need to set up your DB, then backend and then follow to the frontend

## DB (Database)
When running your MySQL database, you can create the schema just by running the command bellow:
```
CREATE SCHEMA `esp32_root` DEFAULT CHARACTER SET utf8mb4 ;
```

If you want to se another name of database (instead of 'esp32_root'), just change on the query above. The same about the Collation Set.


## Backend

Go to backend and configure a .env file (you can just change .env-example to .env) with your MySQL database info, such as Name and Password of a DB User, and the DB Name, host and Port.

After that you can simply run the following commands:
```
npm install
npm run setup
npm start
```

The command "npm run setup" will run "npx sequelize-cli db:migrate" tp setup your database with the needed columns and then run "npx sequelize-cli db:seed:all" to fill your db with some data (through the seeders setted).

Test if it's running by going to:
http://localhost:8500. If you receive "OK" it's already running.

If you just want to setup the database columns, you can simply run
```
npm run migrate
npm start
```


## Frontend

Go to frontend and check the environment file if it's setted with your configuration on backend (if you didn't change backend PORT it's not necessary to change).

Then run the following command:
```
npm install && npm run dev
```

It will install all the dependencies and then run your react application (with Vite).

# Troubleshooting

You can test with Unit tests configurated on backend (Jest) by running the same command of both:
```
npm test
```

If it's not working of if you got some error, check the env files of both frontend and backend, and check if your database is working fine.