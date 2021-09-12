const express = require('express');
const path = require('path');
const nocache = require('nocache');

const app = express();

app.use(express.static(__dirname + '/dist/bzaat-epk'));
app.use(nocache());

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+'/dist/bzaat-epk/index.html'));
});

app.listen(process.env.PORT || 8080);