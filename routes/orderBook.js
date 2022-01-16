const express = require('express');

const router = express.Router();

const orderBooks = require("../controllers/orderBook")



router.post("/order-books" ,orderBooks.orderBook);
router.post("/sales-order" , orderBooks.salesOrder)


module.exports = router;
