import React, { useState, useEffect } from "react"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

export default function Episodes(props) {

    const [episodes, getEpisodes] = useState([]);

    useEffect(() => {
        loadEpisodes()
    }, [])

    const loadEpisodes = () => {

        let url = `https://rickandmortyapi.com/api/character/${props.match.params.id}`;
        axios.get(url).then(res => {
            const allEpisodes = res.data.episode;
            getEpisodes(allEpisodes);
        });
    }

    return (
        <div class = "container">
        <ul class="mt-4">
            {episodes.map(episode => (
                <div class="text-center">
                    <a href={episode}>{episode}</a>
                </div> ))
            }
        </ul>
        </div>
    )
}
