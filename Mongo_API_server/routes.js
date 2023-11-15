const { Router } = require('express')
const clientPostController = require('./client-post-functions')
const productPostController = require('./product-post-functions')

const router = Router()

router.post('/clients/new', clientPostController.addClient)

router.post('/clients/remove', clientPostController.removeClient)

router.post('/clients/modify', clientPostController.modifyClient)

router.post('/products/new', productPostController.addProduct)

router.post('/products/remove', productPostController.removeProduct)

router.post('/products/modify', productPostController.modifyProduct)

module.exports = router