import React, {useState,useEffect} from 'react'
import Logo from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import givClassIcon from '../../assets/images/icons/give-classes.svg'
import purpleIcon from '../../assets/images/icons/purple-heart.svg'

import { Link } from 'react-router-dom'

// Css
import './styles.css'
import api from '../../services/api'



function Landing(){

    // Consumindo api com axios

    const[totalConnections,settotalConnections] = useState(0)

    // useEffect é exucutado toda vez que a pagina é recarregada
    useEffect(() => {
        api.get('/connections').then(response => {
            const {total} = response.data
            settotalConnections(total)
        })
    }, [])

    // consumindo api com axios

    return(
        <div id = 'page-landing'>
            <div id = 'page-landing-content' className="contianer">
                <div className="logo-container">
                    <img src= {Logo} alt="Logo proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img 
                    className = 'hero-image' 
                    src = {landingImg} 
                    alt = "plataforma de estudos"
                />

                <div className="buttons-container">
                    <Link to ="/study" className = 'study'>
                        <img src= {studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-class" className = 'give-class'>
                        <img src= {givClassIcon} alt="Dar aulas"/>
                        Dar aulas
                    </Link>
                </div>

                <span className = 'total-connections'>
                    Total de {totalConnections} conexões ja realizadas
                    <img src= {purpleIcon} alt="coração roxos"/>
                </span>
            </div>
        </div>
    )
}

export default Landing