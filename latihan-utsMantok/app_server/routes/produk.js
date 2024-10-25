var express = require('express');
var router = express.Router();


// route untuk mendaftarkan URL dari setiap request yang sebelumnya telah dibuat pada controller, antara lain index, insert, uodate, show dan destroy
const prdController = require('../controllers/produk');

router.get("/", prdController.index); //list produk
router.post("/insert", prdController.insert); //insert produk

module.exports = router;