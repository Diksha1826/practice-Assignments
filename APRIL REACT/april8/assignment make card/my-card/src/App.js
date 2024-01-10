import logo from './logo.svg';
import './App.css';
import Card from './component/Card';

function App() {
  return (
    <div className="App">
    <Card date="17 sep 2020" box="Case Study" heading="Apple Gift Payment" subheading="MacOS - Mobile" color="gainsboro" src="https://www.iconpacks.net/icons/3/free-amazon-logo-icon-6202.png" arrowsrc="http://cdn.onlinewebfonts.com/svg/img_418607.png"  />
    <Card date="28/10/2020" box="Case Study" heading="Amazon Gift Pay" subheading="Desktop - Mobile" color="rgb(255, 179, 0)"  src="https://1000logos.net/wp-content/uploads/2016/10/Apple-logo.jpg" arrowsrc="http://cdn.onlinewebfonts.com/svg/img_418607.png" />
    </div>
  );
}

export default App;
