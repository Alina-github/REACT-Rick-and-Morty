import React, {Fragment, useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"
import {Link, useRouteMatch } from "react-router-dom";
import CharacterCard from "./CharacterCard/CharacterCard"
import Loader from '../Loader'
import useInfiniteScroll from "../useInfiniteScroll";

const CharactersList = () => {

    let { path } = useRouteMatch();
    const cardsLimit = 10;

    const getRangeofCharacters = (id) => {
        let charactersIds = [];
        for (let i = 0; i < cardsLimit; i++) {
            charactersIds.push(id);
            id++;
        }
        return charactersIds;
    }

    const loadCards = () => {
        let url = `https://rickandmortyapi.com/api/character/${getRangeofCharacters(idRange)}`;
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

    const loadMoreCards = () => setTimeout(loadCards, 2000)

    const [data, setData] = useState([]);
    const [idRange, setIdRange] = useState(1);
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

export default CharactersList