import React,  { useState } from 'react'
import About from './components/About'
import Frontpage from './components/Frontpage'
import Stories from './components/Stories'
import Articles from './components/Articles'
import {Switch, Route, Link, useRouteMatch, useLocation} from 'react-router-dom'
import './App.css'
import { slide as Menu } from 'react-burger-menu'
import { memes } from './Meemit/memes'

const App = () => {
  const footer  = `Ilkka Lappeteläinen ${new Date().getFullYear()}`

  const Header = () => {
    return (
      <div class="background-image">
        <div class="background-text">
          <h1 class="text-center">Kampanjan nimi</h1>
        </div>
      </div>
    )
  }

  const Burger = () => {
    return (
      <Menu>
        <a id="Frontpage" className="menu-item" href="/">Home</a>
        <a id="Articles" className="menu-item" href="/Articles">Articles</a>
        <a id="Stories" className="menu-item" href="/Stories">Stories</a>
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
        <Route path="/stories">
         <Stories/>
        </Route>
        <Route path="/Articles">
         <Articles memes={memes}/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/">
          <Frontpage />
        </Route>
      </Switch>
      <footer>
        <p>{footer}</p>
      </footer>
   </div>
  </div>
  );
}

export default App;
