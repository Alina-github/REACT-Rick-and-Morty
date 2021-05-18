import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const StatusRadioButton = (props) => {

    return (

        <form>
            <div className="mb-5 mt-5">
                <span>Status:</span>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                           id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Alive
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                           id="flexRadioDefault2"
                           checked/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Dead
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault"
                           id="flexRadioDefault2"
                           checked/>
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Unknown
                    </label>
                </div>

            </div>
        </form>
    )
}
export default StatusRadioButton
