require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

const app = express();

const paths = {
  users: '/api/users',
  auth: '/api/auth',
  products: '/api/products',
};

app.listen(process.env.PORT, async () => {
  console.log(`Server running in port ${ process.env.PORT }`);

  middlewares();
  routes();
  await dbConnection();
});

const routes = () => {
  app.use(paths.users, require('./routes/users'));
  app.use(paths.auth, require('./routes/auth'));
  app.use(paths.products, require('./routes/products'));
};

const middlewares = () => {
  app.use(cors());
  app.use(express.json());
};
