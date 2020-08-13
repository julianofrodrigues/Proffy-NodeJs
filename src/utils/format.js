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

function getSubject(subjectNumber){
    // const position = +subjectNumber - 1
    return subjects[+subjectNumber - 1]
}

function convertHoursToMinutes(time){
    const [hour, minutes] = time.split(":").map(string=>parseInt(string))
    return hour * 60 + minutes
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}