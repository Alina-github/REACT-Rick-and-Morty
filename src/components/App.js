import React from 'react';
import CharactersList from "./CharactersList"
import 'bootstrap/dist/css/bootstrap.css'
import Homepage from "./Homepage/Homepage"
import Header from "./Header/Header.js"
import DetailedCard from "./DetailedCard"
import Episodes from "./Episodes"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {

    render() {

        return (

            <Router>
                <main>
                    <Header/>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/feed"  component={CharactersList} />
                    <Route path="/card/:id" exact component={DetailedCard} />
                    <Route path="/card/:id/episodes" component={Episodes} />
                </main>
            </Router>

        )
    }
}
export default App

