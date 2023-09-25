const { Router } = require('express')
const clientGetController = require('./client-get-functions')
const clientPostController = require('./client-post-functions')
const productPostController = require('./product-post-functions')

const router = Router()

router.get('/clients', clientGetController.getAllClients)

router.post('/clients/new', clientPostController.addClient)

router.post('/clients/remove', clientPostController.removeClient)

router.post('/products/new', productPostController.addProduct)

module.exports = router

/*
/clients/new
/clients/remove/4
/clientes/modify/4
*/