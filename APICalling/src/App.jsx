import { useState,useEffect } from 'react';
import {getPosts, getRandomUser} from "../API/index";
import './App.css';
import PostCard from "../components/PostCard";
import UserCard from "../components/UserCard";

function App() {

  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  
  useEffect(()=>{
    getPosts().then(posts => setData(posts));
  },[])

  useEffect(()=>{
    getRandomUser().then(user => setUserData(user.results[0]));
  }, []);

  return (
   <div className="App">
   {userData &&  <UserCard data = {userData}/>  } {/* will only render when data is not null */}


    {
      data ? data.map((e) => <PostCard title = {e.title} body = {e.body} /> ) : <p>No data recieved</p>
    }
   </div>
  )
}

export default App
