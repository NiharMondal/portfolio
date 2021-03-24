import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Porjects/Projects';
import Contact from './components/Contact/Contact';
import Header from './components/Home/Header/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/project">
          <Projects/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        
      </Switch>
     
    </Router>
  );
}

export default App;
