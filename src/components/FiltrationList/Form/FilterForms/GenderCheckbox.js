import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const GenderCheckbox = (props) => {

    return (
        <form>
            <div className="mb-5 mt-5">
                <h6>Gender:</h6>
                <div className="form-check">
                    <input className="form-check-input"
                           type="checkbox"
                           checked={props.isChecked}
                           onClick={props.onClick}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Female
                    </label>
                </div>
            </div>

        </form>
    )
}
export default GenderCheckbox

