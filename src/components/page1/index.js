import React from 'react';
import Sidebar from '../Sidebar';

const page1 = () => {
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
          <h2>Pge 1</h2>
          <p>page 1</p>
        </div>
      <footer>
        <p>Footer</p>
      </footer>
      </div>
    </div>
  );
};

export default page1;
