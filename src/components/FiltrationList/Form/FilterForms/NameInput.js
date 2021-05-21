import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const NameInput = (props) => {

    return (
            <div className="input-group mb-5 mt-5">
                <input type="search"
                       onChange={props.onChange}
                       name="name"
                       id="characterName"
                       className="form-control" placeholder="Character's name"
                       aria-label="Character name..." aria-describedby="button-addon2"/>
            </div>
    )
}
export default NameInput
