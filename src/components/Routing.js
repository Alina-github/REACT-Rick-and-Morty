import React from 'react'
import CharactersList from './CharactersList'
import DetailedCard from './DetailedCard'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Routing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <Router>
<div>
    <nav>
        <ul>
            <li>
                <Link to="/feed"> Feed </Link>
            </li>
            <li>
                <Link to="/card/1"> Card </Link>
            </li>
        </ul>
    </nav>
    <Switch>
        <Route path="/Feed">
            <CharactersList />
        </Route>
        <Route path="/card/1">
            <DetailedCard />
        </Route>
    </Switch>

</div>
            </Router>
        )
    }
}

export default Routing
