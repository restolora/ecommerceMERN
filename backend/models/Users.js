const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    shippingAddress: {        
        address: {
            type: String,
            required: false
        },
        contact: {
            type: String,
            required: false
        },
        fullName: {
            type: String,
            required: false
        }
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    userStatus:{
        type: String,
        required: false
    },
    vkey:{
        type: String,
        required: false,
    } 
})

module.exports = mongoose.model('users', UsersSchema);