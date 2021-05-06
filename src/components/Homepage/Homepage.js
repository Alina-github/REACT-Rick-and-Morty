import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

export default function Homepage () {

return (
    <div className="container text-center pt-5">
    <h3>This is the Homepage</h3>
        <img src= 'home.svg' style={{opacity: ".8" }}/>
    <h3>Please follow the link to see <a href="/feed"> Feed</a></h3>
    </div>
)
}