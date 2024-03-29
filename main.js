const {app, BrowserWindow} = require("electron");
const path = require("path");
const url = require("url");

// Keep a global reference to the window object otherwise the window will be closed when JavaScript
// is garbage collected
let win;

function createWindow () {
  // Create the browser window
  win = new BrowserWindow({width: 800, height: 600});

  // Load the p5 sketch in the public folder
  win.loadURL(url.format({
    pathname: path.join(__dirname, "public", "index.html"),
    protocol: "file:",
    slashes: true
  }));

  // Emitted when the window is closed.
  win.on("closed", () => {
    // Dereference the window object, so it can be closed
    win = null;
  })
}

// This method will be called when Electron has finished initialization and is ready to create
// browser windows. Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar to stay active until the user quits
  // explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});