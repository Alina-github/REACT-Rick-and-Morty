import React from "react";

const SearchForm = () => {
    return (
        <div className="text-center m-3">
            <form>
                <label htmlFor="characterName" className="mr-1">
                    <strong>Name:
                    </strong>
                </label>
                <input type="search" name="name" id="characterName"></input>
                <button type="submit">search</button>
            </form>
        </div>
    )
}

export default SearchForm

