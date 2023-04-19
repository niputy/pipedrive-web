import React, {useState} from 'react'
import '../styles/Header.css';
import Button from './ui/button/Button'
import Modal from './ui/modal/Modal'
import Form from './Form'
import PersonApi from "../api/PersonApi";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const createPerson = async (newPerson) => {
    await PersonApi.postOne(newPerson);
    // setPersons([...persons, newPerson])
    setShowModal(false);
  }
  return (
    <div className="header-container">
      <h2>pipedrive</h2>

      <Button type="button" onClick={() => setShowModal(true)} >
        Add Person
      </Button>

      <Modal title={'Add Person'} visible={showModal} onClose={() => setShowModal(false)}>
        <Form create={createPerson}/>
      </Modal>
    </div>
  )
}

export default Header