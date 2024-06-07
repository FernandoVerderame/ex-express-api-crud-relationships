// Importo express e dotenv
const express = require('express');
const dotenv = require("dotenv");

// Importo il ruoter dei Posts
const postsRouter = require("./routers/posts.js");

const errorHandler = require('./middlewares/errorHandler.js');
const notFound = require('./middlewares/notFound.js');

// Inizializzo express
const app = express();

// Definisco le variabili port e host
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

dotenv.config();

// application/json
app.use(express.json());

// Router dei Posts
app.use('/posts', postsRouter);

app.use(notFound);

app.use(errorHandler);

// Avvio il server
app.listen(port, host, () => {
    console.log(`Server avviato su http://${host}:${port}`);
});