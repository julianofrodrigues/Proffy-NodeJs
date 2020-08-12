//Server
const express = require('express')
const server = express()
const { Pagelanding, PageStudy, PageGiveClasses } = require('./pages')

//Template Engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

server.use(express.static('public'))

//Init and Config Server
server.get('/', Pagelanding)
server.get('/study', PageStudy)
server.get('/give-classes', PageGiveClasses)

//Start Server
server.listen(5500, console.log('Sou um com a força!'))


