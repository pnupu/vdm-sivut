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
  //Yhdistetään
  const bMeme = props.backMemes.find( meme => meme.num === props.meme.id)
  let likes = 0
  if(bMeme !== undefined) {
    likes = bMeme.likes
  }
  const addlike = async (meme) => {

    try {
      const like = {
        ...meme, likes: (meme.likes + 1)
      }
      console.log(like)
      await memeService.update(like)
      likes = likes + 1

    } catch(error) {
      console.log('something went wrong with adding a like')
    }
    props.getMemes()
  }
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

      <MemeModal
        show={modalShow}
        info={props.meme}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default Meme