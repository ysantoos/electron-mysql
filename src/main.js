const {BrowserWindow} = require('electron')
let window

function createwindow(){
    window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    window.loadFile('src/ui/index.html')
}

module.exports = {
    createwindow
}