const router = require('express').Router()

const {
    getAllContacts,
    createContact
} = require('./contactController')
// const { getAllContacts } = require('./Contacts')

router.get('/', getAllContacts)
router.post('/', createContact)
// router.post('/')
// router.get('/:id')
// router.put('/:id')
// router.delete('/:id')

module.exports = router