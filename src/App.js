import React from 'react';
import {Route, Switch, } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import FAQ from './components/FAQ'
import Menu from './components/Menu'
import Events from './components/Events'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Footer from './components/FooterAlt'
import {Container} from 'semantic-ui-react'
import ScrollToTop from './components/scrollToTop'
import './App.css'

function App() {
  return (
    
    <Container fluid style={{padding: "2rem 0 0 0", margin: "0 0"}}>
     <NavBar/>
     <ScrollToTop />
      <Switch>
       <Route exact path='/' component={Home} />
       <Route exact path='/about' component={About} />
       <Route exact path='/FAQ' component={FAQ} />
       <Route exact path='/Menu' component={Menu} />
       <Route exact path='/Events' component={Events} />
       <Route exact path='/Contact' component={Contact} />
       <Route component={NoMatch} />
      </Switch>
      <Footer/>
    </Container>
 
  );
}

export default App;
