
import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contacts/>
      <Footer/>
      <SocialLinks/>
    </div>
  );
}

export default App;
