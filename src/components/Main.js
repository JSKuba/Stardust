import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import AboutUs from './AboutUs'
import Team from './Team'
import Blog from './Blog'
import Support from './Support'
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

    //              |
    //do zrobienia \|/ 

    const Components = {
        aboutUs: AboutUs,
        team: Team,
        blog: Blog,
        support: Support
    }

    return (
        <main className={mainStyles.main}>
            <Logo />
            <div className={mainStyles.background}>
                <div className={mainStyles.sheet}>
                    {articles.allMarkdownRemark.edges.sort((a, b) => {return a.node.frontmatter.index - b.node.frontmatter.index}).map(v => {
                        const Comp = Components[v.node.frontmatter.title]
                        return (
                            <Comp
                                html={v.node.html} 
                                title={v.node.frontmatter.title}
                            />
                        )
                    })}
                </div>
            </div>
        </main>
    )
}

export default Main