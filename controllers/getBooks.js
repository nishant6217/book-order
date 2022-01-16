const Book = require("../models/book")
module.exports.getBooks = async (req, res) => {
  try {
    if (!req.body.id) {
      return res.status(400).json({
        success: false,
        message: "Book Id required",
      });
    }
    let bookDetail = await Book.find({ id: req.body.id }).limit(req.body.limit);
    if (bookDetail && bookDetail.length) {
      return res.status(200).json({
        success: true,
        message: "books data fetched",
        data: bookDetail
      });
    }else{
      return res.status(400).json({
        success: false,
        message: "books data not present"
      });
    }
    
  } catch (error) {
    console.log("error in fetching book's detail");
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};