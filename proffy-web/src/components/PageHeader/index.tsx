import React from 'react'
import Back from '../../assets/images/icons/back.svg'
import logoImage from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import './styles.css'

interface PageHeaderprops{
    title: string
}

const PageHeader:React.FC<PageHeaderprops> = (props) => {
    return(
        <header className="page-header">
        <div className="top-bar-container">
            <Link to = '/'>
                <img src= {Back} alt="Voltar"/>
            </Link>
            <img src= {logoImage} alt="logo da proffy"/>
        </div>

        <div className="header-content">
            <strong> {props.title} </strong>
            {props.children}
        </div>
    </header>
    )
}

export default PageHeader