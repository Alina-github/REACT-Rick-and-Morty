import React, {Fragment}  from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function CharacterCard(props) {

    return (
        <div className="row d-flex justify-content-center" onClick={props.onClick}>
            <div className="col-md-8 col-s-4">
                <div className="card hovercard">
                    <div className="cardheader">
                    </div>
                        <div className="avatar">
                        <img alt={props.item.name} src={props.item.image}/>
                    </div>
                        <h2>{props.item.name}</h2>
                </div>
            </div>
        </div>
    )
}
export default CharacterCard




