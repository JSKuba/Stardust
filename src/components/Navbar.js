import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
                if((window.pageYOffset - document.getElementById('sheet').offsetTop/2 > v.offsetTop) & (window.pageYOffset - document.getElementById('sheet').offsetTop/2 < v.getBoundingClientRect().height + v.offsetTop)) {
                    return navItems[i].classList.add(navbarStyles.focused)
                } else {
                    return navItems[i].classList.remove(navbarStyles.focused)
                }
            })
        })
        navItems.map(v => {
            v.addEventListener('click', () => {
                window.scrollTo(0, document.getElementById(v.textContent.toLowerCase()).offsetTop + document.getElementById('sheet').offsetTop - 60)
            })
            return v
        })
        document.getElementById('arrow').addEventListener('click', () => {
            window.scrollTo(0, document.getElementById('about').offsetTop + document.getElementById('sheet').offsetTop - 60)
        })
        document.getElementById('arrow').addEventListener('click', () => {
            window.scrollTo(0, document.getElementById('about').offsetTop + document.getElementById('sheet').offsetTop - 60)
        })
        document.getElementById('main-logo').addEventListener('click', () => {
            window.scrollTo(0, document.getElementById('about').offsetTop + document.getElementById('sheet').offsetTop - 60)
        })
        document.getElementById('nav-logo').addEventListener('click', () => {
            window.location.reload()
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
                <img className={navActive ? `${navbarStyles.logoActive} ${navbarStyles.logo}` : navbarStyles.logo} id="nav-logo" src={logo} alt="logo" desc="Stardust logo" />
                <nav className={navActive ? `${navbarStyles.navbarActive} ${navbarStyles.navbar}` : navbarStyles.navbar}>
                    <ul className={navbarStyles.navbarList}>
                        {navItemsList.markdownRemark.frontmatter.navItems.map((v, i) => {
                            return (
                                <li key={i} className={navbarStyles.navbarListItem}>
                                    <span className={navbarStyles.scroll}>{v.charAt(0).toUpperCase() + v.substring(1)}</span>
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