import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

export default function Homepage () {

return (
    <div className="container text-center pt-5" style={{opacity: ".8" }}>
    <h3>This is the Homepage</h3>
        <img src= 'home.svg' alt="Home"/>
    <h3>Please follow the link to see <Link to="/feed"> Feed</Link></h3>
    </div>
)

}