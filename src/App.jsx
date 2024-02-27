import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import './styles/App.css'
import { useParams } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([]);
  const [namescopy, setNamescopy] = useState([]);
  const [updateid, setUpdateid] = useState();
  const [deletedid, setDeletedid] = useState();

   useEffect(() => {
     fetch();
  }, []);
  const [datas, setDatas] = useState({
    create: "",
    inupdate:"",
    iddelete:""
  })
  const fetch = async () => {
    try {
      
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const data = response.data.map(val => val.name);
      setUsers(data);
      setNamescopy(data.slice());

    }
    catch (e) {
      console.log(e)
    }
  };

  const AddHandler = () => {
    if (datas.create)
    {
      
      setDatas({...datas,create:""})
      namescopy.push(datas.create);
      }
  }
  const updateHandler = () => {
    if (datas.inupdate)
    {
      const newnames = [...namescopy];
      newnames[updateid] = datas.inupdate;
      setNamescopy(newnames);
      setDatas({...datas,inupdate:""})
      }
  }
  const Deletehandler = () => {
    const newnames = [...namescopy];
    newnames.splice(deletedid, 1);
    setNamescopy(newnames)
  }

  
  return (
    <div id='container'>
      <h1>All Users</h1>
      <ul>
        {
          namescopy.map((user,i) => 
            <li key={i}>{user}</li>
          )
        }
            
      </ul>
      
      <hr></hr>
      <h2>Create Users</h2>
      <div>
        <label>Username : </label>
        <input type='text'
          value={datas.create}
          required
          onChange={(e) => setDatas({ ...datas, create: e.target.value })}/>
        <button type="submit" onClick={AddHandler} >Add</button>
      </div>
      <hr></hr>
      <h2>Update Users</h2>
      <div>
        <h4 >UserID:<span>
          <select value={updateid} onChange={(e) => {
            setUpdateid(e.target.value)
          }}>
            <option>select ID</option>
            {
              namescopy.map((name, i) =>
                <option key={i}>{i }</option>
              )
            }
              
          </select>
        </span></h4>


      </div>
      <div>
        <label>Username : </label>
        <input type='text'
          value={datas.inupdate}
          onChange={(e)=>setDatas({...datas,inupdate:e.target.value})}
        />
        <button onClick={updateHandler} >Update</button>
      </div>
      <hr></hr>
      <h2>Deleting the Users</h2>
      <h4 >Select ID:<span>
          <select value={deletedid} onChange={(e)=>{setDeletedid(e.target.value)}} >
            <option>select ID</option>
             {
            namescopy.map((name, i) =>
              <option key={i}>{ i}</option>      
            )
              }
          </select>
      </span></h4>
      <button onClick={Deletehandler}>Delete User</button>
      
      
    </div>
  )
}

 

export default App;
