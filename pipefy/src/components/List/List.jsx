import React from 'react'
import { Container } from './styles.jsx'
import { MdAdd } from 'react-icons/md'
import Card from '../Card/Card'


export default ({data, index: listIndex}) => {
    return(
        <>
        <Container done = {data.done}>
            <header>
                <h2>{data.title}</h2>
                {data.creatable && (
                    <button>
                        <MdAdd size = {24} color = '#FFF' /> 
                    </button>
                )}
            </header>

            <ul>
                {data.cards.map((card, index) => (
                <Card 
                        key = { card.id} 
                        listIndex = {listIndex}
                        index = {index} 
                        data = {card} 
                    />
                ))}
            </ul>
        </Container>
        </>
    )
}