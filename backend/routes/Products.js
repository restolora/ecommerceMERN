const express = require('express');
const router = express.Router();

// services
const products = require('../models/Products');

// insert into
router.post('/create', (req, res) => {
    const { prod_name, prod_price, prod_category, prod_variation, prod_desc, prod_img } = req.body;
    const prod_status = 1;
    const result = Users.insertMany({
        prod_name,
        prod_price,
        prod_category,
        prod_variation,
        prod_desc,
        prod_img,
        prod_status
    }).then( results => { 
        res.send("Insert success");
    }).catch( err => {
        console.log(JSON.stringify(err, undefined, 2));        
    });
});
// list all data of users colletion
router.get('/all', (req, res) => {
    const result = Users.find().then( results => { 
        res.send(results)
    }).catch( err => {
        console.log(JSON.stringify(err, undefined, 2));        
    });
});
// list data by id
router.get('/:id', (req, res) => {
    const _id = req.params.id;
    const result = Users.find({_id}).then( results => { 
        res.send(results)
    }).catch( err => {
        console.log(JSON.stringify(err, undefined, 2));        
    });
});
// update data
router.put('/:id', (req, res) => {
    const obj = req.body;
    const _id = req.body._id;
    const result = Users.updateOne(
        { _id },
        { $set: obj }
    ).then( results => { 
        res.send("Update success")
    }).catch( err => {
        console.log(JSON.stringify(err, undefined, 2));        
    });
});

module.exports = router