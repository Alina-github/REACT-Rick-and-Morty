import React, {Fragment, useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"
import {Link, useRouteMatch } from "react-router-dom";
import CharacterCard from "./CharacterCard/CharacterCard"
import Loader from '../Loader'
import useInfiniteScroll from "../hook/useInfiniteScroll";
import Search from './SearchForm'
const CharactersList = () => {

    let { path } = useRouteMatch();

    // const cardsLimit = 10; // !important
    //
    // const getRangeofCharacters = (id) => {
    //     let charactersIds = [];
    //     for (let i = 0; i < cardsLimit; i++) {
    //         charactersIds.push(id);
    //         id++;
    //     }
    //     return charactersIds;
    // }

//         const loadCards = () => {
//
//     let url = `https://rickandmortyapi.com/api/character/${getRangeofCharacters(idRange)}`; // how to get them it as range ([1-89])
//
//     axios.get(url).then(res => {
//         if (isFetching) {
//             setData([...data, ...res.data]);
//             setIsFetching(false);
//             setIdRange(idRange + cardsLimit);
//         } else {
//             setData(res.data);
//             setIdRange(idRange + cardsLimit);
//         }
//     });
// }
    const [page, setPage] = useState(1);

    const loadMoreCards = () => setTimeout(() => loadCards(point), 2000)
    let defaultEndpoint = `https://rickandmortyapi.com/api/character/`; // how to get them it as range ([1-89])

    const [data, setData] = useState([]);
    // const [idRange, setIdRange] = useState(1);

    const [isFetching, setIsFetching] = useInfiniteScroll(loadMoreCards);
    const [point, setPoint] = useState(defaultEndpoint);
    const [error, getError] = useState(null);


    const loadCards = (url) => {
    axios.get(url).then(res => {
        if (isFetching) {
            setData([...data, ...res.data.results]);
            setIsFetching(false);
            // setPage(page + 1);
            setPoint(res.data.info.next)
        } else {
            setData(res.data.results);
            setPoint(res.data.info.next)}
        }
    )
        .catch(error => {getError(error)});
    }

    const handleOnSubmitSearch = (e) => {
        e.preventDefault();
        const value = e.currentTarget.elements.query.value;
        const endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`
        setPoint(endpoint)
    }

    useEffect(() => {
        loadCards(point)
    }, [])

    // Check if data is ready or not.
    if (data.length === 0) {
        return (
            <Loader />
        )
    }
    // else if (error){
    //     return (
    //         <div className='container text-center'>
    //         <Search onSubmit={handleOnSubmitSearch}/>
    //         <h1> Please enter valid name</h1>
    //         </div>
    //             )
    // }

    return (
    <div>
        <Search onSubmit={handleOnSubmitSearch}/>
        {/*{error ? console.log(error) :*/}
            <div>
            <div className="container" id="maincontent">
                {data.map((item, key) => (
                    <Fragment key={key}>
                        <Link to={`${path}/card/${item.id}`}>
                            <CharacterCard item={item}/>
                        </Link>
                    </Fragment>
                ))}
                <div className="text-center mb-3">
                    {isFetching ? <Loader/> : null}
                </div>
            </div>
            </div>
        }
    </div>
    )
}

export default CharactersList

//expanded search -> send query param (name) and render them
// and main page
// till Monday

//1. create a custom hook
