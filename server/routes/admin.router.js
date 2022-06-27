const adminBro = require('admin-bro')
const adminBroExpress = require('admin-bro-expressjs')
const adminBroMongoose = require('admin-bro-mongoose')

const mongoose = require('mongoose')

adminBro.registerAdapter(adminBroMongoose)
const adminbro = new adminBro({

    databases: [mongoose],
    rootPath: "/admin/admin:fefljjirgfg5784xfg5erg754ffg87r5cgr",

})
const router = adminBroExpress.buildRouter(adminbro)

module.exports = router

