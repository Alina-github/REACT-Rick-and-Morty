import {useLocation} from "react-router-dom";
import React from "react";

const NoMatch = () =>  {
    const location = useLocation();

    return (
        <div className="container text-center pt-5" style={{opacity: ".8" }}>
            <h3>No match for <code>{location.pathname}</code></h3>
        </div>
    );
}

export default NoMatch
