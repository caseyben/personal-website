import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route path='/home' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/contact' component={Contact}/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
