const {app, BrowserWindow} = require('electron')
const supA = require('superagent')
const cheI = require('cheerio')
let mainWindow

function creatWindow() {
    
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:{
            nodeIntegration: true
        }
    })
    mainWindow.loadFile('address.html')
    // console
    // mainWindow.webContents.openDevTools()
    mainWindow.on('closed', function(){
        mainWindow = null
    })
    // document.getElementById("res").innerHTML = 1111
}

app.on('ready', creatWindow)