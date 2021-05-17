import React, {Fragment, useState, useEffect, useRef} from "react"
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"
import {Link, useRouteMatch} from "react-router-dom";
import CharacterCard from "./CharacterCard/CharacterCard"
import Loader from '../Loader'
import useInfiniteScroll from "../hook/useInfiniteScroll";
import Search from './SearchForm'

const CharactersList = () => {

    const [query, setQuery] = useState('');

    let {path} = useRouteMatch();
    let defaultEndpoint = `https://rickandmortyapi.com/api/character/?name=${query}`;

    const [data, setData] = useState([]);
    const [nextPage, setNextPage] = useState('');
    const [error, setNoCharacterError] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const refContainer = useRef({data, nextPage});

    const loadCards = () => {

        setIsFetching(true);
        let cancel;
        axios({
            method: 'GET',
            url: defaultEndpoint,
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setData(res.data.results)
            setNextPage(res.data.info.next);
            setNoCharacterError(false);
            setIsFetching(false);
        })
            .catch(err => {
                    setNoCharacterError(err)
                    if (axios.isCancel(err)) return
                }
            )
        return () => cancel()
    }
    const loadMoreCards = ( nextPage ) => {
        setIsFetching(true);
        axios.get(nextPage).then(res => {
            setData([...refContainer.current.data, ...res.data.results]);
            setIsFetching(false);
            setNextPage(res.data.info.next)
        })
            .catch(err => {
                    setIsFetching(false);
                }
            )
    }

    useEffect(() => {
            refContainer.current = {...refContainer.current, data, nextPage};
            //{data: data, nextPage: nextPage}
        },
        [data, nextPage])

    const handleSearch = (e) => {
        e.preventDefault();
        const value = e.currentTarget.elements.query.value || '';
        setQuery(value);
    }

    useEffect(() =>
        loadCards(), [query])

    const isScrolling = () => {
        if (document.documentElement.scrollTop + document.documentElement.clientHeight
            >= document.documentElement.scrollHeight - 1 && refContainer.current.nextPage) {
            loadMoreCards( refContainer.current.nextPage );
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", isScrolling      );
        return () => window.removeEventListener("scroll", isScrolling);
    }, [])

    return (
        <div>
            <Search onChange={handleSearch} onSubmit={handleSearch}/>
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

//expanded search -> send query param (name) and render them
// and main page
// till Monday