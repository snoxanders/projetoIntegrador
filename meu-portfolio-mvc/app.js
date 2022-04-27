const express = require('express');
const app = express();
const homepage = require('../controllers/mainController.js')

router.get('3000', mainController.index);


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});