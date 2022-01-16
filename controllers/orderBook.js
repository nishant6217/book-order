const Order = require("../models/order")
const Book = require("../models/book")
module.exports.orderBook = async (req, res) => {
  try {
    const maxLimit = req.body.id;
    if (!maxLimit) {
      return res.status(400).json({
        success: false,
        message: "book id required"
      });
    }
    if (maxLimit && maxLimit.length > 10) {
      return res.status(400).json({
        success: false,
        message: "You can order only 10 Books max at a time.",
      });
    } else {
      let bookDetailForOrder = await Book.find({ id: maxLimit }).limit(10);
      if (bookDetailForOrder && bookDetailForOrder.length) {
        let amt = 0;
        let booksOrdered = [];
        for await (let item of bookDetailForOrder) {
          booksOrdered.push(item.name);
          amt += item.amount;
        }
        let orderDetails = await Order.findOne({ orderId: req.body.orderId });
        if (orderDetails) {
          return res.status(400).json({
            success: false,
            message: "oredr with current orderid already present"
          });
        }
        await Order.create({
          orderId: req.body.orderId,
          name: req.body.userName,
          amount: amt,
          books: booksOrdered,
          totalQuantity: booksOrdered.length
        });
        orderDetails = await Order.findOne({ orderId: req.body.orderId });
        if (orderDetails) {
          return res.status(200).json({
            success: true,
            message: "Order Created",
            data: orderDetails,
          });
        } else {
          return res.status(400).json({
            success: false,
            message: "error in creating order"
          });
        }
      } else {
        return res.status(400).json({
          success: false,
          message: "books data not present"
        });
      }
    }
  } catch (error) {
    console.log("error in creating order", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


module.exports.salesOrder = async (req, res) => {
  try {
    if (!req.body.orderId) {
      return res.status(400).json({
        success: false,
        message: "Order Id required",
      });
    }
    const salesOrderById = await Order.find({ orderId: req.body.orderId });
    if (salesOrderById && salesOrderById.length) {
      return res.status(200).json({
        success: true,
        message: "Sales order fetched",
        data: salesOrderById
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "No sales order present for the provided order Id",
      });
    }
  } catch (error) {
    console.log("error in fetching order details");
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};