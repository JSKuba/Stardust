import React, { useEffect } from 'react'

import aboutStyles from './styles/About.module.scss'

const AboutUs = (props) => {
    console.log(props.html)
    useEffect(() => {
        const aboutChildren = [...document.getElementById('about').children]
        aboutChildren.map((v, i) => {
            if(v.tagName === "H3") {
                v.classList.add(aboutStyles.hidden)
                aboutChildren[i+1].classList.add(aboutStyles.hidden)
                aboutChildren[i+2].classList.add(aboutStyles.hidden)
                return v
            } else {
                return v
            }
        })
        const showAllBtn = document.createElement('button')
        showAllBtn.innerHTML = 'Show all'
        document.getElementById('about').appendChild(showAllBtn)
        showAllBtn.addEventListener('click', () => {
            aboutChildren.map(v => {
                return v.classList.remove(aboutStyles.hidden)
            })
            document.getElementById('about').removeChild(showAllBtn)
        })
    })

    return (
        <section
            dangerouslySetInnerHTML={{__html: props.html}}
            id={props.title}
            className={aboutStyles.aboutUs}
        />
    )
}

export default AboutUs