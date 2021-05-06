import React from 'react'

const About = (props) => {
    if (!props.show) {
        return null
      }
    return (
        <div>
            About sivu
        </div>
    )
}

export default About