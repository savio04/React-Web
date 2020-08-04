import React from 'react'
import PageHeader from '../../components/PageHeader'
import './styles.css'
import Teacheritem from '../../components/TeacherItem'


function TeacherList(){
    return(
        <div id="page-teacher-list" className = 'container'>
           <PageHeader title = 'Estes são os professores disponiveis'>
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="week-day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Horario</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
           </PageHeader>

           <main>
               <Teacheritem />
               <Teacheritem />
               <Teacheritem />
               <Teacheritem />

           </main>
        </div>
    )
}

export default TeacherList