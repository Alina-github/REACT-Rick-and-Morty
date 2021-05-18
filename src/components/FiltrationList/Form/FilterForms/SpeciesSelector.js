import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const SpeciesSelector = (props) => {

    return (
        <form>
            <div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Species</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">Alien</option>
                        <option value="2">Human</option>
                        <option value="3">Mythological Creature</option>
                        <option value="4">Robot</option>
                        <option value="5">Cronenberg</option>
                        <option value="6">Animal</option>
                    </select>
                </div>
            </div>
        </form>
    )
}
export default SpeciesSelector
