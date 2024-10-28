const express = require('express');
const app = express();

// Leia as variáveis de ambiente
const PORT = process.env.PORT || 3000;
const DB_NAME = process.env.DB_NAME || 'default_db';

app.get('/', (req, res) => {
  res.send(`App is running on port ${PORT} and connected to database: ${DB_NAME}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});