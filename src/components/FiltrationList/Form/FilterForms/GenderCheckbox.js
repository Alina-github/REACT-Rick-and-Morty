import React from "react";
import 'bootstrap/dist/css/bootstrap.css'

const GenderCheckbox = (props) => {

    return (
        <form>
            <div className="mb-5 mt-5">
                <h6>Gender:</h6>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Female
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Genderless
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Unknown
                    </label>
                </div>
            </div>

        </form>
    )
}
export default GenderCheckbox
