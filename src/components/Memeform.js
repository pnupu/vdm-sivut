import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'


const Memeform = (props) => {
    const [email, setEmail] = useState('')
    const [text, setText] = useState('')
    
    const OnClick = (event) => {
        event.preventDefault()
        console.log(email)
        console.log(text)
        setEmail('')
        setText('')
    }


    return (
        <div className="memeform">
            <div className="memeform-text">
            <h4 className="memeform-title">
                Osallistu kilpailuun lähettämällä paras korona aiheinen meemi. Voit voittaa korona rokotteen!
            </h4>
            <p>
                Lähettämällä meemin joka on hauska ja sillä on vahvistettavat lähteet. Julkaisemme parhaat meemit Instagramissa sekä nettisivuillamme. 
            </p>
        </div>
        <Form onSubmit={(e) => OnClick(e)}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Sähköposti:</Form.Label>
                <Form.Control type="email" placeholder="teemu.teekkari@aalto.fi" onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Meemin kuva teksti sekä lähteet:</Form.Label>
                <Form.Control as="textarea" rows={5}  onChange={e => setText(e.target.value)}/>
            </Form.Group>
            <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Meemi:" />
            </Form.Group>
            <Button type="submit" className="mb-2">
                Lähetä
            </Button>
        </Form>
        </div>
    )
}

export default Memeform