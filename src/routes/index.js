const express = require('express')
const router = express.Router()

// Jika ingin menambahkan data cukup tambah disini tanpa perlu mengotori app.js
const productsRoutes = require('./products')
const categoriesRoutes = require('./categories')
const historiesRoutes = require('./histories')
router
  .use('/products', productsRoutes)
  .use('/categories', categoriesRoutes)
  .use('/histories', historiesRoutes)

module.exports = router
