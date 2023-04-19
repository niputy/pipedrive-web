import React, {useState, useEffect} from 'react';
import './styles/App.css';
import {Header, CardList, Footer} from './components';
import {useFetching} from "./hooks/useFetching";
import PersonApi from "./api/PersonApi";
import Loader from './components/ui/loader/Loader';
import {reorder} from './utils/helpers'

function App() {
  const [persons, setPersons] = useState([]);
  const [fetchPersons, isLoading, error] = useFetching(async () => {
    const res = await PersonApi.getAll();
    setPersons(res)
  })

  useEffect(() => {
    fetchPersons()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="app-container">
      <Header />
      <h1>People's List</h1>
      
      {error && <h1 className='error-text'>Something went wrong, please try again.</h1>}
      {isLoading && <Loader/>}

      <CardList persons={persons} deletePerson={deletePerson} onDragEnd={onDragEnd}  />
      <Footer />

    </div>
  );

  function onDragEnd(result) {
    const { destination, source} = result;
    if (!destination) {
      return;
    }
    if (destination.index === source.index) {
      return;
    }

    const newPersons = reorder(
      persons,
      source.index,
      destination.index
    );
    setPersons(newPersons)
  }

  async function deletePerson(personId) {
    const newPersons = persons.filter(person => {
      return person.id !== personId;
    });
    setPersons(newPersons)
    await PersonApi.deleteOne(personId);
  }
}

export default App;
