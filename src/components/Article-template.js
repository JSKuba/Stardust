import React from 'react'

import './Article-template.scss'

const Article = (props) => {
    return (
        <article 
            dangerouslySetInnerHTML={{__html: props.html}}
            id={props.title}
        />
    )
}

export default Article