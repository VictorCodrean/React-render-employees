import React, { Component } from "react";
import Setup from "./Setup"
import API from "../utils/API"

class EmployeesSearchResults extends Component {
    state = {
        results: []
    };

    componentDidMount() {
        API.search()
            .then((res) => {
                this.setState({ results: res.data.results })
                console.log(res.data.results)
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Setup employees={this.state.results} />
            </div>
        )
    }
}

export default EmployeesSearchResults;