import React, { useState } from 'react'
import { Modal, Button, Container, Row, Col } from 'react-bootstrap'
import memeService from '../services/memeService'


/*
Tämä funktio on jäännös aikaisemmasta versiosta jossa hoverin sijaan käytettiin klikkauksella esiin tulevia modaleja
*/

const MemeModal = (props) => {
  const url = `/articles/#${props.info.id}`
  return(
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Paavo Väyrynen
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.info.title}</h4>
        <Container>
          <Row>
            <Col>
              <img src={props.info.thumbnail.default} alt="Koko kansan Paavo" className="img-fluid"/>
            </Col>
            <Col>
              <p>
                        Paavo Matti Väyrynen on suomalainen poliitikko.
                        Hän on toiminut kansanedustajana viidellä eri vuosikymmenellä ja on ollut useita kertoja ministerinä. Väyrynen on Suomen Keskustan jäsen.
                        Aiemmin hän on edustanut myös Kansalaispuoluetta sekä Seitsemän tähden liikettä.
              </p>
              <Button href={url}> Lue Lisää</Button>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

/*
Tämäm funktio on luomeemin sille annetuista propseista ja huoheltii likejen käsittelystä.
*/

const Meme = (props) => {
  //Jäänne aikaisemmasta versiosta
  const [modalShow, setModalShow] = useState(false)
  /*
  Yhdistetään tietokannan meemit ja nettisivun meemit
  Tämä oli mielestäni fiksuintapa jotta kuvia ei tarvitse lähettää palvelimelta.
  Näin säästyy myös palvelimen käytettävää laaja kaistaa.
  */
  const bMeme = props.backMemes.find( meme => meme.num === props.meme.id)
  // Estetään errorit jotka tulevat jos palvelimeen ei saada yhteyttä
  let likes = 0
  if(bMeme !== undefined) {
    // Kun palvelimelta on saatu liket ne päivitetään kuviin
    likes = bMeme.likes
  }
  /*
  Tykkäyksen lisäys funktio, funktio ottaa meemin arvona ja lähettää palvelimelle
  tiedon päivitetystä meemistä, täsä ratkaisussa on ongelmana se että tietokanta ei ole sarjallinen, mutta
  näin pinenellä nettisivulla se ei ole ongelma.
  */
  const addlike = async (meme) => {
    try {
      //Luodaan objekti jolla on yksi tykkäys ennemmän
      const like = {
        ...meme, likes: (meme.likes + 1)
      }
      //Lähetetään tämä objekti bäkkärille
      await memeService.update(like)
      //Päivitetään ruudulla näkyvät liket, näin tykkäys näkyy heti vaikka se ei ole vielä päivittynyt palvelimelle.
      likes = likes + 1
    } catch(error) {
      //Error handlaus
      console.log('something went wrong with adding a like')
    }
    //ladataan liket palvelimelta
    props.getMemes()
  }
  //Luodaan meemikortti
  return (
    <div className="meme-card" style={{ backgroundImage: 'url(' + props.meme.thumbnail.default + ')' }}>
      <div>
        <div>
          <br/>
          <p className="meme-text">
            {props.meme.smalltext}
          </p>
          <p className="likes" onClick={() => addlike(bMeme)}>Likes: {likes}</p>
          <a href={props.meme.bigtext}>LUE LISÄÄ</a>
        </div>
      </div>
      {
        //Jäänne aikaisemmasta versiosta
      }
      {//<img src={props.meme.thumbnail.default} alt={props.meme.smalltext} onClick={() => setModalShow(true)}/>
      }
      {
        //Jäänne aikaisemmasta versiosta
      }
      <MemeModal
        show={modalShow}
        info={props.meme}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default Meme