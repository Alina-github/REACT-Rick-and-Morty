import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const LocationInput = (props) => {

    return (
        <form>
            <div className="input-group mb-5 mt-5">
                <input type="search"
                       name="query"
                       id="characterName"
                       className="form-control" placeholder="Character's name"
                       aria-label="Character name" aria-describedby="button-addon2"/>
            </div>

        </form>
    )
}
export default LocationInput
