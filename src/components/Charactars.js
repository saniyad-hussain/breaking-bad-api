import React, { useEffect, useState } from 'react'
import Cards from './Cards'

export default function Charactars() {
    const [actors, setActors] = useState([])
    useEffect(() => {
       fetch("https://www.breakingbadapi.com/api/characters")
       .then(res => res.json())
       .then(data => setActors(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    actors.map(actor=> <Cards actor={actor}></Cards>)
                }

            </div>
           
        </div>
    )
}
