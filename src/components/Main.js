import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Article from './Article-template'
import Logo from './Logo'
import mainStyles from './Main.module.scss'

const Main = () => {
    const articles = useStaticQuery(graphql`
    query {
        allMarkdownRemark (
            filter: { frontmatter: { class: { eq: "article" } } }
        ) {
            edges {
                node {
                    html
                    frontmatter {
                        title
                        index
                    }
                }
            }
        }
    }
    `)

    return (
        <main className={mainStyles.main}>
            <Logo />
            <div className={mainStyles.sheet}>
                {articles.allMarkdownRemark.edges.sort((a, b) => {return a.node.frontmatter.index - b.node.frontmatter.index}).map(v => {
                    return (
                        <Article 
                            html={v.node.html} 
                            title={v.node.frontmatter.title}
                        />
                    )
                })}
            </div>
        </main>
    )
}

export default Main