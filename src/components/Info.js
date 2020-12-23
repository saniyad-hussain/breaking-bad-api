import React from 'react'
import Navbar from './Navbar';

export default function Info(props) {
    const acd = props.acd;
    return (
        <>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6" >
                        <img src={acd.img} style={{width:'70%'}}/>
                    </div>
                    <div className="col-md-6">
                        <h1>Name: {acd.name}</h1>
                        <p>Birthday: {acd.birthday}</p>
                        <p>Occupation: {acd.occupation}</p>
                        <p>Nickname: {acd.nickname}</p>
                        <p>{acd.category}</p>
                    </div>
                </div>
                
            </div>
            
        </>
    )
}
