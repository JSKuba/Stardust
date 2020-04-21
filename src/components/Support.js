import React from 'react'

import supportStyles from './Support.module.scss'

const Support = (props) => {
    return (
        <section
            className={supportStyles.section}
            dangerouslySetInnerHTML={{__html: props.html}}
            id={props.title}
        />
    )
}

export default Support