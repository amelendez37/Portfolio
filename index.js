const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use(express.static('./client/public'));

app.listen(port);
