// Importo express
const express = require("express");

// Istanza di express.Router()
const router = express.Router();

// Importo il validatore
const validator = require('../middlewares/validator.js');

// Importo il validatore dello slug
const validationSlug = require("../validations/validationSlug.js");

// Importo il bodyData
const bodyData = require("../validations/posts.js");

// Importo le funzioni dei Posts
const {
    store,
    index,
    show,
    update,
    destroy
} = require("../controllers/posts.js");

router.post('/', validator(bodyData), store);

router.get('/', index);

// Validatore dello slug
router.use('/:slug', validator(validationSlug));

router.get('/:slug', show);

router.put('/:slug', validator(bodyData), update);

router.delete('/:slug', destroy);

module.exports = router;