const express = require('express')

const defaultRoutes = require('./default.route')
const socketRoutes = require('./socket.route')
const router = express.Router()



const indexRoutes = [
    { path: '/', route: defaultRoutes },
    { path: '/socket', route: socketRoutes },

]

indexRoutes.forEach((route) => {
    router.use(route.path, route.route)
})


module.exports = router