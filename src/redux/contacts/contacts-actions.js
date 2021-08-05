import shortid from 'shortid';
import types from './contacts-types';

const formSubmitHandler = (name, number) => ({
    type: types.ADD,
    payload: { id: shortid.generate(), name, number }
});


const onDeleteContact = contactId => ({
    type: types.DELETE,
    payload: contactId,
});




export default { formSubmitHandler, onDeleteContact };