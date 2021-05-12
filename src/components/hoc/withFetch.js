import React from "react"
import axios from "axios"

function withFetch (Component, apiUrl) {
    class WithFetch extends React.Component {
        state = {
            result: []
        };

        componentDidMount() {
            this.get();
        }

        get = () => axios.get(apiUrl)
        // what if api is dynamic and depends on the range?
    }
}