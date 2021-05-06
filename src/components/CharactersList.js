import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import CharacterCard from "./CharacterCard"
import axios from "axios"
import { Link } from "react-router-dom";
import Loader from './Loader'

const CharactersList = () => {

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
        // we registered our isScrolling function to listen to the event scroll
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    }, []) //  отписываемся от этого слушателя, когда компонент отключен, когда компонент размонтируется.

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
        <div>
            <div className="container">
                {data.map((item, key) => (
                    <div key={key}>
                        <Link to={`/card/${item.id}`}>
                            <CharacterCard
                                item={item}
                                onClick={() => console.log(`${item.id}`)}/>
                        </Link>
                    </div>
                ))}
                <div className = "text-center mb-3">
                    { isFetching ? <Loader /> : null}
                </div>
            </div>
        </div>
    )
}
export default CharactersList


