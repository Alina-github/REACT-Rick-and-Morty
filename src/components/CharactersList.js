import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import CharacterCard from "./CharacterCard"
import axios from "axios"
import DetailedCard from "./DetailedCard"


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

    const loadData = () =>{
        let url = `https://rickandmortyapi.com/api/character/${getRangeofCharacters(idRange)}`;
        axios.get(url).then(res => {
            setData(res.data);
            setIdRange(idRange+10)
        });
    }

    const moreData = () => {
        let url = `https://rickandmortyapi.com/api/character/${getRangeofCharacters(idRange)}`;
        axios.get(url).then(res => {
            setData([...data, ...res.data]);
            setIdRange(idRange+10)
            setIsFetching(false)
        });
    }
    const isScrolling =()=>{
        if(document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight)
            // window.innerHeight + document.documentElement.scrollTop!== document.documentElement.offsetHeight){
        {setIsFetching(true)

        }
        else  return
    }

    useEffect(()=>{
        loadData()
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    }, [])

    useEffect(() => {
        if (isFetching){
            moreData();
        }
    }, [isFetching]);

    if (data.length===0) {
        return <h1>Loading...</h1>;
    }

    // useEffect вызывается каждый раз, когда
    // происходит обновление. Если вы передадите какие-либо значения в
    // этот массив, вызов будет перезапущен.

    return (
        <div className="container">
            {data.map((item, key) => (
                <div key={key}>
                    {/*<a href={article.url} target="_blank">*/}
                    <CharacterCard item = {item}/>
                    {/*</a>*/}
                </div>
            ))}
        </div>
    )
}

export default CharactersList

//use hooks useState and useEffect to track local states inside the component
// Первое значение — это отслеживаемое значение текущего состояния,
// а второе — функция для обновления значения состояния.
// const [count, setCount] = useState(0)
//  setState объединяет свойства объекта, но useState заменяет все значение.

