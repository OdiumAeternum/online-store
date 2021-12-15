const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

//для того, чтобы создать пользователя
router.post('/registration', userController.registration)
router.post('/login', userController.login)
//для того, чтобы узнать авторизован пользователь или нет
router.get('/auth', userController.check)

module.exports = router