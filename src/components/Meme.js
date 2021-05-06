import React, {useState} from 'react'
import {Modal, Button, Container, Row, Col} from 'react-bootstrap'

const MemeModal = (props) => {
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
        <h4>Koko kansan Paavo</h4>
        <Container>
            <Row>
                <Col>
                    <img src="https://pbs.twimg.com/profile_images/949193787317899264/6-w9wS-4_400x400.jpg" alt="Koko kansan Paavo" className="img-fluid"/>
                </Col>
                <Col>
                    <p>
                        Paavo Matti Väyrynen on suomalainen poliitikko. 
                        Hän on toiminut kansanedustajana viidellä eri vuosikymmenellä ja on ollut useita kertoja ministerinä. Väyrynen on Suomen Keskustan jäsen.
                        Aiemmin hän on edustanut myös Kansalaispuoluetta sekä Seitsemän tähden liikettä.
                    </p>
                    <Button onClick={() => console.log("tämä vie artikkeliin")}> Lue Lisää</Button>
                </Col>
            </Row>
        </Container>
      </Modal.Body>
    </Modal>
    )
}

const Meme = () => {
    const [modalShow, setModalShow] = useState(false)
    return (
        <div >
            <img src="https://pbs.twimg.com/profile_images/949193787317899264/6-w9wS-4_400x400.jpg" alt="Koko kansan Paavo" onClick={() => setModalShow(true)}/>
            <MemeModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        </div>
    )
}

export default Meme