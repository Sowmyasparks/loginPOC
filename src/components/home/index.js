import React from 'react';
import Sidebar from '../Sidebar';

const home = () => {
  return (
    <div className='main-div'>
        <div>
        <Sidebar>
          <h2>Sidebar</h2>
        </Sidebar>
        </div>
        
        <div className="content">
        <header>
        <h1>Header</h1>
      </header>
      <div >
     
        <main>
          <h2>Content</h2>
          <p>Today is a beautiful day. The sun is shining, and the birds are chirping. It's the perfect day to go outside and enjoy nature. Take a walk, have a picnic, or simply relax and bask in the warmth of the sun.</p>
        </main>
      </div>
      <footer>
        <p>Footer</p>
      </footer>
            
            </div>
    </div>
  );
};

export default home;
