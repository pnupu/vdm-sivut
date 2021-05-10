import React from 'react'

const Articles = (props) => {
    const memes = props.memes
    console.log(memes)
    return (
        <div className="container" >
            {memes.map(meme => 
            <div className="container" id={meme.id} key={meme.id}>
                <h2>{meme.title}</h2>
                <img src={meme.thumbnail.default} alt="Koko kansan Paavo"/>

            </div>    
            )}
        </div>
    )
}

export default Articles