const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema(
    {
        infos: {type: Object },
    },
    {timestamps: true}
);

module.exports = mongoose.model("Cart", CartSchema)

