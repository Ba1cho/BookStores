const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const bookRouter = require('./bookRouter')
const authRoutes = require('./authRoutes')
const genreRouter = require('./genreRouter')

router.use('/user', userRouter)
router.use('/book',bookRouter)
router.use('/auth',authRoutes)
router.use('/genre',genreRouter)

module.exports = router