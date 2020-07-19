import React from 'react';
import Card from './Card'
import contacts from './contacts'
import Avatar from './Avatar'

function App() {
  return (
    <div>
      <h1 className='heading'>My Contacts</h1>
      <Avatar img='https://beamstart.com/API/v6.0/index.php?system=images&type=avatar&profileid=254394&width=960' />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        phoneNumber={contacts[0].phone}
        email={contacts[0].email} />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        phoneNumber={contacts[1].phone}
        email={contacts[1].email} />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        phoneNumber={contacts[2].phone}
        email={contacts[2].email} />
    </div>
  )
}
export default App;