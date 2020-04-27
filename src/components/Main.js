import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import About from './About'
import Team from './Team'
import Blog from './Blog'
import Support from './Support'
import Template from './Template'
import Logo from './Logo'
import mainStyles from './styles/Main.module.scss'

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

    useEffect(() => {
        const slug = window.location.href.split("/").pop().split(";")[0].split("?")[0]
        console.log(slug)
        if (slug !== "") {
            window.scrollTo(0, document.getElementById(slug).offsetTop + document.getElementById('sheet').offsetTop - 60)
            if (document.getElementById(slug).getElementsByTagName('button')[0] !== undefined) {
                document.getElementById(slug).getElementsByTagName('button')[0].click()
            }
        }
    })

    const Components = {
        about: About,
        team: Team,
        blog: Blog,
        support: Support,
        template: Template
    }

    return (
        <main className={mainStyles.main}>
            <Logo />
            <div id="main" className={mainStyles.background}>
                <div id="sheet" className={mainStyles.sheet}>
                    {articles.allMarkdownRemark.edges.sort((a, b) => {return a.node.frontmatter.index - b.node.frontmatter.index}).map(v => {
                        const Comp = Components[v.node.frontmatter.title]
                        if(Comp !== undefined) {
                            return (
                                <Comp
                                    key={v.node.frontmatter.index}
                                    html={v.node.html} 
                                    title={v.node.frontmatter.title}
                                />
                            )
                        } else {
                            return (
                                <Template
                                    key={v.node.frontmatter.index}
                                    html={v.node.html} 
                                    title={v.node.frontmatter.title}
                                />
                            )
                        }                                 
                    })}
                </div>
            </div>
        </main>
    )
}

export default Main