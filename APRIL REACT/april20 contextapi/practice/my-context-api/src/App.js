import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import ContextCartchanger from './Context/ContextCartchanger';
import { Border } from './components/Border.style';
import { useContext } from 'react';
import { ThemeContext } from './Context/ThemeProvider';

function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <Border color={theme} className="App">
      <ContextCartchanger>
      <Navbar />
      <Body />
      </ContextCartchanger>
    </Border>
  );
}

export default App;
