import React, { useState, useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.css'
import CharacterCard from "./CharacterCard"
import axios from "axios"
import Header from "./Header/Header"
import DetailedCard from "./DetailedCard"
import { Link } from "react-router-dom";

const CharactersList = () => {

    console.log(<CharactersList />)

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

   // loads data the first time you load the page and is triggered once.
    const loadData = () =>{
        let url = `https://rickandmortyapi.com/api/character/${getRangeofCharacters(idRange)}`;
        axios.get(url).then(res => {
            setData(res.data);
            setIdRange(idRange + cardsLimit)
        });
    }

    // gets more data and is triggered once a user scrolls down to the bottom.
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
        {setIsFetching(true)
        }
        else  return
    }

    useEffect(()=>{
        loadData()
        // we registered our isScrolling function to listen to the event scroll
        window.addEventListener("scroll", isScrolling);
        return () => window.removeEventListener("scroll", isScrolling);
    }, []) //  отписываемся от этого слушателя, когда компонент отключен, когда компонент размонтируется.


   // useEffect#2 listens to the isFetching useState, then gets more data when
    // it's true (isFetching turns to 'true' as soon as we scrolls to the bottom
    // *isScrolling func)
    useEffect(() => {
        if (isFetching){
            moreData();
        }
    }, [isFetching]);
    // useEffect вызывается каждый раз, когда
    // происходит обновление. Если вы передадите какие-либо значения в
    // этот массив, вызов будет перезапущен.

    // Check if data is ready or not.
    if (data.length===0) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
        <Header />
        <div className="container">
            {data.map((item, key) => (
                <div key={key}>
                    <Link to={`/card/${item.id}`}>
                    <CharacterCard
                        item = {item}
                        onClick = {() => console.log(`${item.id}`)} />
                    </Link>
                </div>
            ))}
        </div>
        </div>
    )
}

export default CharactersList

//use hooks useState and useEffect to track local states inside the component
// Первое значение — это отслеживаемое значение текущего состояния,
// а второе — функция для обновления значения состояния.
// const [count, setCount] = useState(0)
//  setState объединяет свойства объекта, но useState заменяет все значение.

