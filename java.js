import http from "http"

const server = http.createServer((req,res)=>{
    console.log("Request received")
    res.end(String(Math.round(Math.random()*100)))
})

server.listen(8081)