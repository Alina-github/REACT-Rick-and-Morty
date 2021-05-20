import React, {useEffect, useRef, useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import CharactersList from "../CharactersList/CharactersList";
import Form from './Form/Form'


const FiltrationList = (props) => {

    const [isChecked, setIsChecked] = useState(false);

    const [name, setName] = useState('');
    const [gender, setGenderChecked] = useState('');
    const [status, setStatus] = useState('alive');
    const [species, setSpecies] = useState('');
    const [type, setType] = useState('');

    const [params, setParams] = useState('');

    // let params = {
    //     name : value
        // gender : ,
        // status : ,
        // species : ,
        // type :

    const handleSearch = (e) => {
        e.preventDefault();
        const value = e.currentTarget.elements.name.value;
        setName(value);
        console.log(value)
    }

    const handleLocationSearch = (e) => {
        e.preventDefault();
        const type = e.currentTarget.elements.name.value ;
        setType(type);
        console.log(type)
    }

    const handleStatusSearch = (e) => {
        const status = e.currentTarget.value ;
        setStatus(status);
        console.log(status)
    }

    const handleSpeciesSearch = (e) => {
        e.preventDefault();
        const species = e.currentTarget.value ;
        setSpecies(species);
        console.log(species)
    }

    const handleGenderCheckbox = () => {
        setIsChecked(!isChecked)
    }

    const refContainer = useRef({isChecked});

    useEffect(() => {
            refContainer.current = {...refContainer.current, isChecked};
            setGenderChecked( refContainer.current.isChecked ? 'female': '');
        },
        [isChecked])

    // const param = { name, gender, status, species, type }

    return (
         <div className="container-xl">
            <div className="row">
                <div className="col-3">
                    <Form onNameChange={handleSearch} onSubmit={handleSearch}
                          species={species} onSpeciesChange={handleSpeciesSearch}
                          isChecked={isChecked} gender={gender}
                          onGenderChange={handleGenderCheckbox}
                          status = {status} onStatusChange={handleStatusSearch}
                          onTypeChange={handleLocationSearch}
                    />
                </div>

                <div className="col-9">
                    <CharactersList
                        // param={param}
                    name={name}
                    type ={type}
                    species={species}
                    gender={gender}
                    status = {status}
                    />
                </div>
            </div>
        </div>
    )
}

export default FiltrationList

