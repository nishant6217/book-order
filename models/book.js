const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        amount: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const BookDb = mongoose.model("Books", bookSchema);

module.exports = BookDb;
