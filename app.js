let express = require("express")
let path = require("path")
let app = express()
let port = 3000



app.get("/", (req, res) => res.send("Bienvenidos a nuestra pagina"))
app.get("/home",(requ,res) => res.sendFile(path.join(__dirname,"views","contacto","home.html")))

app.get("/contacto",(requ,res) => res.sendFile(path.join(__dirname,"views","contacto.html")))

app.listen(port, () => console.log(`Servidor levantado con exito en http://localhost:${port}`))
