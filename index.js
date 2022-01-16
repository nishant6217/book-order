const express = require("express");
const app = express();
const cors = require("cors");

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8000;

// eslint-disable-next-line no-unused-vars
const db = require("./config/mongoose");
const routes = require('./routes')


app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use('/book-website', routes);

app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`);
});
