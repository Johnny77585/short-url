// require packages used in the project
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose') // 載入 mongoose
const exphbs = require('express-handlebars')
mongoose.connect(process.env.MONGODB_URI) // 設定連線到 mongoDB



// 取得資料庫連線狀態
const db = mongoose.connection



// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
// routes setting

app.get('/', (req, res) => {
  res.render('index')
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})