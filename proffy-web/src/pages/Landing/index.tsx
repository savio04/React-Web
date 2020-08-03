import React from 'react'
import Logo from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import givClassIcon from '../../assets/images/icons/give-classes.svg'
import purpleIcon from '../../assets/images/icons/purple-heart.svg'

// Css
import './styles.css'



function Landing(){
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
                    <a href="" className = 'study'>
                        <img src= {studyIcon} alt="Estudar"/>
                        Estudar
                    </a>

                    <a href="" className = 'give-class'>
                        <img src= {givClassIcon} alt="Dar aulas"/>
                        Dar aulas
                    </a>
                </div>

                <span className = 'total-connections'>
                    Total de 200 conexões ja realizadas
                    <img src= {purpleIcon} alt="coração roxos"/>
                </span>
            </div>
        </div>
    )
}

export default Landing