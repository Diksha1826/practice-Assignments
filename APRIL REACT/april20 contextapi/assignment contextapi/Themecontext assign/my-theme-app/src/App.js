import { useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Bodywrapper } from './Components/Page.styled';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <Bodywrapper color={theme}>
    <div className="App">
      <Navbar />
    </div>
    </Bodywrapper>
  );
}

export default App;
