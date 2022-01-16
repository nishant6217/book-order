const Book = require("../models/book")
module.exports.register = async (req, res) => {
  try {
    if (!req.body.id) {
      return res.status(400).json({
        success: false,
        message: "Book Id required",
      });
    }
    let bookDetail = await Book.findOne({ id: req.body.id });

    if (bookDetail) {
      return res.status(400).json({
        success:false,
        message: "this book is already registered",
      });
    } else {
      await Book.create({
        id: req.body.id,
        name: req.body.name,
        amount: req.body.amount
      });
      let bookDetail = await Book.findOne({ id: req.body.id });
      if (bookDetail) {
        return res.status(200).json({
          success: true,
          message: "book registered",
          data: bookDetail,
        });
      }
    }
  } catch (error) {
    console.log("error in registering book");
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};