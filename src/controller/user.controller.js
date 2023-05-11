const express = require('express')
const { getAllUsers, getUsersById, createUser, updataData, deleteData } = require('../service/user.service')

const router = express.Router()

router.get('/', (req, res) => {
    try {
        const data = getAllUsers()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.get('/:id', (req, res) => {
    try {
        const { id } = req.params
        const data = getUsersById(id)
        res.status(200).send(data)
    } catch (er) {
        res.status(404).send(er.message)
    }
})

router.post('/', (req, res) => {
    try {
        const { name, surname, email, pwd } = req.body
        const data = createUser(name, surname, email, pwd)
        res.status(201).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.put('/:id', (req, res) => {
    try {
        const { id } = req.params
        const { name, surname, email, pwd } = req.body
        const data = updataData(id, name, surname, email, pwd)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

router.delete('/:id', (req, res) => {
    try {
        const { id } = req.params
        const { name, surname, email, pwd } = req.body
        const data = deleteData(id, name, surname, email, pwd)
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = { router }