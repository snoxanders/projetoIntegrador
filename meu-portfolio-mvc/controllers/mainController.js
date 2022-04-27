const express = require('express');
const app = express();

const homepage = {
    index: (req, res) => {
        res.send('../views/home.html')
    }
}

module.exports = homepage;