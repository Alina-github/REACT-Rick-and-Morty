import React from 'react';
import CharactersList from "./CharactersList"
import 'bootstrap/dist/css/bootstrap.css'
import Homepage from "./Homepage/Homepage"
import Header from "./Header/Header.js"
import DetailedCard from "./DetailedCard"
import Episodes from "./Episodes"
import {   BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect
}  from "react-router-dom";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
           isHomepage: false //if I change to true => feed will be rendered immediately
        };
    }

    render() {
        return (
            <Router>
                <main>
                    <Header/>
                    <Switch>
                        <Route exact path="/"
                            render={() => {
                                return (
                                    this.state.isHomepage ?
                                        <Redirect to="/feed" /> : <Homepage />
                                )
                            }}
                        />
                        <Route path="/feed" exact component={CharactersList} />
                        <Route path="/feed/card/:id" exact component={DetailedCard} />
                        <Route path="/feed/card/:id/episodes" component={Episodes} />
                    </ Switch>
                </main>
            </Router>
        )
    }
}
export default App
