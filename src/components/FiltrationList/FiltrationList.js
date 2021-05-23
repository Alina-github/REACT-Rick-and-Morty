import React, {useEffect, useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import CharactersList from "../CharactersList/CharactersList";
import Form from './Form/Form'

const FiltrationList = (props) => {

    const filters = {name: '', type: '', species: '', status: 'alive', gender: ''}
    const [filterParameters, setParams] = useState(filters);

    const handleSearch = (e) => {

        let target = e.currentTarget.name;
        const value = e.currentTarget.value;

        if (target === 'name' || target === 'type' || target === 'species') {
            e.preventDefault();
            setParams({...filterParameters, [target]: value});
        } else if (target === 'status') {
            setParams({...filterParameters, [target]: value})
        } else if (target === "gender") {
            const checkboxStatus = e.currentTarget.checked;
            setParams({...filterParameters, [target]: !checkboxStatus ? "" : "female"});
        }
    }

    return (
        <div className="container-xl">
            <div className="row">
                <div className="col-3">
                    <Form onChange={handleSearch}
                          species={filterParameters.species}
                          gender={filterParameters.gender}
                          status={filterParameters.status}
                          type={filterParameters.type}
                    />
                </div>
                <div className="col-9">
                    <CharactersList
                        params={filterParameters}
                    />
                </div>
            </div>
        </div>
    )
}

export default FiltrationList

