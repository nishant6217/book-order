const express = require('express');

const router = express.Router();
const getBooks = require('./getBooks');
const orderBook = require('./orderBook');
const register = require('../controllers/registerBooks')

router.post("/register",register.register)
router.use("/get-books" , getBooks);
router.use("/order",orderBook);



module.exports = router;
