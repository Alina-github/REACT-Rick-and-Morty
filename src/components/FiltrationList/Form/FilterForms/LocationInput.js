import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const LocationInput = (props) => {

    return (
        <div className="input-group mb-5 mt-5">
            <input type="search" onChange={props.onChange}
                   name="type"
                   id="location"
                   className="form-control" placeholder="Type of the location..."
                   aria-label="Character name" aria-describedby="button-addon2"/>
        </div>
    )
}
export default LocationInput
