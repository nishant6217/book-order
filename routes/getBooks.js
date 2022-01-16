const express = require('express');

const router = express.Router();

const getBooks = require("../controllers/getBooks")



router.post("/all-books" ,getBooks.getBooks );


module.exports = router;
