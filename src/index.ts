import app from './app';

require('dotenv').config();

import './database/db.connections';

const port = process.env.PORT || 4000;

// <-- Server listenning -->
const server = app.listen(port, () => {
  console.log(`Listening server on Port -> http://localhost:${server.address().port}`);
});
