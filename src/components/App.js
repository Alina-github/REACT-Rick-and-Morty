import React from 'react';
import CharactersList from "./CharactersList"
import CharacterCard from "./CharacterCard"
import 'bootstrap/dist/css/bootstrap.css'
import Homepage from "./Homepage"
import DetailedCard from "./DetailedCard"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {

    render() {

        return (
            // <div>
            //      <Header/>
            //      <div className="nav-scroller py-1 mb-2">
            //      </div>
            //      <div className="container">
            //      <CharactersList/>
            //      </div>
            //     </div>

            <Router>
                <main>
                    {/*<nav>*/}
                    {/*    <ul>*/}
                    {/*        <li><a href="/">Home</a></li>*/}
                    {/*        <li><a href="/about">About</a></li>*/}
                    {/*        <li><a href="/contact">Contact</a></li>*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}

                    {/*<div><Link to="/">Home</Link></div>*/}
                    {/*<div><Link to={`/about/${name}`}>About</Link></div>*/}
                    {/*<div><Link to="/contact">Contact</Link></div>*/}

                    <Route path="/" exact component={Homepage} />
                    <Route path="/feed"  component={CharactersList} />
                    <Route path="/card/:id" component={DetailedCard} />

                        {/*<Header/>*/}
                        {/*<div class="nav-scroller py-1 mb-2">*/}
                        {/*</div>*/}
                        {/*<div className="container">*/}
                        {/*<CharactersList />*/}
                        {/*</div>*/}
                        {/*</div>*/}

                </main>
            </Router>

        )
    }
}
export default App