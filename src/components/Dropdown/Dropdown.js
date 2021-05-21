import React, { useState, useEffect, Fragment} from "react";
import axios from "axios";
import {Link, useRouteMatch} from "react-router-dom";
import Select from 'react-select';


const DownshiftTwo = (props) =>  {

    let {path} = useRouteMatch();

    const [query, setQuery] = useState("");

    const [names, setNames] = useState([]);
    const [isBoxVisible, setIsBoxVisible] = useState(false)

    let queryEndpoint = `https://rickandmortyapi.com/api/character/?name=${props.query}`;

    const getCharacterNames= () => {
        let cancel
        axios({
            method: 'GET',
            url: queryEndpoint,
            params: {
            },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setNames(res.data.results)
            console.log(res.data.results)
        }).catch(err => {
                if (axios.isCancel(err)) return
            }
        )
        return () => cancel()
    }

    const toggleBox = () => {
        setIsBoxVisible(!isBoxVisible);
        console.log(isBoxVisible)
    };

    useEffect(()=>
    {    }, [isBoxVisible])


    useEffect(() => {
        getCharacterNames()
}
    , [props.query])

    const options = [
        // { value: data.name.toLowerCase(), label: data.name },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
            <><label>
                    <button onClick={toggleBox} data-toggle="collapse" data-target="#demo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"
                             stroke="black"
                             aria-label="Search"
                             stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3"
                             role="img"
                             className="link-secondary"
                             viewBox="0 0 24 24"> <title>Search</title>
                            <circle cx="10.5" cy="10.5" r="7.5"/>
                            <path d="M21 21l-5.2-5.2"/>
                        </svg>
                    </button>


                {isBoxVisible ?  <input id="demo" name="name" onChange={props.onChange}/> : null}
                </label>
            </>
        );
}

export default DownshiftTwo