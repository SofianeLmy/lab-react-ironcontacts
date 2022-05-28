import './App.css';
import contact from './contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(contact.slice(0, 5));

  const updatedContact = () => {
    const newA = Math.floor(Math.random() * contact.length);
    const updatedContact = [...contacts, contact[newA]];

    setContacts(updatedContact);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button>Add Random Contact</button>
      <table>
        <th>Pictures</th>
        <th>Name</th>
        <th>Popularity</th>
      </table>
      {contacts.map((contact) => {
        return (
          <table>
            <tbody>
              <tr>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} width="50" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar ? 'yes' : 'no'}</td>
                <td>{contact.wonEmmy ? 'yes' : 'no'}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default App;
