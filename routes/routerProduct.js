const router = require('express').Router(),
    productController = require('../controller/productController.js')

router.get('/all', productController.all)
router.get('/edit/:id', productController.edit)
router.post('/add', productController.add)
router.delete('/remove/:id', productController.remove)








module.exports = router