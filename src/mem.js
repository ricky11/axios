const os = require('os')
const fs = require('fs')
const EventEmitter = require('events')
const emitter = new EventEmitter()
const http = require('http')

var totalMem = (os.totalmem/1073741824).toFixed(2)

var freeMem = (os.freemem/1073741824).toFixed(2)

// console.log(`TotalMem: ${totalMem} GB
// FreeMem: ${freeMem} GB`)

// var files = fs.readdir('.f/',
// function(err, files) {
//     console.log(err)
//     console.log(files)
// })


//listen to emitter
emitter.on('messageLogged', 
() => {
    console.log(`lister called`)
})


//raise emmiter
emitter.emit('messageLogged')

//create web server
const server = http.createServer((req,res) => {
if (req.url ==='/') {
    res.write('hello world')
    res.end()
}
if (req.url ==='/api') {
    res.write(JSON.stringify([1,2,3,4]))
    res.end()
}})


const port = 3001
server.listen(port)

console.log(`Listening on port ${port} `)