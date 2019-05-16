const express = require('express');
const bp = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/angularApp/dist/angularApp'));

require('./routes')(app);

app.listen(3000, () => {
  console.log('listening on 3000');
});
