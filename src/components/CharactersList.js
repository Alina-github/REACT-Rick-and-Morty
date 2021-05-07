import React, {Fragment, useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import CharacterCard from "./CharacterCard"
import axios from "axios"
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Loader from './Loader'
import {DetailedCard} from './DetailedCard'

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
            setData(res.data);
            setIdRange(idRange + cardsLimit)
        });
    }

    const loadMoreCards = () => {
        let url = `https://rickandmortyapi.com/api/character/${getRangeofCharacters(idRange)}`
        axios.get(url).then(res => {
            setData([...data, ...res.data]);
            setIdRange(idRange + 10)
            setIsFetching(false)
        });
    }
    const isScrolling = () => {
        if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            setIsFetching(true)
        } else return
    }

    useEffect(() => {
        loadCards()

        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    }, [])

    useEffect(() => {
        if (isFetching) {
            setTimeout(loadMoreCards, 2000);
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
            <div className="container">
                <div className="text-center m-3">
                    <label htmlFor="charachterName" className="mr-1">
                        <strong>Name:
                        </strong>
                    </label>
                    <input name="name" id="charachterName"></input>
                    <button type="submit">search</button>
                </div>
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


