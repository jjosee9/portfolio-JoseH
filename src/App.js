import React from 'react';
import Home from './Components/Home/Home'
import NavBar from './Components/Navbar/Navbar'
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>

        <NavBar />
        <Switch>   {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
          <Route path="/" exact><Home /></Route>
          <Route path="/projects"  ><Projects /></Route> {/*does the same as line after */}
          <Route path="/contact"><Contact /></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );

}

export default App;

//npm install react-router-dom
