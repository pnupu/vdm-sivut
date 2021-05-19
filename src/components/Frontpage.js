import React from 'react'
import Meme from './Meme'
import { memes } from '../Meemit/memes.js'
import { Row, Col } from 'react-bootstrap'

/*
Tällä sivulla luodaan etusivu ja luodaan meemit käyttä mällä map funktiota.
Meemien sijoituksessa käytetään bootsrappiä.
*/

const Frontpage = (props) => {
  return (
    <div className="Frontpage">
      <Row >
        {memes.map(meme => <Col key={meme.id}> <Meme key={meme.id} meme={meme} backMemes={props.memes} getMemes={props.getMemes}/></Col>)}
      </Row>

    </div>
  )
}

export default Frontpage