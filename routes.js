const { Router } = require('express')
const clientGetController = require('./client-get-functions')
const clientPostController = require('./client-post-functions')
const router = Router()

router.get('/clients', clientGetController.getAllClients)

router.post('/clients/new', clientPostController.addClient)

module.exports = router

/*
/clients/new
/clients/remove/4
/clientes/modify/4
*/