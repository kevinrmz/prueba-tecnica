require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const products = require('./app/routes/Products');
const auth = require('./app/routes/Auth');

const PORT = process.env.PORT || 30001;

const whiteList = [];

app.use(cors({credentials: true, origin: '*'}));
app.use(express.json());

// Routes
app.use("/api/v1/products", products);
app.use("/api/v1/auth", auth);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.set('trust proxy', true);

app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT)
})

