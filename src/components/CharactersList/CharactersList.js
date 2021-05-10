import React, {Fragment, useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"
import {Link, useRouteMatch } from "react-router-dom";
import SearchForm from '../SearchForm'
import CharacterCard from "../CharacterCard"
import Loader from '../Loader'

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

    const [data, setData] = useState([]);
    const [idRange, setIdRange] = useState(1);
    const [isFetching, setIsFetching] = useState(false);

    const loadCards = () => {

        let url = `https://rickandmortyapi.com/api/character/${getRangeofCharacters(idRange)}`;
        // let url = `https://rickandmortyapi.com/api/character?_limit=10`;

        axios.get(url).then(res => {
            if (isFetching) {
                setData([...data, ...res.data]);
                setIsFetching(false)
            }
            else {
                setData(res.data);
                setIdRange(idRange + cardsLimit);
            }
        });
    }

    useEffect(() => {
        loadCards()
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    }, [])

    const isScrolling = () => {
        if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            setIsFetching(true)
        } else return
    }

    useEffect(() => {
        if (isFetching) {
            setTimeout(loadCards, 2000);
        }
    }, [isFetching]);

    // Check if data is ready or not.
    if (data.length === 0) {
        return (
            <Loader />
        )
    }

    return (
        <>
            <div className="container" id="maincontent">
                    <SearchForm/>
                {data.map((item, key) => (
                    // don't use single <div> for grouping elements
                    //use Fragment instead

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


