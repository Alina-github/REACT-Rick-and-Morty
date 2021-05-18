import React from "react";
import 'bootstrap/dist/css/bootstrap.css'


const SearchForm = (props) => {

    return (
            <form onChange={props.onChange} onSubmit={props.onSubmit}>

                <div className="container d-flex align-items-center justify-content-center mt-3 mb-3">
                <div className="col-6">
                <div className="input-group mb-3">
                    <input type="search"
                           name="query"
                           id="characterName"
                           className="form-control" placeholder="Character's name"
                           aria-label="Character name" aria-describedby="button-addon2"/>
                </div>
                </div>
            </div>
        </form>
    )
}

export default SearchForm

