const { app, BrowserWindow, ipcMain, Menu } = require("electron");
const path = require("path");
const url = require("url");
const { channels } = require("../src/shared/constants");
const open = require("open");

let mainWindow;
const menuTemplate = [
  {
    label: "CourseSearch",
    submenu: [
      {
        label: "Quit",
        click: () => {
          app.quit();
        }
      },
      {
        label: "Contribute",
        click: () => {
          open("https://www.google.com");
        }
      }
    ]
  }
];

function createWindow() {
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, "../index.html"),
      protocol: "file:",
      slashes: true
    });
  mainWindow = new BrowserWindow({ width: 800, height: 600, resizable: false });
  mainWindow.loadURL(startUrl);
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
  const menu = Menu.buildFromTemplate(menuTemplate);
  app.setApplicationMenu(menu);
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on(channels.APP_INFO, event => {
  event.sender.send(channels.APP_INFO, {
    appName: app.getName(),
    appVersion: app.getVersion()
  });
});
