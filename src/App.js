import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data, setData] = useState([]) 

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=> {
    axios.get('https://swapi.dev/api/people/')
    .then(res => setData(res.data))
    .catch(err => console.error(err))
  }, [])


  const StyledCharBox = styled.div`
  
  background-color: rgb(0, 0, 0, .7);
  width: 30%;
  margin: 0 auto;
  padding: 1%;
  border-radius: 1em;

  h3 {
    padding: 1%;
    padding-top: 4%;
    padding-bottom: 4%;
    color: white;
  }

  
  `

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledCharBox>
      <Character data={data}/>
      </StyledCharBox>
    </div>
  );
}

export default App;