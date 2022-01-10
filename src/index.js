
const { createwindow } = require("./main");
const {app} = require('electron')

// require('./database')

app.allowRender
app.whenReady().then(createwindow);
