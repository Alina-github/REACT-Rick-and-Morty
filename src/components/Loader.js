import React from "react"
import 'bootstrap/dist/css/bootstrap.css'
import Spinner from "react-bootstrap/Spinner";

export default function Loader() {

    return (
        <div className="container d-flex align-items-center justify-content-center pt-3 ">
            <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
        </div>
    )
}