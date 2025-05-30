const express = require('express');
// Rutas de productos
const entriesController = require("../controllers/entries.controller");
const checkApiKey = require("../middlewares/auth_api_key");

const router = express.Router();

router.get('/', entriesController.getEntries);
router.post('/',checkApiKey, entriesController.createEntry); // solo si tiene API KEY

module.exports = router;

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}
    */