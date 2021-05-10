import React,  { useState } from 'react'
import About from './components/About'
import Frontpage from './components/Frontpage'
import Stories from './components/Stories'
import Articles from './components/Articles'
import {Switch, Route, Link, useRouteMatch, useLocation} from 'react-router-dom'
import './App.css'
import { slide as Menu } from 'react-burger-menu'

const App = () => {

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
    <div>

      <Burger/>
   <div className="container">
     <h1>
     Antti on näätä
     </h1>
      <Switch>
        <Route path="/stories">
         <Stories/>
        </Route>
        <Route path="/Articles">
         <Articles />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/">
          <Frontpage />
        </Route>
      </Switch>
   </div>
  </div>
  );
}

export default App;
