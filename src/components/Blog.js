import React, { useEffect } from 'react'
import { useStaticQuery } from 'gatsby'

import blogStyles from './Blog.module.scss'

const Blog = (props) => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: { frontmatter: { title: { eq: "blog" } } } ) {
          edges {
            node {
                frontmatter {
                title
              }
              html
            }
          }
        }
      }
    `)

    useEffect(() => {
      const blogNodes = [...document.getElementById('blog').children]
      blogNodes.map((v, i, a) => {
        if(v.tagName == 'H4') {
          const article = document.createElement('article')
          const aside = document.createElement('aside')
          const asideContainer = document.createElement('div')
          asideContainer.className = blogStyles.asideContainer
          article.className = blogStyles.article
          article.appendChild(v)
          aside.appendChild(a[i+1])
          article.appendChild(a[i+2])
          article.appendChild(a[i+3])
          asideContainer.appendChild(aside)
          if(((i + 7) % 8) == 0) { 
            document.getElementById('blog').appendChild(asideContainer)
            document.getElementById('blog').appendChild(article)
          } else {
            document.getElementById('blog').appendChild(article)
            document.getElementById('blog').appendChild(asideContainer)
            
          }
        }
      })
      let asideContainers = [...document.getElementsByClassName(`${blogStyles.asideContainer}`)]
      window.addEventListener('scroll', () => {
        asideContainers.map((v, i) => {
          if(window.pageYOffset > v.offsetTop + 300) {
            v.className = `${blogStyles.asideContainer} ${blogStyles.asideContainerVisible}`
          }
        })
      })
    })
    return (
        <section id={props.title} className={blogStyles.blog} dangerouslySetInnerHTML={{__html: props.html}} />
    )
}

export default Blog