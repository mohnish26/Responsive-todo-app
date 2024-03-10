import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  const [ inputText, setInputtext] = useState('');
  const [todoList, settodoList] = useState([])
  const text = (event) => {
    setInputtext(event.target.value);

  }
  const add = () => {
    if(todoList.length < 8 ){
      if(inputText.length>0 && inputText[0]!=' '){
    settodoList([...todoList,inputText])
    setInputtext('')
      }
      else{
        setInputtext('')
        alert("Please add some text")

      }
    }
    else{
      alert("You Only Add 8 task Only")
    }
  }
  const remove = (index) => {
    const lists = [...todoList]
    lists.splice(index,1)
    settodoList(lists)
  }
  const finalList = todoList.map((value,index)=>
  <div className='list-view'>
        <div id='list-data-view'>
          <h2 key={index}>{value}</h2>
        </div>
        <Button onClick={()=>remove(index)}>Remove</Button>
        
        

  </div>)
 
  return (
    <Main>
      <Firstdiv>
        <div id='img-div'>
          <img src='/Images/simple.png' alt='Simple Todo' />
        </div>
        <div id='main-text'>
          <h1>Simple Todo</h1>
          <input onChange={text} value={inputText} type='text' placeholder='Whats on your Mind...' />
          <Button onClick={add}>Add to do</Button>
          <p id='credit'>Created by Mohnish Khanna</p>
        </div>
      </Firstdiv>
      <Seconddiv>
        {todoList.length==0 ? <div id='cat-img'><img src='/Images/lazycat.png'/><h2>You Have currently No Todo</h2></div>:null}
        {finalList}

      </Seconddiv>
    </Main>
  );
}

export default App;

// Main styled component
const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Firstdiv styled component
const Firstdiv = styled.div`
  width: 40%;
  height: 100vh;
  background-color: #b95df2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  #credit{
    margin-top: 4rem;
    color: #dfd9d9;
  }

  @media (max-width: 600px) {
    width: 100%;
    height: 30%;
    align-items: center;

    #img-div {
      visibility: hidden;
      display: none;
    }

    #main-text {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;

      h1 {
        font-size: 3rem;
        color: #e3e0e9;
      }
    }
  }

  #img-div {
    height: 60vh;
    width: 100%;
    overflow: hidden;

    img {
      height: 100%;
      width: 100%;
    }
  }

  #main-text {
    height: 100%;
    width: 30vw;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 600px) {
      height: 100%;
      width: 90%;
      justify-content: center;
    }

    h1 {
      font-size: 3rem;
      color: #e3e0e9;
    }

    input {
      padding: 2vh;
      outline: none;
      width: 20vw;
      text-decoration: none;
      border-radius: 1rem;
      border: none;

      @media (max-width: 600px) {
        width: 90%;
      }
    }
  }
`;

// Seconddiv styled component
const Seconddiv = styled.div`
  width: 60%;
  height: 100vh;
  background-color: #e854b8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2%;
  align-items: center;
  overflow-y: auto;
  color: white;
  
  #cat-img{
    height: 30vh;
    width: 30%;
    text-align: center;
    color: #e6d6d6;
    font-family: monospace;
    font-size: 150%;
    
    img{
      height: 100%;
      width: 100%;
    }
    

  }
  
  
  .list-view{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 10vh;
    background-color: #965CFD;
    padding: 1%;
    border-radius: 2rem;
    box-shadow: 0.5rem 0.8rem 1rem rgba(0, 0, 0, 0.5);
    #list-data-view{
      overflow: hidden;
      
      h2{
        max-width: 50ch;
        overflow-x: auto;

      }
    }
    
    

  }

  @media (max-width: 600px) {
    width: 100%;
    height: 70%;
    #list-data-view{
      
      h2{
        max-width: 10ch;
        overflow: hidden;

      }
    }
  }
`;

// Button styled component
const Button = styled.button`
  width: 10rem;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1.5rem;
  border: none;
  background-color: #e854b8;
  color: #e3e0e9;
  box-shadow: 0.5rem 0.8rem 1rem rgba(0, 0, 0, 0.5);
  cursor: pointer;
  &:hover{
    background-color: #87346d;
    color: #9a93a8;
  }
`;