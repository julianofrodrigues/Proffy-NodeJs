//Server
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

//Template Engine
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

server.use(express.static('public'))

function Pagelanding(req, res){
    return res.render('index.html')
}

//Datas
const proffys = [
       {
       name: 'Diego Fernandes',
       avatar: 'https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4',
       whatsapp: '',
       bio: 'Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.',
       subject: 'Química',
       cost: '20,00',
       weekday: [0],
       time_from: [720],
       time_to: [1220]
    },
    {
        name: 'Liliane',
        avatar: 'https://scontent.fstu5-1.fna.fbcdn.net/v/t1.0-9/41616362_122278575395512_5486921471982829568_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=50G6oelCf8cAX9Tbof0&_nc_ht=scontent.fstu5-1.fna&oh=d8d6d8ac9bf2d56ed2fa57ea028cd928&oe=5F535197',
        whatsapp: '',
        bio: 'Amo Artes',
        subject: 'Artes',
        cost: '100,00',
        weekday: [0],
        time_from: [720],
        time_to: [1220]
     },
]

const subjects =[
    'Artes',
    'Biologia',
    'Ciências',
    'Educação física',
    'Física',
    'Geografia',
    'História',
    'Matemática',
    'Português',
    'Química',
]

const weekdays = [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
]


//functions

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[+subjectNumber - 1]
}
function PageStudy(req, res){
    const filters = req.query
    return res.render('study.html',{ proffys, filters, subjects, weekdays })
}

function PageGiveClasses(req, res){
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    //Verificação de dados(data)
    if(isNotEmpty){
    //Adicionar a lista
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect('/study')
    }
    return res.render('give-classes.html', {subjects, weekdays})
}

//Init and Config Server
server.get('/', Pagelanding)

server.get('/study', PageStudy)

server.get('/give-classes', PageGiveClasses)




//Start Server
server.listen(5500, console.log('Sou um com a força!'))


