import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import NameInput from "./FilterForms/NameInput";
import GenderCheckbox from "./FilterForms/GenderCheckbox";
import StatusRadioButton from "./FilterForms/StatusRadioButton";
import SpeciesSelector from "./FilterForms/SpeciesSelector";
import LocationInput from "./FilterForms/LocationInput";


const Form = (props) => {

    return (
        <form>
            <NameInput onChange={props.onNameChange}/>
            <GenderCheckbox isChecked={props.isChecked} onClick={props.onGenderChange} gender={props.gender}/>
            <StatusRadioButton status={props.status} onChange={props.onStatusChange} />
            <SpeciesSelector species={props.species} onChange={props.onSpeciesChange} />
            <LocationInput onChange={props.onTypeChange}/>
        </form>
    )
}

export default Form
