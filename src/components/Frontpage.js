import React from 'react'
import Meme from './Meme'

const Frontpage = (props) => {
    if (!props.show) {
        return null
    }
    return (
        <div>
            <h2>Etusivu</h2>
            <Meme />
        </div>
    )
}

export default Frontpage