import React, {Fragment, useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"
import {Link, useRouteMatch } from "react-router-dom";
import CharacterCard from "./CharacterCard/CharacterCard"
import Loader from '../Loader'
import useInfiniteScroll from "../hook/useInfiniteScroll";
import Search from './SearchForm'

const QueryList = () => {

    let { path } = useRouteMatch();

    const cardsLimit = 10; // !important

    const getRangeofCharacters = (id) => {
        let charactersIds = [];
        for (let i = 0; i < cardsLimit; i++) {
            charactersIds.push(id);
            id++;
        }
        return charactersIds;
    }

        const loadCards = () => {

    let url = `https://rickandmortyapi.com/api/character/${getRangeofCharacters(idRange)}`; // how to get them it as range ([1-89])

    axios.get(url).then(res => {
        if (isFetching) {
            setData([...data, ...res.data]);
            setIsFetching(false);
            setIdRange(idRange + cardsLimit);
        } else {
            setData(res.data);
            setIdRange(idRange + cardsLimit);
        }
    });
}



//     const loadCards = () => {
//
//     let url = `https://rickandmortyapi.com/api/character/?page=${page}`; // how to get them it as range ([1-89])
//
//     axios.get(url).then(res => {
//         if (isFetching) {
//             setData([...data, ...res.data.results]);
//             setIsFetching(false);
//             setPage(page + 1);
//         } else {
//             setData(res.data.results);
//             setPage(page + 1);
//         }
//     });
// }

    const loadMoreCards = () => setTimeout(loadCards, 2000)

    const [data, setData] = useState([]);
    const [idRange, setIdRange] = useState(1);
    // const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useInfiniteScroll(loadMoreCards);

    useEffect(() => {
        loadCards()
    }, [])

    // Check if data is ready or not.
    if (data.length === 0) {
        return (
            <Loader />
        )
    }

    return (
    <>
        <Search />
        <div className="container" id="maincontent">
            {data.map((item, key) => (
                <Fragment key={key}>
                    <Link to={`${path}/card/${item.id}`}>
                        <CharacterCard item={item}  />
                    </Link>
                </Fragment>
            ))}
            <div className = "text-center mb-3">
                { isFetching ? <Loader /> : null}
            </div>
        </div>
    </>
    )
}

export default QueryList

//expanded search -> send query param (name) and render them
// and main page
// till Monday