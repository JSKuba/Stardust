import React, { useEffect } from 'react'

import teamStyles from './styles/Team.module.scss'

const Team = (props) => {

    useEffect(() => {
        const team = [...document.getElementById('team').getElementsByTagName('p')]
        const teamEven = team.filter((v, i) => {
            return (
                i % 2 === 0 
                ? true
                : false
            )
        })
        teamEven.forEach((v, i) => {
            v.addEventListener('click', e => {
                if (e.currentTarget.className !== teamStyles.active) {
                    team.forEach(v => {
                        v.classList.remove(teamStyles.active)
                    })
                    team[i*2+1].classList.toggle(teamStyles.active)
                    team[i*2].classList.toggle(teamStyles.active)
                    team[i*2].scrollIntoView({behavior: "smooth", block:"center"})
                } else {
                    team.forEach(v => {
                        v.classList.remove(teamStyles.active)
                    })
                }
            })
        })
        const container = document.createElement('div')
        team.map(v => {
            return container.appendChild(v)
        })
        document.getElementById('team').appendChild(container)
    })

    return (
        
        <section 
            dangerouslySetInnerHTML={{__html: props.html}}
            id={props.title}
            className={teamStyles.team}
        />
    )
}

export default Team