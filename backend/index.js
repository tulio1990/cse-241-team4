var express = require('express');
var app = express();
const routes = require('./routes');
const port = process.env.PORT || 8080

app.use('/', routes);

app.listen(port, () => {
    console.log(`Server running in ${port} port`);
})