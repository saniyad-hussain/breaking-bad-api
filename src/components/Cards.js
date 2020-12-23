import React from 'react'
import { Link } from 'react-router-dom';

export default function Cards(props) {
    const actor = props.actor;
    const details = (id) =>{
        fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
    }
    return (
        <div className="col-md-3">
            <div class="card" >
                <img src={actor.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                <h5 class="card-title">{actor.name}</h5>
                <Link to={`/details/${actor.char_id}`}>
                    Details
                </Link>
                </div>
            </div>
        </div>
    )
}
