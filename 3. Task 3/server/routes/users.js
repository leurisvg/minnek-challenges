const { Router } = require('express');
const { createUser } = require('../controllers/users');

const router = Router();

router.post('/', createUser);

module.exports = router;
