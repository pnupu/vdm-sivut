import React from 'react'
import Meme from './Meme'
import {memes} from '../Meemit/memes.js'
import {Row, Col} from 'react-bootstrap'

const Frontpage = (props) => {


    return (
        <div className="Frontpage">
            <Row > 
            {memes.map(meme =><Col key={meme.id}> <Meme key={meme.id} meme={meme}/></Col>)}
            </Row>

        </div>
    )
}

export default Frontpage