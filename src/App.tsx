import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Block from './Block';
import { Container } from './components/Container.styled';

function App() {
  const [names, setNames] = useState([]);

  const getNames = async () => {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    console.log(data);

const filteredNames = data.users.filter((names: any)=>names.firstName && names.lastName.indexOf('1') === -1)
    const getPosts = async (id:number) => {
      return axios
        .get('https://dummyjson.com/posts/' + id)
        .then((res) => res.data);
    };
    const postMessages = await Promise.all(
      filteredNames.map((post:any) => getPosts(post.id))
    );
       let size = 10;
    const postWithMessages = filteredNames.slice(0, size).map((post:any, i:any) => ({
      ...post,
      message: postMessages[i],
    }));  
    setNames(postWithMessages);
  };
  
  useEffect(() => {
    getNames();
  }, []);

  return (
    <div className="App">
      <Container>
        <div className='container'>
       
          <div className="row col-12">
          {names.map((person:any) => (
              <div className='col-3'>
              <div className="card" style={{margin:'8px'}}>
              {/* <p>{person.id}</p>
              <p>{person.lastName}</p> */}
              <Block
          key={person.id}
          id={person.id}
          fname={person.firstName}
          lname={person.lastName}
          image={person.image}
          title={person.message.title}
          content={person.message.body}
        />
          
        </div>
              </div>
              ))}
          </div>
           
           </div>
        {/* {names.map((person:any) => (
        // <div className="card" key={person.id}>
        //   <p>{person.id}</p>
        //   <p>{person.lastName}</p>
          
        // </div>
      ))}
        </div> */}
      
      </Container>
      
    </div>
  );
}

export default App;
