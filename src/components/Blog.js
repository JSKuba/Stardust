import React, { useEffect } from 'react'

import blogStyles from './styles/Blog.module.scss'

const Blog = (props) => {

    useEffect(() => {
      const blogNodes = [...document.getElementById('blog').children]
      blogNodes.map((v, i, a) => {
          if(v.tagName === 'H3') {
            const article = document.createElement('article')
            const aside = document.createElement('aside')
            const spanWrapper = document.createElement('div')
            const container = document.createElement('div')
            article.appendChild(v)
            spanWrapper.appendChild(a[i+1])
            article.appendChild(a[i+2])
            article.appendChild(a[i+3])
            aside.appendChild(spanWrapper)
            spanWrapper.className = "span-wrapper"
            if (i >= 3 * 4) {
              container.classList.add(blogStyles.disabled)
            }
            if(((i + 7) % 8) === 0) { 
              container.appendChild(aside)
              container.appendChild(article)
            } else {
              container.appendChild(article)
              container.appendChild(aside)
            }
            container.classList.add(blogStyles.container)
            return document.getElementById('blog').appendChild(container)
          } else {
            return v
          }
      })


      const showAllBtn = document.createElement('button')
      showAllBtn.innerHTML = 'Show all'
      document.getElementById('blog').appendChild(showAllBtn)
      showAllBtn.addEventListener('click', () => {
        const containerList = [...document.getElementById('blog').getElementsByClassName(blogStyles.container)]
        console.log(containerList)
        containerList.map(v => {
          return v.classList.remove(blogStyles.disabled)
        })
      })


      let asides = [...document.getElementById('blog').getElementsByClassName('span-wrapper')]
      window.addEventListener('scroll', () => {
        asides.map(v => {
          if(window.pageYOffset > v.offsetTop + window.innerHeight/2 - (window.innerHeight - document.getElementById('main').offsetTop)) {
            return !v.parentElement.parentElement.classList.contains(blogStyles.disabled) && v.classList.add(blogStyles.visible)
          }
          return v
        })
      })
    })
    return (
        <section id={props.title} className={blogStyles.blog} dangerouslySetInnerHTML={{__html: props.html}} />
    )
}

export default Blog