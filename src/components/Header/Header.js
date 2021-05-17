import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from "react-router-dom";

function Header() {
    return (

        <header className="blog-header py-3" style={{backgroundColor: "#D5CFE1"}}>
            {/*Below is Skip Navigation Link for better accessibility*/}
            <div id="skip"><a href="#maincontent">Skip to Main Content</a></div>
            <div className="container">
                <nav aria-label="primary" className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <Link to={`/`}>
                            <img src="/logo.svg" alt="Logo"
                             className="col-4 d-flex justify-content-start align-items-center"
                             style={{maxWidth: "65%"}}/>
                        </Link>
                    </div>
                    <div className="col-4 text-center">
                        <h1 className="blog-header-logo text-dark display-4">Rick and Morty</h1>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                            <label><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                 stroke="black"
                                 aria-label="Search"
                                 stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3"
                                 role="img"
                                 className="link-secondary"
                                 viewBox="0 0 24 24"> <title>Search</title>
                                <circle cx="10.5" cy="10.5" r="7.5"/>
                                <path d="M21 21l-5.2-5.2"/>
                            </svg>
                                </label>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header
