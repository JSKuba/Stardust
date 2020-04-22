import React, { useState, useEffect } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import logo from './img/stardust-logo.png'
import navbarStyles from './styles/Navbar.module.scss'

const Navbar = () => {
    const [navActive, setNavActive] = useState(false)
    const navItemsList = useStaticQuery(graphql`
        query {
            markdownRemark (
                frontmatter: {
                    title: {
                    eq: "nav"
                    }
                }
            ) {
            frontmatter {
                navItems
                }
            }
        }
    `)

    useEffect(() => {
        const sections = [...document.getElementsByTagName('section')]
        const navItems = [...document.getElementsByClassName(navbarStyles.navbarListItem)]
        window.addEventListener('scroll', () => {
            sections.map((v, i) => {
                if((window.pageYOffset - window.innerHeight/2 > v.offsetTop) & (window.pageYOffset - window.innerHeight/2 < v.getBoundingClientRect().height + v.offsetTop)) {
                    console.log('in')
                    return navItems[i].classList.add(navbarStyles.focused)
                } else {
                    return navItems[i].classList.remove(navbarStyles.focused)
                }
            })
        })
    })

    return (
        <header className={navbarStyles.mainHeader}>
            <div className={navbarStyles.navWrapper}>
                <button id="nav-btn" className={navActive ? `${navbarStyles.navBtn} ${navbarStyles.navBtnActive}` : navbarStyles.navBtn} onClick={e => navActive ? setNavActive(false) : setNavActive(true)}>
                    <span className={navbarStyles.navBtnContainer}>
                        <span className={navbarStyles.navBtnLine} />
                    </span>
                </button>
                <img className={navActive ? `${navbarStyles.logoActive} ${navbarStyles.logo}` : navbarStyles.logo} src={logo} alt="logo" desc="Stardust logo" />
                <nav className={navActive ? `${navbarStyles.navbarActive} ${navbarStyles.navbar}` : navbarStyles.navbar}>
                    <ul className={navbarStyles.navbarList}>
                        {navItemsList.markdownRemark.frontmatter.navItems.map((v, i) => {
                            return (
                                <li key={i} className={navbarStyles.navbarListItem}>
                                    <Link to="/">{v}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar