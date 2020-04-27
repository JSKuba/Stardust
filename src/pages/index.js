import React from 'react'
import { graphql, useStaticQuery, Helmet } from 'gatsby'

import Layout from '../components/Layout'
import '../styles/index.scss'
import indexStyles from '../styles/index-main.module.scss'
import Main from '../components/Main'

const IndexPage = (props) => {
    const img = useStaticQuery(graphql`
        query {
            allFile (
                filter: { ext: { ne: ".md" } }
            ) {
                edges {
                    node {
                        name
                        absolutePath
                    }
                }
            }
        }
    `)

    let absolutePath = ''

    img.allFile.edges.map(v => {
        if (v.node.name === props.pageContext.slug) {
            absolutePath = v.node.absolutePath
        }
        return v
    })

    return (
        <>
            <Helmet>
                <title>Stardust</title>
                <html lang="en" xmlns="http://www.w3.org/1999/xhtml" prefix="og: http://ogp.me/ns# fb: http://www.facebook.com/2008/fbml" />
                <meta property="og:image" content={absolutePath === '' ? null : absolutePath}/>
                <meta property="og:title" content={`${props.pageContext.slug}`} />
                <meta property="og:site_name" content="Stardust" />
                <meta property="og:url" content={`https://jskuba.netlify.app/${props.pageContext.slug}`}/>
                <meta property="og:type" content="website" />
            </Helmet>
            <div className={indexStyles.wrapper}>
                <Layout>
                    <Main />
                </Layout>
            </div>
        </>
    )
}

export default IndexPage
