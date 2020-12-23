import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Info from './Info';
import Navbar from './Navbar';

export default function Details() {
    const {id} = useParams();
    const [actorDetails, SetActorDetails] = useState([])
    useEffect(()=>{
        fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
        .then(res => res.json())
        .then(data => SetActorDetails(data))
    }, [])
    return (
        <div className="container">
            <div className="row">
            {
                actorDetails.map(acd => <Info acd={acd}></Info>)
            }
            </div>
           
        </div>
    )
}
