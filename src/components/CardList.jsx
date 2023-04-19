import React, {useState} from 'react'
import '../styles/Card.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Modal from './ui/modal/Modal'
import { Card, Details } from './';

const CardList = ({persons, onDragEnd, deletePerson}) => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div className='card-list-container' ref={provided.innerRef} {...provided.droppableProps}>
              {persons.map((person, index) =>
                <Card 
                  key={person.id} 
                  onClick={() => setSelectedPerson(person)}
                  draggableId={person.id.toString()} // for some reason should be as string
                  person={person}
                  index={index}
                  deletePerson={deletePerson}>
                </Card>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {selectedPerson &&
      <Modal 
        title={'Person Information'}
        visible={selectedPerson} 
        onClose={() => setSelectedPerson(null)}>
        <Details person={selectedPerson}/>
      </Modal>}
    </div>
  )
}

export default CardList