import React, { useEffect, useState } from 'react'
import About from './components/About'
import Frontpage from './components/Frontpage'
import Stories from './components/Stories'
import Articles from './components/Articles'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import { slide as Menu } from 'react-burger-menu'
import Memeform from './components/Memeform'
import { Button } from 'react-bootstrap'
import memeService from './services/memeService'
//Importtaataan tarvittavat tiedostot

const App = () => {

  //Luodaan footerin teksti
  const footer  = `Ryhmä 12 @${new Date().getFullYear()}`
  //Luodaan muuttuja memejen likeille
  const [memes, setMemes] = useState([])

  //Käytetään getMemes funktio kun sivu latautuu ensimmäistä kertaa
  useEffect(() => {
    getMemes()
  }, [])

  //Funktio joka hakee meemien liket serverillä, funktio on asynkroninen.
  const getMemes = async () => {
    try {
      await memeService.getAll().then(blogs =>
        setMemes( blogs )
      )
    } catch(error) {
      console.log('error getting memes')
    }
  }

  //Luodaan nettisivujen header
  const Header = () => {
    return (
      <div className="background-text">
        <h1>KOHTI NORMAALIA</h1>
        <h4>
            Ota rokote niin kohta nauramme taas yhdessä.
        </h4>
        <Button href="/Memeform" className="button">
            Osallistu kilpailuun!
        </Button>
      </div>
    )
  }
  //Luodaan nettisivuilla oleva burger-valikko
  const Burger = () => {
    return (
      <Menu>
        <a id="Frontpage" className="menu-item" href="/">ETUSIVU</a>
        <a id="Articles" className="menu-item" href="/Articles">ARTIKKELIT</a>
        <a id="Stories" className="menu-item" href="/Stories">TARINAT</a>
        <a id="Memeform" className="menu-item" href="/Memeform">OSALLISTU</a>
        <a id="About" className="menu-item" href="/About">ABOUT</a>
        <a id="INSTAGRAM" className="menu-item" href="https://www.instagram.com/kohtinormaalia/" target="_blank" rel="noreferrer">INSTAGRAM</a>
      </Menu>
    )
  }
  //Palautetaan nettisivut
  //Sivuilla käytetään react-router-dom moduulia jolla huolehditaan sivujen vaihdoista
  return (
    <div className="page">

      <Burger/>
      <Header/>
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
          <Frontpage memes={memes} getMemes={getMemes}/>
        </Route>
      </Switch>
      <footer className="footer">
        <p>{footer}</p>
      </footer>
    </div>
  )
}

export default App
