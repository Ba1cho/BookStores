const Router = require('express')
const router = new Router()
const genreController = require('../controller/genreController')
//const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', genreController.create)
router.get('/', genreController.getAll)

module.exports = router