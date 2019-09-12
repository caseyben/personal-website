import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends React.Component {
  render(){
    console.log("url",process.env.PUBLIC_URL)
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/resume' component={Resume}/>
          <Route path='/contact' component={Contact}/>
          <Footer/>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
