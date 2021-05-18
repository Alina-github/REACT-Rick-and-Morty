import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function CharacterCard(props) {

    return (
        <div className="col-md-12 col-s-4 m-auto">
            <div className="card hovercard">
                <div className="cardheader"></div>
                <div className="avatar">
                    <img alt={props.item.name} src={props.item.image}/>
                </div>
                <h2>{props.item.name}</h2>
            </div>
        </div>
    )
}
export default CharacterCard




