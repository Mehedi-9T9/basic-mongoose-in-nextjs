import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    ram: {
        type: String,
        required: true,
    },
    room: {
        type: String,
        required: true
    },

    productId: {
        type: String
    },
    madeIn: {
        type: String,
        default: "Bangladesh"
    }

})
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
export default Product