import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {Link} from "react-router-dom";
import AsyncSearchBar from "../AsyncSelectBar/AsyncSelect";

function Header() {

    const [query, setQuery] = useState('');
    const [collabs, setCollabs] = useState("");


    const handleCharacterSearch = (e) => {
        e.preventDefault();
        const query = e.currentTarget.value ;
        setQuery(query);
    }


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
                    <div className="col-4 d-flex justify-content-end align-items-center row">
                        <div className="col-12">
                            {/*<DownshiftTwo query={query} onChange={handleCharacterSearch}/>*/}
                            <AsyncSearchBar />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
export default Header
