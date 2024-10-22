const http = require("http")

const port = 5000

const server = http.createServer((req, res) => {

    const url = req.url

    if(url === "/") {
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write("<h1>Anasayfa</h1>")
    }
    else if(url === "/about"){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write("<h1>Hakkimda</h1>")
    }
    else if(url === "/contact"){
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write("<h1>Iletisim</h1>")
    }
    else{
        res.writeHead(404, {'Content-Type':'text/html'})
        res.write("404 Sayfa bulunamadi")
    }
    
    res.end()

})

server.listen(port, () => {
    console.log(`Sunucu ${port} portunda calisiyor`)
})