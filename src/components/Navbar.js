import React, { useState } from 'react'
import { Link } from 'gatsby'

import logo from './img/stardust-logo.png'
import navbarStyles from './Navbar.module.scss'

const Navbar = () => {
    const [navActive, setNavActive] = useState(false)

    return (
        <header className={navbarStyles.mainHeader}>
            <button id="nav-btn" className={navActive ? `${navbarStyles.navBtn} ${navbarStyles.navBtnActive}` : navbarStyles.navBtn} onClick={e => navActive ? setNavActive(false) : setNavActive(true)}>
                <span className={navbarStyles.navBtnContainer}>
                    <span className={navbarStyles.navBtnLine} />
                </span>
            </button>
            <img className={navActive ? `${navbarStyles.logoActive} ${navbarStyles.logo}` : navbarStyles.logo} src={logo} alt="logo" desc="Stardust logo" />
            <nav className={navActive ? `${navbarStyles.navbarActive} ${navbarStyles.navbar}` : navbarStyles.navbar}>
                <ul className={navbarStyles.navbarList}>
                    <li className={navbarStyles.navbarListItem}>
                        <Link to="/">About</Link>
                    </li>
                    <li className={navbarStyles.navbarListItem}>
                        <Link to="/">Team</Link>
                    </li>
                    <li className={navbarStyles.navbarListItem}>
                        <Link to="/">Blog</Link>
                    </li>
                    <li className={navbarStyles.navbarListItem}>
                        <Link to="/">Partners</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar