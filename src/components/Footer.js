import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import footerStyles from './styles/Footer.module.scss'

const Footer = () => {
    useEffect(() => {
        const HifiSuperstarSuperHit = document.createElement('span')
        HifiSuperstarSuperHit.innerHTML = 'Website made by <a href="https://jskuba.netlify.app">Jakub Chmielewski</a>'
        document.getElementsByClassName(footerStyles.footer)[0].appendChild(HifiSuperstarSuperHit)
    })

    const footerData = useStaticQuery(graphql`
        query {
            markdownRemark (
                frontmatter: {
                    title: {
                    eq: "footer"
                    }
                }
            ) {
                html
            }
        }
    `)

    return (
        <footer dangerouslySetInnerHTML={{__html: footerData.markdownRemark.html}} className={footerStyles.footer} />
    )
}

export default Footer