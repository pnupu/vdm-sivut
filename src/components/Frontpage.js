import React from 'react'

const Frontpage = (props) => {
    if (!props.show) {
        return null
    }
    return (
        <div>
            Etusivu
        </div>
    )
}

export default Frontpage