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
            <GenderCheckbox />
            <StatusRadioButton/>
            <SpeciesSelector />
            <LocationInput />
        </>
    )
}
export default Form
