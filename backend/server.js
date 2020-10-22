const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// connection
const mongoose = require('mongoose');
const dbConfig = 'mongodb://localhost:27017';
const dbName   = 'dbcom';
mongoose.connect(`${dbConfig}/${dbName}`, 
    { useNewUrlParser: true, useUnifiedTopology: true},
    (err) => { 
        if(err) throw err;
        console.log('connected');
    }
)

// router
const usersRoutes = require('./routes/Users')
app.use("/users", usersRoutes);
const productsRoutes = require('./routes/Products')
app.use("/products", productsRoutes);

const port = 5000;
app.listen(port, function(){
    console.log("API start in port :", port);
});