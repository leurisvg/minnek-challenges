const { Router } = require('express');

const { upload } = require('../image_middleware/upload_image');
const { createProduct, getProducts } = require('../controllers/products');

const router = Router();

router.post('/', upload.single('image'), createProduct);
router.get('/', getProducts);

module.exports = router;
