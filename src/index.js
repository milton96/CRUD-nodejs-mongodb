const app = require("./server");

app.listen(app.get("port"), () => {
  console.log("Servidor en el puerto 4000");
});
