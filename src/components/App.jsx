import React from 'react';
import Card from './Card'
import contacts from './contacts'
import Avatar from './Avatar'

function createCard(contacts) {
  return (
    <Card
      key={contacts.id}
      name={contacts.name}
      img={contacts.imgURL}
      phoneNumber={contacts.phone}
      email={contacts.email}
    />
  )
}

function App() {
  return (
    <div>
      <h1 className='heading'>My Contacts</h1>
      <Avatar img='https://beamstart.com/API/v6.0/index.php?system=images&type=avatar&profileid=254394&width=960' />
      {contacts.map(createCard)}
    </div>
  )
}
export default App;