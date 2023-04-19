import React from 'react'
import '../styles/Card.css';
import { CgOrganisation, CgTrash } from 'react-icons/cg';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({person, index, onClick, deletePerson}) => {

  return (
    <Draggable key={person.id} draggableId={person.id.toString()} index={index}>
    {(provided) => (
        <div 
        onClick={onClick}
        className='card-container' 
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        >
          <div>
            <h2>{person.name}</h2> 
            <div className='organisation'>
                <CgOrganisation className='icon'/>
                <h3 className='text'>{person.org_name}</h3> 
            </div>
          </div>
          <div onClick={(e) => {
            e.stopPropagation(); // not show details modal
            deletePerson(person.id)
          }}>
            <CgTrash className='bin'/>
          </div>
        </div>
    )}
    </Draggable>
  )

}

export default Card