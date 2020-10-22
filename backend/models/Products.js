const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    prod_name: {
        type: String,
        required: true
    },
    prod_price: {
        type: String,
        required: true
    },
    prod_category: {
        type: String,
        required: true
    },
    prod_variation: {
        type: String,
        required: true
    },
    prod_desc: {
        type: String,
        required: true
    },
    prod_img: {
        type: String,
        required: true
    },
    prod_status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('products', ProductsSchema);