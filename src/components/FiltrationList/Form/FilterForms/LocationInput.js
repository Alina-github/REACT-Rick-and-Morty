import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const LocationInput = (props) => {

    return (
        <form onChange={props.onChange}>
            <div className="input-group mb-5 mt-5">
                <input type="search"
                       name="name"
                       id="characterName"
                       className="form-control" placeholder="Type of the location..."
                       aria-label="Character name" aria-describedby="button-addon2"/>
            </div>

        </form>
    )
}
export default LocationInput
