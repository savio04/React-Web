import React, {useRef, useContext} from 'react'
import { Container } from './styles.jsx'
import { Label } from './styles'
import { useDrag, useDrop } from 'react-dnd'
import BoardContext from '../Board/Context'

export default ({data, index, listIndex}) => {

    const ref = useRef()
    const {Move} = useContext(BoardContext) 

    const [{isDragging}, dragRef] = useDrag({
        item: { type: 'CARD', index, listIndex},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        })
    })


    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover: (item, monitor) => {
            
            const draggedListIndex = item.listIndex 
            const tartgetListIndex = listIndex

            const draggedIndex = item.index
            const tartgetIndex = index

            if(draggedIndex === tartgetIndex && draggedListIndex === tartgetListIndex){
                return
            }

            const targetSize = ref.current.getBoundingClientRect()
            const targetCenter = (targetSize.bottom - targetSize.top) / 2

            const draggedOffset = monitor.getClientOffset()
            const draggedTop = draggedOffset.y - targetSize.top

            if(draggedIndex < tartgetIndex && draggedTop < targetCenter){
                return
            } 

            if(draggedIndex> tartgetIndex && draggedTop > targetCenter){
                return
            }

            Move(draggedListIndex,tartgetListIndex , draggedIndex, tartgetIndex)
            item.index = tartgetIndex
            item.listIndex =  tartgetListIndex
        }
    })

        dragRef(dropRef(ref))

    return(
        <>
        <Container ref = {ref} isDragging = {isDragging}>
            <header>
                {data.labels.map(label => <Label color = {label} key = {label} />)}
            </header>
            <p> {data.content} </p>
            { data.user && <img src={data.user} alt=""/>}
        </Container>
        </>
    )
}