import React from 'react'
import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
import api from '../../services/api'

interface teacherProps{
 
    name:string;
    subject: string;
    whatsapp:string;
    avatar: string;
    bio: string;
    cost: number;
    id: number;

}

const  Teacheritem: React.FC<teacherProps> = (props) =>{

    function onchangeTotal(){
        api.post('/connections',{
            user_id: props.id
        })
    }



    return(
        <article className = 'teacher-item'>
                   <header>
                       <img src= {props.avatar} alt="avatar"/>
                        <div>
                            <strong> {props.name} </strong>
                            <span> {props.subject} </span>
                        </div>
                   </header>
                   <p>

                       {props.bio}
                       {/* Testando se programar é legal
                       <br /><br />
                       e aqui seria algo para colocar sobre mim */}
                   </p>

                   <footer>
                       <p>
                           preço/hora
                           <strong> R$ {props.cost} </strong>
                       </p>
                       <a onClick = {onchangeTotal} href = {`https://api.whatsapp.com/send?phone=${props.whatsapp}`}>
                           <img src= {WhatsappIcon} alt="Contato"/>
                           Entrar em contato
                       </a>
                   </footer>
               </article>
    )
}

export default Teacheritem