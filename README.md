## real_book - monorepo web app boilerplate

- Client was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- API is GraphQL running on an [Express](https://expressjs.com/) server
- DB is [postgreSQL](https://www.postgresql.org/) configured via [Sequelize](https://sequelize.org/) 

In the project directory, you can run:

### `docker-compose up`

Builds app and db docker images and starts containers accessible through [http://localhost:8080](http://localhost:8080)

### `yarn`

- Installs app depencies, ***required for development***

### `yarn test`

- Launches the test runner

### `yarn build`

- Builds the client for production to the `build` folder

***DB must be set with process.env.DATABASE_URL or local db (named package.json[name]) on 5432***

### `yarn start-dev`

- Starts both the server and client in development mode via "yarn concurrently" 
- Nodemon watches the server and react-scripts watches the front-end, should force restart/reloads on file changes
- Open [http://localhost:3000](http://localhost:3000) to view client in the browser
- API requests are proxied to server running on [https://localhost:8080](https://localhost:8080)

### `yarn start-prod`

- Starts the server only, which serves the api and a production client build [localhost:8080](localhost:8080) ("yarn build" must have been run previously)
