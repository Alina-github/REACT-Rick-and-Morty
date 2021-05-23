import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect, useHistory,
} from "react-router-dom";
import Homepage from "./Homepage/Homepage"
import Header from "./Header/Header.js"
import DetailedCard from "./DetailedCard/DetailedCard"
import Episodes from "./DetailedCard/Episodes/Episodes"
import NoMatch from "./NoMatch/NoMatch"
import List from "./FiltrationList/FiltrationList"

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isHomepage: true
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
                                           <Redirect to="/feed"/> : <Homepage/>
                                   )
                               }}
                        />
                        <Route path="/feed" exact component={List}/>
                        <Route path="/feed/card/:id" exact component={DetailedCard}/>
                        <Route path="/feed/card/:id/episodes" component={Episodes}/>
                        <Route path="*" component={NoMatch}/>
                    </ Switch>
                </main>
            </Router>
        )
    }
}

export default App