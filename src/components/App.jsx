import React from 'react';
import Card from './Card'

<div>
  <h1>My Contacts</h1>
  <Card
    name='Beyonce'
    img='https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg'
    alt='beyonce_nceavatar_img'
    phoneNumber='+123 456 789'
    email='b@beyonce.com' />
  <Card
    name='Jack Bauer'
    img='https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg'
    alt='jackBauer_avatar_img'
    phoneNumber='+987 654 321'
    email='jack@nowhere.com' />
  <Card />
</div>

export default App;