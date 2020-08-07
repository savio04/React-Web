import React,{useState, FormEvent} from 'react'
import PageHeader from '../../components/PageHeader'
import './styles.css'
import Input from '../../components/Input'
import WarningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'


function TeacherForm(){

    const history = useHistory()

    const [scheduleItems, setscheduleItem] = useState([
        {week_day: 0, from: '', to: ''}
    ])

    function addNew(){
        setscheduleItem([
            ...scheduleItems,
            {week_day: 0, from: '', to: ''}
        ])
    }

    const [name,setname] = useState('')
    const [avatar,setavatar] = useState('')
    const [whatsapp,setwhatsapp] = useState('')
    const [bio,setbio] = useState('')

    const [subject,setsubject] = useState('')
    const [cost,setcost] = useState('')

    function setSheduleinputs(position: number, field: string, value:string ){

        const updateScheduleItems = scheduleItems.map((item,index) => {
            if(index === position){
                return {...item, [field]: value}
            }

            return item
        })

        setscheduleItem(updateScheduleItems)
        console.log(updateScheduleItems)
    }

    // Usando then e cacth
    function createusario(e: FormEvent){
        e.preventDefault()

        api.post('/classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso')
            history.push('/')
        }).catch((erro) => {
            alert('Erro no cadastro')
            console.log(erro)
        })
    }


    return(
        <div id="page-teacher-form" className = 'container'>
            <PageHeader 
            title = 'Que incrivel que você quer dar aula'
            description = 'O primeiro passo é preencher este formulario'/>

            <main>
                <form onSubmit = {createusario}>
                    {/* formulario com fieldset */}
                    <fieldset> 
                        <legend>Seus dados</legend>
                        
                        <Input name = 'name' 
                            label = 'Nome Completo' 
                            value ={name} 
                            onChange = {(e) =>{setname(e.target.value)}}
                        />
                        <Input name = 'avatar' 
                            label = 'avatar' 
                            value = {avatar}
                            onChange = {e => {setavatar(e.target.value)}}
                        />
                        <Input name = 'whatsapp' 
                            label = 'whatsapp'
                            value = {whatsapp}
                            onChange = {e => {setwhatsapp(e.target.value)}}
                        />
                        <Textarea name = 'bio' 
                            label = 'Biografia'
                            value = {bio}
                            onChange = {e => {setbio(e.target.value)}}
                        />
                    </fieldset>

                    <fieldset> 
                        <legend>Sobre a aula</legend>
                        
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
                        <Input name = 'cost' 
                            label = 'Custo da aula por hora' 
                            value ={cost}
                            onChange = {e => {setcost(e.target.value)}}
                        />
                    </fieldset>

                    <fieldset> 
                        <legend>
                            Horários Disponiveis
                            <button type = 'button' onClick = {addNew} >+ Novo horário</button>
                        </legend>
                        
                        {scheduleItems.map((item,index) => {
                            return (
                                <div className="schedule_item" key = {item.week_day}>
                                    
                                    <Select 
                                        name = 'week_day' 
                                        label = 'Dia da semana'
                                        value = {item.week_day} 
                                        onChange = {e => setSheduleinputs(index,'week_day',e.target.value)}
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

                                    <Input name = 'from' 
                                        label = 'Das' 
                                        type ='time' 
                                        value = {item.from}
                                        onChange = {e => setSheduleinputs(index,'from',e.target.value)}
                                    />
                                    <Input name ='to' 
                                        label = 'Até' 
                                        type = 'time' 
                                        value = {item.to}
                                        onChange = {e => setSheduleinputs(index,'to',e.target.value)}
                                    />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src= {WarningIcon} alt="Aviso importante"/>
                            Importante <br />
                            Preencha todos os dados
                        </p>
                        <button type = 'submit'>Salvar Cadastro</button>
                    </footer>
                </form>
            </main>
         </div>
    )
}

export default TeacherForm