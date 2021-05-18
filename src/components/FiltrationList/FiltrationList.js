import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import CharactersList from "../CharactersList/CharactersList";
import Form from './Form/Form'


const FiltrationList = (props) => {

    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        const value = e.currentTarget.elements.name.value || '';
        setQuery(value);
        console.log(e.currentTarget.elements.name)
    }

    return (
        <div className="container-xl">
            <div className="row">
                <div className="col-3">
                    <Form onChange={handleSearch} onSubmit={handleSearch}/>
                </div>

                <div className="col-9">
                    <CharactersList query={query}/>
                </div>
            </div>
        </div>
    )
}

export default FiltrationList

