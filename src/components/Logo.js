import React from 'react'

import logo from './img/stardust-logo-transp.png'
import logoStyles from './Logo.module.scss'

const Logo = () => {
    return (
        <figure>
            <img className={logoStyles.mainLogo} src={logo} alt="logo" desc="Stardust logo" />
        </figure>
    )
}

export default Logo