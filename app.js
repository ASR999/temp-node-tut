const http = require('http')

const server = http.createServer((req,res) => {

    res.write('MIIIIRACLLE MIRACLE LAUNDE');
    res.end()

})

server.listen(5000)