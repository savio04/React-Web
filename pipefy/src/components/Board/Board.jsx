import React, {useState} from 'react'
import { Container } from './styles.jsx'
import BoardContext from './Context'
import Produce from 'immer'
import List from '../List/List'
import {loadLists} from '../../services/Api.js'

const data = loadLists()


export default () => {
    
    const [lists, setLists] = useState(data)

    function Move(fromList,toList, from, to){
        setLists(Produce(lists, draft => {
            const dragged = draft[fromList].cards[from]

            draft[fromList].cards.splice(from,1)
            draft[toList].cards.splice(to,0,dragged)
        }))
    }

    return(
        <BoardContext.Provider value = {{lists, Move}}>
            <Container>
                {lists.map((list, index) => <List key = {list.title} index = {index} data = {list} />)}
            </Container>
        </BoardContext.Provider>
    )
}