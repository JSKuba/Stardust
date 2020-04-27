import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import '../styles/index.scss'
import indexStyles from '../styles/index-main.module.scss'
import Main from '../components/Main'

const IndexPage = () => {
    return (
        <>
            <Helmet>
                <meta property="og:image" content="./img/fat_cat.jpeg" />
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
