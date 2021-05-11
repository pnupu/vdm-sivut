import React, {useState} from 'react'
import {Modal, Button, Container, Row, Col} from 'react-bootstrap'

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

const Meme = (meme) => {
    const [modalShow, setModalShow] = useState(false)

    return (
        <div >
            <img src={meme.meme.thumbnail.default} alt="Koko kansan Paavo" onClick={() => setModalShow(true)}/>
            <MemeModal
        show={modalShow}
        info={meme.meme}
        onHide={() => setModalShow(false)}
      />
        </div>
    )
}

export default Meme