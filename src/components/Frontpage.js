import React from 'react'
import Meme from './Meme'
import {memes} from '../Meemit/memes.js'
import {Container, Row, Col} from 'react-bootstrap'

const Frontpage = (props) => {
    console.log(memes)
    memes.map(meme => console.log(meme))

    return (
        <div className="Frontpage">
            <Container>
            <div className="Row">
            <Row > 
            {memes.map(meme =><Col> <Meme key={meme.id} meme={meme}/></Col>)}
            </Row>
            </div>
            </Container>

        </div>
    )
}

export default Frontpage