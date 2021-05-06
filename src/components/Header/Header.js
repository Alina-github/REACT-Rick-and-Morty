import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="blog-header py-3" style={{backgroundColor: "#D5CFE1"}}>
            <div className="container">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <Link to={`/`}>
                            <img src="/logo.svg"
                             className="col-4 d-flex justify-content-start align-items-center"
                             style={{maxWidth: "65%"}}/>
                        </Link>
                    </div>
                    <div className="col-4 text-center">
                        <h1 className="blog-header-logo text-dark display-4">Rick and Morty</h1>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <a className="link-secondary" href="/feed" aria-label="Search" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                                 stroke="black"
                                 stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3"
                                 role="img"
                                 viewBox="0 0 24 24"> <title>Search</title>
                                <circle cx="10.5" cy="10.5" r="7.5"/>
                                <path d="M21 21l-5.2-5.2"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </header>

    )
}
export default Header
