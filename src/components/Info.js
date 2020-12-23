import React from 'react'

export default function Info(props) {
    const acd = props.acd;
    return (
        <>
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
