import React, {useEffect} from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import logo from './img/stardust-logo-transp.png'
import svg from './img/arrow.svg'
import logoStyles from './styles/Logo.module.scss'

const Logo = () => {
    const desc = useStaticQuery(graphql`
    query {
        allMarkdownRemark (
            filter: { frontmatter: { title: { eq: "desc" } } }
        ) {
            edges {
                node {
                    html
                }
            }
        }
    }
    `)
    useEffect(() => {
        if (window.innerWidth >= 1080) {
            const arrow = document.getElementsByClassName(logoStyles.arrow)
            const desc = document.getElementsByClassName(logoStyles.desc)
            desc[0].classList.add(logoStyles.show)
            window.addEventListener('scroll', () => {
                if(window.pageYOffset > 0) {
                    !arrow[0].classList.contains(logoStyles.hidden) && arrow[0].classList.add(logoStyles.hide)
                    !desc[0].classList.contains(logoStyles.hidden) && desc[0].classList.add(logoStyles.hide)
                }
            })
        }
    })

    return (
        <figure>
            <img className={logoStyles.mainLogo} src={logo} alt="logo" desc="Stardust logo" />
            <span className={logoStyles.desc} dangerouslySetInnerHTML={{__html: desc.allMarkdownRemark.edges[0].node.html}}/>
            <img id="arrow" className={logoStyles.arrow} src={svg} alt="arrow" desc="arrow" />
        </figure>
    )
}

export default Logo