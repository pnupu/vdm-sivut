import React from 'react'
import matti from '../assets/matti.jpg'
import liisi from '../assets/liisi.jpg'
import tomi from '../assets/tomi.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap'
/*
Tällä sivulla luodaan sivulla olevat tarinat
*/
const Stories = () => {

  return (
    <div className="stories">
      <Container>
        <div className="story" id="1">
          <h2>Matti</h2>
          <Row>
            <Col>
              <Image src={matti} alt="matti" roundedCircle />
            </Col>
            <Col>
              <p>
                “Aiemmin vähättelin koronan vaikutusta itseeni ja läheisiini. Luulin pitkän aikaa, että korona olisi vaikutuksiltaan vain jotain kausiflunssan kaltaista. Tästä syystä pidin rokotteita turhana itsensä riskeeraamisena. Kuitenkin talvella mummoni sairastui koronaan vakavasti, ja ymmärsin taudin vaarat. Siitä lähtien olen innoissani odottanut vuoroani saada rokote, jotta en altistaisi läheisiäni sille, mikä miltei vei mummoni hengen.”
              </p>
            </Col>
          </Row>
        </div>
        <div className="story" id="2">
          <h2>Liisi</h2>
          <Row>
            <Col>
              <Image src={liisi} alt={liisi} roundedCircle/>
            </Col>
            <Col>
              <p>
                “Luin syksyllä erään sosiaalisen median vaikuttajan blogipostauksesta, että koronalta voisi välttyä meditoimalla ja pitämällä positiivista asennetta yllä. Blogissa oli myös paljon rokotevastaisia kommentteja, joita sokeasti uskoin. Aloin kuitenkin ottaa asioista itse tarkemmin selvää, ja sain THL:n sivuilta selville asioiden todellisen laidan. Nyt todellakin haluan rokotteen, jotta pääsisin mahdollisimman pian kokemaan huikeita tapahtumia uudestaan. Omat sosiaalisen mediani seuraajat odottavat jo parempaa sisältöä kuin karanteenia minulta!”
              </p>
            </Col>
          </Row>
        </div>
        <div className="story" id="3">
          <h2>Tomi</h2>
          <Row>
            <Col>
              <Image src={tomi} alt="tomi" roundedCircle />
            </Col>
            <Col>
              <p>
            “Kun rokotekeskustelu todenteolla alkoi viime syksynä, löysin paikkakuntani Facebook-ryhmästä päivityksen, jonka mukaan koronarokotteissa olisi mikrosiruja. Näillä päivityksen mukaan muodostettaisiin 1984-kirjan kaltainen valta hallitukselle, ja levitettäisiin vaarallisia 5G-säteilyitä. Luettuani muutamia viikkoja lisää aiheesta törmäsin Kohti Normaalia kampanjaan koronarokotteen turvallisuudesta, mikä sai minut tajuamaan asioiden todellisuuden. Löytämäni mikrosirukaaviotkin olivat todellisuudessa kitaran vahvistimen virtapiirikuvia! Asenteeni rokotteesta on muuttunut, ja riskiryhmäläisenä sen olen jo ottanut. Pelko on kaikonnut elämästäni.”
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Stories