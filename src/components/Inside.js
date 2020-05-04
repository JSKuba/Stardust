import React, { useEffect } from 'react'

import insideStyles from './styles/Inside.module.scss'

const Inside = (props) => {
    useEffect(() => {
        const insideChildren = [...document.getElementById('inside').children]
        insideChildren.map((v, i) => {
            if(i > 2) {
                v.classList.add(insideStyles.hidden)
                return v
            } else {
                return v
            }
        })
        const showAllBtn = document.createElement('button')
        showAllBtn.innerHTML = 'Show all'
        document.getElementById('inside').appendChild(showAllBtn)
        showAllBtn.addEventListener('click', () => {
            insideChildren.map(v => {
                return v.classList.remove(insideStyles.hidden)
            })
            document.getElementById('inside').removeChild(showAllBtn)
        })
    })

    return (
        <section
            dangerouslySetInnerHTML={{__html: props.html}}
            id={props.title}
            className={insideStyles.inside}
        />
    )
}

export default Inside