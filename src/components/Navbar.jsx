import React from 'react';
import {signOut} from 'firebase/auth'
import {auth} from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Lama Chat</span>
      <div className='user'>
        <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80' alt=''/>
        <span>John</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
