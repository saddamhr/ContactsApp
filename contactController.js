const { connect } = require('./contactRoutes')
const contacts = require('./Contacts')

exports.getAllContacts = (req, res) => {
    res.json(contacts.getAllContacts())
}

exports.createContact = (req, res) => {
    const { name, phone, email } = req.body
    const contact = contacts.createContact({
        name,
        phone,
        email
    })

    res.json(contact)
}

exports.getContactById = (req, res) => {
    let { id } = req.params
    id = parseInt(id)

    let contact = contacts.getContactsById(id)
    res.json(contact)
}

exports.updateContact = (req, res) => {
    let {id } = req.params
    id = parseInt(id)

    let {name, email, phone } = req.body
    contacts.updateContactById(id, {
        name,
        email,
        phone
    })
    res.json(connect)
}

exports.deleteContact = (req, res) => {
    let {id} = req.params
    id = parseInt(id)

    let contact = contacts.deleteContactById(id)
    res.json(connect)
}