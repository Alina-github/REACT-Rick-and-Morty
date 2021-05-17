import React, {Fragment, useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import axios from "axios"
import {Link, useRouteMatch } from "react-router-dom";
import CharacterCard from "./CharacterCard/CharacterCard"
import Loader from '../Loader'
import useInfiniteScroll from "../hook/useInfiniteScroll";
import Search from './SearchForm'

const CharactersList = () => {

    const [query, setQuery] = useState('');

    let { path } = useRouteMatch();
    let defaultEndpoint = `https://rickandmortyapi.com/api/character/?name=${query}`;

    const [data, setData] = useState([]);
    const [nextPage, setNextPage] = useState();
    const [error, setNoCharacterError] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [isFetching, setIsFetching] = useState(false);

    const loadCards = () => {
        setHasMore(true)
        let cancel
    axios({
        method: 'GET',
        url: defaultEndpoint,
        cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
        setData(res.data.results)
        setNextPage(res.data.info.next);
        setNoCharacterError(false);
        })
        .catch(err => {
            setNoCharacterError(err)
            if (axios.isCancel(err)) return
         }
        )
        return () => cancel()
    }

    const loadMoreCards = (nextPage) => {
        axios.get(nextPage).then(res => {
            setData([...data, ...res.data.results]);
            setIsFetching(false);
            setNextPage(res.data.info.next)
            setHasMore(res.data.results.length > 0)
            console.log(hasMore)
        })
            .catch(err => {
                    setHasMore(false);
                    console.log(hasMore)
                debugger
                    setIsFetching(false);
                    console.log(data)
                }
            )
    }

    const handleSearch = (e) => {
        e.preventDefault();
        const value = e.currentTarget.elements.query.value || '';
        setQuery(value);
    }

    useEffect(()=>
        loadCards(), [query])

    useEffect(() => {
        if (isFetching){
            setTimeout(() => loadMoreCards(nextPage), 1500);
        } else return
    }, [isFetching]);

    useEffect(()=>{
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    }, [])

    function isScrolling() {
        if (document.documentElement.scrollTop + document.documentElement.clientHeight
            >= document.documentElement.scrollHeight-1){
            setIsFetching(true)
        } else return
    }

    // Check if data is ready or not.
    if (data.length === 0) {
        return (
            <Loader />
        )
    }

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
                    <div className="text-center mb-3">
                        {hasMore ? <Loader/> : <h6>You've found all the requested characters!</h6>}
                    </div>
                </div>
            </div>}
     </div>
    )
}

export default CharactersList

//expanded search -> send query param (name) and render them
// and main page
// till Monday