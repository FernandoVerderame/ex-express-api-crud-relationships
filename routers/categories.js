// Importo express
const express = require("express");

// Istanza di express.Router()
const router = express.Router();

// Importo le funzioni dei Posts
const {
    store,
    index,
    show,
    update,
    destroy
} = require("../controllers/categories.js");

router.post('/', store);

router.get('/', index);

router.get('/:id', show);

router.put('/:id', update);

router.delete('/:id', destroy);

module.exports = router;