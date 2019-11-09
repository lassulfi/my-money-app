const express = require('express');

module.exports = function(server) {

    //Define the base URL for all routes
    const router = express.Router()
    server.use('/api', router)    

    //Billing cycle routes
    const billingCycle = require('../api/billingCycle/billingCycleService') 
    billingCycle.register(router, '/billingCycles')
}