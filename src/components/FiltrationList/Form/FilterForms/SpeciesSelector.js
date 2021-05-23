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
                    <select className="custom-select" id="specious" name="species"
                            value={props.species} onChange={props.onChange}>
                        <option selected value="">Choose...</option>
                        <option value="alien">Alien</option>
                        <option value="human">Human</option>
                        <option value="mythological">Mythological Creature</option>
                        <option value="robot">Robot</option>
                        <option value="cronenberg">Cronenberg</option>
                        <option value="animal">Animal</option>
                    </select>
                </div>
            </div>
        </form>
    )
}
export default SpeciesSelector
