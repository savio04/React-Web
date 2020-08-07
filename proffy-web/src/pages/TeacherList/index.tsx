import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader'
import './styles.css'
import Teacheritem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'

interface Teacher{
    id: number;
    name:string;
    subject: string;
    avatar: string;
    bio: string;
    cost: number;
    whatsapp: string
}

function TeacherList(){

    const [teachers,setteachers] = useState([])
    const [subject, setsubject] = useState('')
    const [week_day, setweekday] = useState('')
    const [time, settime] = useState('')

    // Usando async await
    async function searchTeacherList(e:FormEvent){
        e.preventDefault()

        const response = await api.get('/classes',{
            params:{
                week_day,
                subject,
                time
            }
        })
        setteachers(response.data)
        console.log(response.data)
    }


    return(
        <div id="page-teacher-list" className = 'container'>
           <PageHeader title = 'Estes são os professores disponiveis'>
                <form id="search-teachers" onSubmit = {searchTeacherList}>
                    <Select 
                            name = 'subject' 
                            label = 'Materia' 
                            value = {subject}
                            onChange = {e => {setsubject(e.target.value)}}
                            options = {[
                                {value: 'Artes', label: 'Artes'},
                                {value: 'Biologia', label: 'Biologia'},
                                {value: 'Física', label: 'Física'},
                                {value: 'Matemática', label: 'Matemática'},
                                {value: 'Filosofia', label: 'Filosofia'},
                                {value: 'Sociologia', label: 'Sociologia'},
                                {value: 'Química', label: 'Química'},
                                {value: 'História', label: 'História'},
                                {value: 'Português', label: 'Português'},
                            ]}
                        />
                        <Select 
                            name = 'week_day' 
                            label = 'Dia da semana' 
                            value = {week_day}
                            onChange = {e => {setweekday(e.target.value)}}
                            options = {[
                                {value: '0', label: 'Domingo'},
                                {value: '1', label: 'Segunda-feira'},
                                {value: '2', label: 'Terça-feira'},
                                {value: '3', label: 'Quarta-feira'},
                                {value: '4', label: 'Quinta-feira'},
                                {value: '5', label: 'Sexta-feira'},
                                {value: '6', label: 'Sabado'},
                            ]}
                        />
                        <Input name = 'time' 
                            label = 'Hora' 
                            type = 'time' 
                            value = {time}
                            onChange = {e => {settime(e.target.value)}}
                        />
                        <button type = 'submit'>Pesquisar</button>               
                </form>
           </PageHeader>

           <main>
               {teachers.map((item: Teacher) => {
                   return (
                        <Teacheritem 
                            key = {item.id} 
                            id = {item.id}
                            name =  {item.name} 
                            avatar = {item.avatar} 
                            bio = {item.bio}
                            whatsapp = {item.whatsapp}
                            subject = {item.subject}
                            cost = {item.cost}
                        />
                    )
               })}
           </main>
        </div>
    )
}

export default TeacherList