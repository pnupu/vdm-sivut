import React from 'react'
import About from './components/About'
import Frontpage from './components/Frontpage'
import Stories from './components/Stories'
import Articles from './components/Articles'
import {Switch, Route } from 'react-router-dom'
import './App.css'
import { slide as Menu } from 'react-burger-menu'
import Memeform from './components/Memeform'
import {Button} from 'react-bootstrap'

const App = () => {
  const footer  = `Ryhmä 12 @${new Date().getFullYear()}`

  const Header = () => {
    return (
      <div className="background-image">
        <div className="background-text">
          <h1>Piikitä!</h1>
          <h3>
            Tässä on hienoa tekstiä kampanjasta...
          </h3>
          <Button href="/Memeform" className="button">
                Osallistu kilpailuun!
            </Button>
        </div>
      </div>
    )
  }

  const Burger = () => {
    return (
      <Menu>
        <a id="Frontpage" className="menu-item" href="/">Etusivu</a>
        <a id="Articles" className="menu-item" href="/Articles">Artikkelit</a>
        <a id="Stories" className="menu-item" href="/Stories">Tarinat</a>
        <a id="Memeform" className="menu-item" href="/Memeform">Osallistu</a>
        <a id="About" className="menu-item" href="/About">About</a>
      </Menu>
    )
  }
  return (
  <div className="page">

  <Burger/>
      <Header/>
   <div className="container">
      <Switch>
        <Route path="/Stories">
         <Stories/>
        </Route>
        <Route path="/Articles">
         <Articles/>
        </Route>
        <Route path="/About">
          <About/>
        </Route>
        <Route path="/Memeform">
          <Memeform />
        </Route>
        <Route path="/">
          <Frontpage />
        </Route>
      </Switch>
   </div>
      <footer className="footer">
        <p>{footer}</p>
      </footer>
  </div>
  );
}

export default App;
