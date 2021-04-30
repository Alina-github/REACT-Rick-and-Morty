import React from 'react';
import CharactersList from "./CharactersList"
import CharacterCard from "./CharacterCard"
import 'bootstrap/dist/css/bootstrap.css'
import Header from "./Header/Header"
import DetailedCard from "./DetailedCard"

class App extends React.Component {

    render() {
        return (
                <div>
                    <Header />
                    <div class="nav-scroller py-1 mb-2">
                </div>
        <div className={"container"}>
            <CharactersList />
    </div>

            </div>
        )
    }
}
export default App