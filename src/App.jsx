import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState(null);
  const [UserId, setUserId] = useState(null);
  const [newName, setNewName] = useState(null);
  const [Idtodelete, setId] = useState(null);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
  }, []);



  const postusers = () => {
    axios.post('https://jsonplaceholder.typicode.com/users', { name: name })
      .then(result => setUsers([...users, result.data]))
  }


  const updateUser = () => {
    axios.put(`https://jsonplaceholder.typicode.com/users/${UserId}`, { name: newName })
      .then(res => console.log(res.data))
  }

  const Deleteuser = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${Idtodelete}`)
    .then(res=>console.log(res.data))
  }
  return (
    <div>
      <h1>All Users</h1>
      {

        users.map((user,i) =>
          <ul>
          
            <li key={i}>{user.name}</li>
          </ul>
        )
      }
      <hr></hr>
      <h2>Create Users</h2>
      <div>
        <label>Username : </label>
        <input type='text' onChange={(val) => setName(val.target.value)} />
        <button onClick={ postusers}>Add</button>
      </div>
      <hr></hr>
      <h2>Update Users</h2>
      <div>
        <h4 >UserID:<span>
          <select onChange={(val)=>{setUserId(val.target.value)}}>
            <option>select ID</option>
              {

                users.map((user) =>
                  
                  <option>{user.id}</option>
                  
              )
              }
          </select>
        </span></h4>


      </div>
      <div>
        <label>Username : </label>
        <input type='text' onChange={(val)=>{setNewName(val.target.value)}} />
        <button onClick={ updateUser}>Update</button>
      </div>
      <hr></hr>
      <h2>Deleting the Users</h2>
      <h4 >Select ID:<span>
          <select onChange={(val)=>{setId(val.target.value)}}>
            <option>select ID</option>
              {

                users.map((user) =>
                  
                  <option>{user.id}</option>
                  
              )
              }
          </select>
      </span></h4>
      <button onClick={Deleteuser}>Delete User</button>
      
      
    </div>
  )
}

 

export default App;
