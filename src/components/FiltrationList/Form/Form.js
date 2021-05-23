import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import NameInput from "./FilterForms/NameInput";
import GenderCheckbox from "./FilterForms/GenderCheckbox";
import StatusRadioButton from "./FilterForms/StatusRadioButton";
import SpeciesSelector from "./FilterForms/SpeciesSelector";
import LocationInput from "./FilterForms/LocationInput";


const Form = (props) => {

    return (
        <>
            <NameInput onChange={props.onChange}/>
            <GenderCheckbox isChecked={props.isChecked} onClick={props.onChange} gender={props.gender}/>
            <StatusRadioButton status={props.status} onChange={props.onChange}/>
            <SpeciesSelector species={props.species} onChange={props.onChange}/>
            <LocationInput onChange={props.onChange}/>
        </>
    )
}

export default Form
