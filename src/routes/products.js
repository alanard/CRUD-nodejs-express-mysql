// 2

const express = require('express')
const router = express.Router()
// untuk import method yang ada di /controller/product.js
const productsController = require('../controllers/product')

router
  // Get digunakan untuk mengambil data (mengambil data dari controller yang sudah dibuat)
  .get('/', productsController.getAllProduct)
  .get('/:id', productsController.getProductById)
  // Post untuk memposting data/meng-insert data
  .post('/', productsController.insertProduct)
  // Patch digunakanu untuk mengupdate data
  .patch('/:id', productsController.updateProduct)
  // Digunakan untuk mendelete data
  .delete('/:id', productsController.deleteProduct)
module.exports = router

// =============================
//   Bisa juga menerima inputan parameter atau mengambil data dari nilai yang dimasukan di parameter
// .patch("/:id", (req, res) => {
//     const id = req.params.id;
//     // bisa juga mencari sesuatu melalui url dan di tangkap melalui query string
//     const search = req.query.search;
//     // Dan juga bisa mencari page berapa
//     const page = req.query.page;
//     res.send(
//       "hello  " + id + " Anda Mencari " + search + " Dan Page adalah " + page
//     );
//   })
//   //   Jika kita memanggil tanpa memasukan nilai di parameter ataupun query, maka patch yang ini yang akan tampil
//   .patch("/", (req, res) => {
//     res.send("Hello Ini Otomatis");
//   })
//   .delete("/", (req, res) => {
//     res.send("Hello Ini delete");
//   });
