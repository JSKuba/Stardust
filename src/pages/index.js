import React from 'react'

import Layout from '../components/Layout'
import '../styles/index.scss'
import indexStyles from '../styles/index-main.module.scss'
import Main from '../components/Main'

const IndexPage = () => {
    return (
        <div className={indexStyles.wrapper}>
            <Layout>
                <Main />
            </Layout>
        </div>
    )
}

export default IndexPage
