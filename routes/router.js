const express = require('express');
const controller = require('../Controller/controller');

const router = express();

router.post('/customersRegistration',controller.customer);

router.post('/customerDataSubmit',controller.customerData);

router.post('/updateCustomerData',controller.updateCustomerData);

router.post('/updatedCustomerData',controller.updatedCustomerData);

router.post('/deleteCustomerData',controller.deleteCustomerData);

router.get('/customerData',controller.getData);

router.use('/',controller.homePage);

module.exports = router;