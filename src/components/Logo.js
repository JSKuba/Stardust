import React, {useEffect} from 'react'

import logo from './img/stardust-logo-transp.png'
import svg from './img/arrow.svg'
import logoStyles from './styles/Logo.module.scss'

const Logo = () => {
    useEffect(() => {
        if (window.innerWidth >= 1080) {
            const arrow = document.getElementsByClassName(logoStyles.arrow)
            window.addEventListener('scroll', () => {
                if(window.pageYOffset > 0) {
                    !arrow[0].classList.contains(logoStyles.hidden) && arrow[0].classList.add(logoStyles.hide)
                }
            })
        }
    })

    return (
        <figure>
            <img className={logoStyles.mainLogo} src={logo} alt="logo" desc="Stardust logo" />
            <img className={logoStyles.arrow} src={svg} alt="arrow" desc="arrow" />
        </figure>
    )
}

export default Logo