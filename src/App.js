import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';

let contactArr = contacts.slice(0, 5);

function App() {
  const [contactsValue, setContactsValue] = useState(contactArr);

  const addRandomContact = () => {
    const contactsCopy = [...contactsValue];
    contactsCopy.push(
      contacts[Math.floor(Math.random() * contacts.length) + 4]
    );
    setContactsValue(contactsCopy);
  };

  const sortName = () => {
    const contactsCopy = [...contactsValue];
    contactsCopy.sort((a, b) => a.name.localeCompare(b.name));
    setContactsValue(contactsCopy);
  };

  const sortPopularity = () => {
    const contactsCopy = [...contactsValue];
    contactsCopy.sort((a, b) => b.popularity - a.popularity);
    setContactsValue(contactsCopy);
  };

  const removeContact = (id) => {
    const contactsCopy = [...contactsValue];
    const updatedContacts = contactsCopy.filter((contact) => {
      return contact.id !== id;
    });
    setContactsValue(updatedContacts);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={() => addRandomContact()}>Add random contact</button>
      <button onClick={() => sortName()}>Sort by Name</button>
      <button onClick={() => sortPopularity()}>Sort by Popularity</button>
      <table>
        <th>Pictures</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
      </table>

      {contactsValue.map((contact) => {
        return (
          <table>
            <tbody>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} width="50" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? '🏆' : ''}</td>
                <td>{contact.wonEmmy ? '🏆' : ''}</td>
                <td>
                  <button onClick={() => removeContact(contact.id)}>Remove</button>
                </td>
                {/* <td><button>Remove this contact</button></td> */}
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default App;
