
import React, {useState} from 'react';
import Button from "./ui/button/Button";
import Input from "./ui/input/Input";

const Form = ({create}) => {
    const initialPerson = {
        name: '',
        email: '',
        phone: ''
    }

    const [person, setPerson] = useState(initialPerson);
    const [errorText, setErrorText] = useState('');
    const addNewPost = (e) => {
        e.preventDefault()
        if (hasErrors()) return;
        
        create(person)
        // refresh form for new person
        setPerson(initialPerson)
        setErrorText('');
    }

    return (
        <form>
            <Input
                value={person.name}
                onChange={e => setPerson({...person, name: e.target.value})}
                type="text"
                placeholder="Full Name"
            />
            <Input
                value={person.email}
                onChange={e => setPerson({...person, email: e.target.value})}
                type="text"
                placeholder="Email"
            />
            <Input
                value={person.phone}
                onChange={e => setPerson({...person, phone: e.target.value})}
                type="text"
                placeholder="Phone Number"
            />
            {errorText ? <h4 className='error-text'>{errorText}</h4> : null}

            <Button onClick={addNewPost}>Create Person</Button>
        </form>
    );

    function hasErrors() {
        if (!person.name) {
            setErrorText('Name is empty!')
            return true;
        }        
        if (!person.email) {
            setErrorText('Email is empty!')
            return true;
        }
        // eslint-disable-next-line no-useless-escape
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regex.test(person.email)) {
            setErrorText('Email is not valid!')
            return true;
        }
        if (!person.phone) {
            setErrorText('Phone is empty!')
            return true;
        }
    }
};

export default Form;