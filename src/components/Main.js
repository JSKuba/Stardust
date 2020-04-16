import React from 'react'

import Logo from './Logo'
import mainStyles from './Main.module.scss'

const Main = () => {
    return (
        <main className={mainStyles.main}>
            <Logo />
            <div className={mainStyles.sheet}>
                Hello world
            </div>
        </main>
    )
}

export default Main