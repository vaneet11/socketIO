const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    global.io.emit('home', { success: true, message: "hello from socket IO", type: 'info' })
    res.send({ success: true, message: "socket" })
})

router.get('/info', (req, res) => {
    global.io.emit('info', { success: true, message: "info Message from Socket", type: 'info' })

    res.send({ success: true, message: "socket" })
})

router.get('/error', (req, res) => {
    global.io.emit('error', { success: true, message: "Error Message from Socket", type: 'error' })

    res.send({ success: true, message: "socket" })
})
router.get('/success', (req, res) => {
    global.io.emit('success', { success: true, message: "success fully installed socket enjoy", type: 'success' })

    res.send({ success: true, message: "socket" })
})
module.exports = router