import React from 'react';
// import './App.css';
import { AppStyled , BoldLabel , FormWrapper , Div} from "./App.styled";
import Buttond from './Component/Button';


function App() {
const [iscolourful , setiscolourful] = React.useState(false);
const [colour , setColour] = React.useState("red");
  return (
    <>
    < AppStyled  >
      {/* <form className= {iscolourful ? "red" : "green"} onClick={()=> setiscolourful(!iscolourful)}> */}
      <FormWrapper iscolourful={iscolourful} 
      onClick={()=> setiscolourful(!iscolourful)}>
        <div>
          <BoldLabel>Username :</BoldLabel>
          <input type="text" placeholder="Enter username"  />
        </div>
        <div>
          <BoldLabel>Password :</BoldLabel>
          <input type="password" placeholder="Enter password"  />
        </div>

        
      </FormWrapper>
      <Div colour={colour}>
          <BoldLabel>colour :</BoldLabel>
          <input type="text" value={colour} placeholder="Enter colour" onChange={(e)=> setColour(e.target.value)}  />
      </Div>
        <Buttond />

      </AppStyled>

      </>
  );
}

export default App;
