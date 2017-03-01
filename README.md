# redux-tech-blog

## Development

### System Requirements

* postgresql
* node & npm

### To Run

#### Create DB

First you must create a postgresql database that matches th contents of `knexfile.js`. 
If you want to use a different username/password/dbname, feel free to change these settings, but don't check them in. 
They shouldn't really be hardcoded in the file anyway but fixing this is not yet a priority.

#### Install dependencies

Once the db is setup, install node modules:

```
npm i
```

#### Seed a database user

For this the easiest solution is to install `knex` globally and run the seed command:

```
npm i -g knex
knex seed:run
```

This will give you a user with username/password of `admin`/`notmypassword`

#### Run the app

To run the server,

```
npm run server
```

At this point you can use the SSR client or the standalone client. The SSR client will be available on `localhost:9999`.
To run the standalone client:

```
npm run dev-client
```

This will open a browser window to `localhost:3000`.

