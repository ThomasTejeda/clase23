let express = require('express')
let path = require('path')
let app = express()
let port = 3000

app.use(express.static(path.join(__dirname,'public')))

/* app.get('/', (req,res) => res.send("Bienvenidos a nuestra pagina")) */
app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')))

app.get('/contacto',(req,res) => res.sendFile(path.resolve(__dirname,'views','contacto.html')))

app.get('/login',(req,res) => res.sendFile(path.resolve(__dirname,'views','login.html')))

app.get('/register',(req,res)=> res.sendFile(path.resolve(__dirname,'views','register.html')))

app.listen(port, () => console.log(`Servidor levantado con exito en http://localhost:${port}`))