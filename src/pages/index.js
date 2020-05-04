import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import '../styles/index.scss'
import indexStyles from '../styles/index-main.module.scss'
import Main from '../components/Main'

const IndexPage = (props) => {

    let helmet
    if(props.pageContext.slug !== undefined) {
        helmet = <Helmet>
                    <title>Stardust</title>
                    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" prefix="og: http://ogp.me/ns# fb: http://www.facebook.com/2008/fbml" />
                    <meta property="og:image" content={`https://raw.githubusercontent.com/JSKuba/gatsby-netlify/master/src/md-data/main/${props.pageContext.slug}/${props.pageContext.slug}.jpg`}/>
                    <meta property="og:title" content={`Stardust - ${props.pageContext.slug}`} />
                    <meta property="og:site_name" content="Stardust" />
                    <meta property="og:url" content={`https://jskuba.netlify.app/${props.pageContext.slug}/`}/>
                    <meta property="og:type" content="website" />
                </Helmet>
    } else {
        helmet = <Helmet>
                    <title>Stardust</title>
                    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" prefix="og: http://ogp.me/ns# fb: http://www.facebook.com/2008/fbml" />
                    <meta property="og:image" content="https://raw.githubusercontent.com/JSKuba/gatsby-netlify/master/src/components/img/logo.png" />
                    <meta property="og:title" content="Stardust" />
                    <meta property="og:site_name" content="Stardust" />
                    <meta property="og:url" content="https://jskuba.netlify.app/"/>
                    <meta property="og:type" content="website" />
                </Helmet>
    }

    return (
        <>
            {helmet}
            <div className={indexStyles.wrapper}>
                <Layout>
                    <Main />
                </Layout>
            </div>
        </>
    )
}

export default IndexPage
