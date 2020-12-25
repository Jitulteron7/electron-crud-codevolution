const electron=require("electron");
const app=electron.app;
const BrowserWindow=electron.BrowserWindow;
const path=require("path");
const url=require("url");
const createWindow=()=>{
    let win=new BrowserWindow({
        width:1200,
        height:800,
        webPreferences:{
            nodeIntegration:true,
        },
        frame:false
    });

    win.loadURL(url.format({
        pathname:path.join(__dirname,"index.html"),
        protocol:"file",

    }));

    win.on("close",()=>{
        win=null;
    })
}

app.on("ready",createWindow);