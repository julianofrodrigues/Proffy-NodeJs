//Server
const express = require('express')
const server = express()
const { Pagelanding, PageStudy, PageGiveClasses, saveClasses } = require('./pages.js')

//Template Engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

server.use(express.static('public'))
//receber dados
server.use(express.urlencoded({extended: true}))
//Init and Config Server
server.get('/', Pagelanding)
server.get('/study', PageStudy)
server.get('/give-classes', PageGiveClasses)

server.post('/save-classes', saveClasses)


//Start Server
server.listen(5500, console.log('Sou um com a força!'))


