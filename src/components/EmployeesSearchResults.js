import React, { Component } from "react";
import Table from "./Table"
import API from "../utils/API"

class EmployeesSearchResults extends Component {
    state = {
        employees: [],
        filteredByName: []
    };

    componentDidMount() {
        API.search()
            .then((res) => {
                // fitler users that has an id value in order to be able to give it a key value...
                const filtered = res.data.results.filter(employee => employee.id.value)
                // console.log(filtered)
                this.setState({
                    employees: filtered,
                    filteredByName: filtered
                })
                // console.log(filtered)
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const input = event.target.value.toLowerCase().trim()
        console.log(input)
        // no matter of uppersCase or lowerCase values it will pop up user with those characters...
        const employees = this.state.employees.filter(employee => employee.name.first.toLowerCase().trim().includes(input))
        console.log(employees)
        this.setState({ filteredByName: employees })
    }

    render() {
        return (
            <div className="m-5">
                <input className="" onChange={this.handleInputChange} placeholder="filter by name">

                </input>
                {this.state.filteredByName.length > 0 ? (

                    <Table employees={this.state.filteredByName} />
                ) : (
                    <h2>No Results</h2>
                )}
            </div>
        )
    }
}

export default EmployeesSearchResults;