const express = require('express');
const multer = require('multer');
const path = require('path');

const router = require('./routes/router');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const app = express();
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(' ').join('-');
    cb(null, fileName)
  }
});

app.set('view engine', 'ejs');
app.set('views', 'view');

app.use(express.static('views'));
app.use('/images',express.static(path.join(__dirname,'images')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({ storage: fileStorage }).single('image'));

app.use('/', router);

sequelize.sync()
  .then()
  .catch(err => console.log(err))

app.listen(7777);