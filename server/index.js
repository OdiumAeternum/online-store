//с помощью require можем импортировать модули
require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')

//порт, на котором работает приложение
const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

//app.get('/', (req, res) => {
//    //200 - запрос произошел без ошибок
//    res.status(200).json({message: 'WORKING!!!'})
//})

//фукнция для подключения к БД
const start = async () => {
    try {
        //с помощью этой функции устанавливается подключение к БД
        await sequelize.authenticate()
        await sequelize.sync()
        //указываем какой порт должен прослушать наш сервер
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()


