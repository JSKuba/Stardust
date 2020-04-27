import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

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
                <meta property="og:image" content={!absolutePath === '' && absolutePath}/>
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
