import React from 'react'
import Meme from './Meme'
import {memes} from '../Meemit/memes.js'
import {Container, Row, Col} from 'react-bootstrap'

const Frontpage = (props) => {
    console.log(memes)
    memes.map(meme => console.log(meme))
    if (!props.show) {
        return null
    }
    return (
        <div>
            <h2>Etusivu</h2>
            <Container>
            <Row>
            {memes.map(meme =><Col> <Meme key={meme.id} meme={meme}/></Col>)}
            </Row>
            </Container>

        </div>
    )
}

export default Frontpage