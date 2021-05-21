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
        const value = e.currentTarget.value;
        if(e.currentTarget.id === 'characterName') {
            setName(value);
        } else if (e.currentTarget.id === 'location') {
            setType(value);
        } else {
            setSpecies(value)
        }
    }

    const handleStatusRadioButton = (e) => {
        const status = e.currentTarget.value ;
        setStatus(status);
        console.log(status)
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

    return (
         <div className="container-xl">
            <div className="row">
                <div className="col-3">
                    <Form onChange={handleSearch}
                          onGenderChange={handleGenderCheckbox}
                          onStatusChange={handleStatusRadioButton}
                          species={species} isChecked={isChecked} gender={gender} status={status} type={type}
                    />
                </div>
                <div className="col-9">
                    <CharactersList
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

