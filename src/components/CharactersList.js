import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import CharacterCard from "./CharacterCard";
import DetailedCard from "./DetailedCard"

class CharactersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

   componentDidMount() {
        fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,10")
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        items: data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        console.log(this.state.items)
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div class="container">
                    {items.map(item => (
                        <CharacterCard item={item}/>

                    ))}
                </div>
            )
        }
    }
}
export default CharactersList