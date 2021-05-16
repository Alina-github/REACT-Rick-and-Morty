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

    const loadMoreCards = () => setTimeout(() => loadCards(point), 2000)
    let defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useInfiniteScroll(loadMoreCards);
    const [error, getError] = useState(null);
    const [point, setPoint] = useState(defaultEndpoint);

    const loadCards = (url) => {
    axios.get(url).then(res => {
            if (isFetching) {
                setData([...data, ...res.data.results]);
                setIsFetching(false);
                setPoint(res.data.info.next)
            } else if (res.data.info.prev) {
                setData([...data, ...res.data.results]);
                setPoint(res.data.info.next)
            } else {
                setData([res.data.results])
                setPoint(res.data.info.next)
            }
        })
    }

    useEffect(()=>
    loadCards(point), [])

    const handleOnSubmitSearch = (e) => {
        e.preventDefault();
        const value = e.currentTarget.elements.query.value || '';
        const endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`
        setPoint(endpoint);
    }

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
    </div>
    )
}

export default CharactersList

//expanded search -> send query param (name) and render them
// and main page
// till Monday