const Database = require('./database/db')
const { subjects, weekdays, getSubject, convertHoursToMinutes } = require('./utils/format')

function Pagelanding(req, res){
    return res.render('index.html')
}

async function PageStudy(req, res){
    const filters = req.query

    if ( !filters.subject || !filters.weekdays || !filters.time) {
        return res.render('study.html',{ filters, subjects, weekdays })
    }

    //horas em minutos
    const timeToMinutes =convertHoursToMinutes(filters.time)

    const query = `
        SELECT classes. *, proffys.* 
        FROM  proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekdays}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        );
        AND classes.subject = '${filters.subject}'
    `
    //caso haja erro na hora da consulta
    try{
        const db = await Database
        const proffys = await db.all(query)
        return res.render('study.html', { proffys, subjects, filters, weekdays})
    } catch (error){
        console.log(error)
    }
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

module.exports = {
    Pagelanding,
    PageStudy,
    PageGiveClasses
}