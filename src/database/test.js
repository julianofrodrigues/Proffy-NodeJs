const Database = require('./db')
const createProffy = require('./createProffy')
Database.then(async (db)=>{
        //Inserir dados
        proffyValue = {
            name: 'Juliano',
            avatar: 'https://avatars.githubusercontent.com/u/46505899?v=4',
            whatsapp: '(99) 99999-9999',
            bio: 'Amo Artes',
        }

        classValue = {
            subject: 1,
            cost: '100,00',
            //proffy_id vem do banco
        }

        classScheduleValues = [
            //Class_Id vem do banco
           {    
            weekday: 1,
            time_from: 720,
            time_to: 1220
            }
        ]

        // await createProffy(db, {proffyValue, classValue, classScheduleValues})

        //Consultar os dados inseridos

        //todos proffys
        // const selectedProffys = await db.all('SELECT * FROM  proffys')
        // console.log(selectedProffys)

        //consultar as classes de um proffy e trazer junto os dados do proffy
        // const selectedClassesAndProffys = await db.all(`
        //     SELECT classes. *, proffys.* 
        //     FROM  proffys
        //     JOIN classes ON (classes.proffy_id = proffys.id)
        //     WHERE classes.proffy_id = 1;
        // `)
        // console.log(selectedClassesAndProffys)

        //Consulta filtrada
        const selectedClassesSchedyles = await db.all(`
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = 1
            AND class_schedule.weekday = 1
            AND class_schedule.time_from <= 720
            AND class_schedule.time_to > 520
        `)
        console.log(selectedClassesSchedyles)


})