import React from 'react'

import templateStyles from './styles/Template.module.scss'

const Template = (props) => {
    return (
        <section
            className={templateStyles.section}
            dangerouslySetInnerHTML={{__html: props.html}}
            id={props.title}
        />
    )
}

export default Template