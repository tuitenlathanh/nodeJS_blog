const exphbs = require('express-handlebars');
const morgan = require('morgan')
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const routes = require('./routes');
app.use(express.static(path.join(__dirname, 'public')));
//logger
app.use(morgan('combined'))
// templates engine
app.engine('hbs', exphbs.engine({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// khỏi tạo tuyến đường
routes(app);



app.listen(port, () => {
  console.log(`init app listening on port ${port}`)
})