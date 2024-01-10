import React from 'react';
import styles from './App.module.css'
import List from './components/List';

//class components
import AnotherList from './components/AnotherList';


// functional components
function App() {
  return (
    <div className={styles.header}>
      Hello World
      <img src="/logo192.png" alt="img" ></img>
      <List />
      <AnotherList />
    </div>
  );
}




export default App;
