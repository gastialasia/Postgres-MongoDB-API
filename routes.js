const { Router } = require('express')
const clientGetController = require('./client-get-functions')
const clientPostController = require('./client-post-functions')
const productPostController = require('./product-post-functions')
const migrationPostController = require('./mongo/migration')

const router = Router()

router.get('/clients', clientGetController.getAllClients)

router.post('/clients/new', clientPostController.addClient)

router.post('/clients/remove', clientPostController.removeClient)

router.post('/clients/modify', clientPostController.modifyClient)

router.post('/products/new', productPostController.addProduct)

router.post('/products/remove', productPostController.removeProduct)

router.post('/products/modify', productPostController.modifyProduct)

router.get('/migration', migrationPostController.migrateData)

module.exports = router