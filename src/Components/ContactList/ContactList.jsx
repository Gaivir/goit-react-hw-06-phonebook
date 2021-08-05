
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
    contacts.map(({ id, name, number }) => (
        <ul>
            <li key={id} className={styles.list}>{name}: {number}
            <button onClick ={()=>onDeleteContact(id)}>Delete</button></li>
        </ul>
    ))
);


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};



const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
onDeleteContact: () => null,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);