import React, { useEffect, useState } from 'react'
import Cards from './Cards'

export default function Charactars() {
    const [actors, setActors] = useState([])
    useEffect(() => {
       fetch("https://www.breakingbadapi.com/api/characters")
       .then(res => res.json())
       .then(data => setActors(data))
    }, [])

    const [searchCast, setSearchCast] = useState('')
    const filterCast = actors.filter( ac => {
        return ac.name.toLowerCase().includes( searchCast.toLowerCase())
    }) 

    return (
        <div className="container">
            <div className="p-3">
                <input type="text" placeholder="Search" onChange= { e => setSearchCast(e.target.value)} />
            </div>
            <div className="row">
                {
                    filterCast.map(actor=> <Cards actor={actor}></Cards>)
                }

            </div>
           
        </div>
    )
}
