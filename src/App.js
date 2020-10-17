import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import {selectUser} from "./features/userSlice";
import Login from './components/login/Login';
import { auth } from './firebase';
import {login,logout} from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const  dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log("user is",authUser);
      if (authUser){
        dispatch((login)({
          uid: authUser.id,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }));

      }else{
        dispatch(logout());

      }
    })

  },[dispatch]);
  return (
    <div className="App">
      {user ?(
        <>
          <Sidebar/>
          <Chat/>
          </>
      ):(
       <Login/>

      )}
      {/* // <Sidebar/>
      // <Chat/> */}
      </div>
  );
}

export default App;
