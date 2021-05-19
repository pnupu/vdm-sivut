import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import candidateServices from '../services/candidateService'


/*
Tällä sivulla on meemiformi jolla voi lähettää meemejä kisaan.
*/
const Memeform = () => {
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [link, setLink] = useState('')

  //Onclick handleri joka lähetää meemiehdokaan tietokantaan
  const OnClick = (event) => {
    event.preventDefault()

    const object = {
      email: email,
      text: text,
      link: link
    }
    candidateServices.put(object)
    setEmail('')
    setText('')
    setLink('')
  }


  return (
    <div className="memeform">
      <Container>

        <div className="memeform-text">
          <h4 className="memeform-title">
            Osallistu kilpailuun omalla koronarokoteaiheisella meemilläsi, voit voittaa 500€!
          </h4>
          <br/>
          <p>
            Alla olevalla lomakkeella voit lähettää meemisi kilpailuun. Meemin tulee käsitellä koronarokotetta ja sisältää faktatietoa.
            Lähteinä voit esimerkiksi hyödyntää sivustomme Artikkelit-osiota tai THL:n sivustoja. Muistathan liittää nämä lähteet myös osallistumislomakkeeseen,
            jotta osallistumisesi rekisteröityy varmasti kilpailuun. Voittaja valitaan 6.6. livelähetyksessä yllätysvieraan toimesta. Onnea kilpailuun!
          </p>
          <br/>
        </div>
        <Form onSubmit={(e) => OnClick(e)}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Sähköposti:</Form.Label>
            <Form.Control type="email" placeholder="teemu.teekkari@aalto.fi" onChange={e => setEmail(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Meemin lähteet: </Form.Label>
            <Form.Control as="textarea" rows={5}  onChange={e => setText(e.target.value)}/>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Linkki meemiin: </Form.Label>
            <Form.Control as="textarea" onChange={e => setLink(e.target.value)}/>
          </Form.Group>
          <Button type="submit" className="submit-button">
                Lähetä
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default Memeform