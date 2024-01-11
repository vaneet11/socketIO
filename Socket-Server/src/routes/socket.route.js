const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    global.io.emit('home', { success: true, message: "Hello", type: 'info' })
    res.send({ success: true, message: "socket" })
})

router.get('/info', (req, res) => {
    global.io.emit('info', { success: true, message: "info", type: 'info' })

    res.send({ success: true, message: "socket" })
})

router.get('/error', (req, res) => {
    global.io.emit('error', { success: true, message: "error", type: 'error' })

    res.send({ success: true, message: "socket" })
})
router.get('/success', (req, res) => {
    global.io.emit('success', { success: true, message: "success", type: 'success' })

    res.send({ success: true, message: "socket" })
})
module.exports = router