import React from 'react'
import Navbar from './Navbar';

export default function Info(props) {
    const acd = props.acd;
    return (
        <>
            <Navbar/>
            <div className="col-md-6" >
                <img src={acd.img} style={{width:'70%'}}/>
            </div>
            <div className="col-md-6">
                <h1>{acd.name}</h1>
                <p>{acd.birthday}</p>
            </div>
        </>
    )
}
