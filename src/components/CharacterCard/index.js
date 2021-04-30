import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

function CharacterCard(props) {
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-s-4">
                <div className="card hovercard">
                    <div className="cardheader">
                    </div>
                    <a target="_blank" href="#">
                    <div className="avatar">
                        <img alt={props.item.name} src={props.item.image}/>
                    </div>
                    </a>
                        <h2>{props.item.name}</h2>
                        <h6>{props.item.status}</h6>
                </div>
            </div>
        </div>
    )
}
export default CharacterCard




