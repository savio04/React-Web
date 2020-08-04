import React from 'react'
import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function Teacheritem(){
    return(
        <article className = 'teacher-item'>
                   <header>
                       <img src="https://avatars1.githubusercontent.com/u/57267878?s=460&u=5b3ec3c60c8cbb15501e64bd122ad1a30cfb68c4&v=4" alt=""/>
                        <div>
                            <strong>Sávio araújo</strong>
                            <span>Física</span>
                        </div>
                   </header>
                   <p>
                       Testando se programar é legal
                       <br /><br />
                       e aqui seria algo para colocar sobre mim
                   </p>

                   <footer>
                       <p>
                           preço/hora
                           <strong>R$ 20</strong>
                       </p>
                       <button type = 'button'>
                           <img src= {WhatsappIcon} alt="Contato"/>
                           Entrar em contato
                       </button>
                   </footer>
               </article>
    )
}

export default Teacheritem