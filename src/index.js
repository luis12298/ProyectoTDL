const express = require("express");
const path = require("path");
const app = express();

const server = require("http").Server(app);
const socketio = require("socket.io")(server);

app.set("port", process.env.port || 3001);

//Ejecutamos la función de sockets.js
require("./sockets")(socketio);

//Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

//Lanzamos el servidor
server.listen(app.get("port"), "192.168.88.166", () => {
  console.log("Servidor en el puerto ", app.get("port"));
});
