import React from 'react'

const Support = (props) => {
    return (
        <section
            dangerouslySetInnerHTML={{__html: props.html}}
            id={props.title}
        />
    )
}

export default Support