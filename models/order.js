const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        orderId: {
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
        },
        books :[{
            type: String,
            required:true
        }],
        totalQuantity : {
            type : Number,
            required:true
        }
    },
    {
        timestamps: true,
    }
);

const orderDb = mongoose.model("Order", orderSchema);

module.exports = orderDb;
