import React, {Fragment, useState, useEffect, useRef} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"
import {Link, useRouteMatch} from "react-router-dom";
import CharacterCard from "./CharacterCard/CharacterCard"
import Loader from '../Loader'

let cancel;

const CharactersList = (props) => {

    let {path} = useRouteMatch();
    let defaultEndpoint = `https://rickandmortyapi.com/api/character/`;
    const [data, setData] = useState([]);
    const [nextPage, setNextPage] = useState('');
    const [error, setNoCharacterError] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const refContainer = useRef({data, nextPage});

    const loadCards = (nextPage) => {

        setIsFetching(true);
        let getParams = toParams(props.params);
        axios({
            method: 'GET',
            url: (refContainer.current.data.length === 0 && !error) ? defaultEndpoint : nextPage,
            params: getParams,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            (refContainer.current.data.length == 0) ? setData(res.data.results) : setData([...new Set([...refContainer.current.data, ...res.data.results])]);
            setNextPage(res.data.info.next);
            setNoCharacterError(false);
            setIsFetching(false);
        }).catch(err => {
                setIsFetching(false);
                setNoCharacterError(err)
                if (axios.isCancel(err)) return
            }
        )
        return () => cancel()
    }

    function toParams(filterInputsData) {
        const filtersNames = Object.keys(filterInputsData);
        const notEmptyParams = {};
        for (const key of filtersNames) {
            const value = filterInputsData[key];
            if (value !== "") {
                notEmptyParams[key] = value;
            }
        }
        return notEmptyParams
    }


    useEffect(() => {
            refContainer.current = {...refContainer.current, data, nextPage};
        },
        [data, nextPage])

    useEffect(() => {
        setData([]);
        const timer = setTimeout(() => {
            loadCards(defaultEndpoint)
        }, 500);
        setIsFetching(true);
        return () => clearTimeout(timer);
    }, [props.params])

    const isScrolling = () => {
        if (document.documentElement.scrollTop + document.documentElement.clientHeight
            >= document.documentElement.scrollHeight - 1 && refContainer.current.nextPage) {
            loadCards(refContainer.current.nextPage);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    }, [])

    return (
        <div>
            {error ? <h2 className="container d-flex align-items-center justify-content-center mt-3 mb-3"
                         style={{opacity: ".8"}}>Oops, no such character</h2> :
                <div>
                    <div className="container" id="maincontent">
                        {data.map((item, key) => (
                            <Fragment key={key}>
                                <Link to={`${path}/card/${item.id}`}>
                                    <CharacterCard item={item}/>
                                </Link>
                            </Fragment>
                        ))}
                    </div>
                    {isFetching && <div className="text-center mb-3">
                        <Loader/>
                    </div>}
                </div>}
        </div>
    )
}

export default CharactersList