const customer = require('../Model/customers');

exports.homePage = (req, res, next) => {
    res.render('index')
}

exports.customer = (req, res, next) => {
    res.render('customersRegistration')
}

exports.customerData = async (req, res, next) => {
    var name = req.body.name;
    var email = req.body.email;
    var contactNumber = req.body.contactNumber;
    var imageData = req.file;

    var imageUrl = imageData.path;

    await customer.create({
        name: name,
        emailId: email,
        contactNumber: contactNumber,
        imageUrl: imageUrl
    })
    res.redirect('/customerData')

}

exports.updateCustomerData = (req, res, next) => {
    var index = req.body.update
    customer.findOne({
        where: {
            id: index
        }
    })
        .then(result => {
            res.render('updateCustomerData', {
                data: result
            })
        })
}

exports.updatedCustomerData = (req, res, next) => {
    var updatedId = req.body.updated

    var name = req.body.name;
    var email = req.body.email;
    var contactNumber = req.body.contactNumber;
    var dateOfBirth = req.body.dateOfBirth;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;
    var country = req.body.country;
    var address = req.body.address;
    customer.update({
        name: name,
        emailId: email,
        contactNumber: contactNumber,
        dateOfBirth: dateOfBirth,
        password: password,
        confirmPassword: confirmPassword,
        dateOfBirth: dateOfBirth,
        country: country,
        address: address
    },
        {
            where: {
                id: updatedId
            }
        })
        .then(res.redirect('/customerData'))
}

exports.deleteCustomerData = async (req, res, next) => {
    var index = req.body.delete;

    await customer.destroy({
        where: { id: index }
    })
    res.redirect('/customerData')
}

exports.getData = (req, res, next) => {
    customer.findAll()
        .then(result => {
            res.render('customerTable', {
                data: result
            })
        })
}