const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

    /**
     * Protected API with JWT Token
     */
    //Define the base URL for all routes
    const protectedApi = express.Router()
    server.use('/api', protectedApi)    

    protectedApi.use(auth)

    //Billing cycle routes
    const billingCycle = require('../api/billingCycle/billingCycleService') 
    billingCycle.register(protectedApi, '/billingCycles')

    /**
     * Public API
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const authService = require('../api/user/authService')
    openApi.post('/login', authService.login)
    openApi.post('/signup', authService.signup)
    openApi.post('/validateToken', authService.validateToken)
}