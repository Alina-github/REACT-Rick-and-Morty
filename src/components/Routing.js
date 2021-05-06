import React from 'react'
import CharactersList from './CharactersList'
import DetailedCard from './DetailedCard'
import Homepage from './Homepage/Homepage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Header from "./Header/Header";
import Episodes from "./Episodes";

export default function NestingExample() {
    return (
        <Router>
            <main>
                <Header/>
                <Switch>
                <Route path="/" exact component={Homepage} />
                <Route path="/feed" exact component={CharactersList} />
                <Route path="/feed/card/:id" component = {DetailedCard} />
                {/*<Route path="/card/:id/episodes" component={Episodes} />*/}
                </ Switch>
            </main>
        </Router>
    );
}

function Topics() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();

    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    );
}


