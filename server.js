const express = require('express');
const routes = require('./server/routes/index');

const app = express();
const port = 3000;

app.set('views', './app/views')
app.set('view engine', 'pug')

app.use(express.static('./app/public'))
app.use(routes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
