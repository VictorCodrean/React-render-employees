import React, { Component } from "react";
import Table from "./Table"
import API from "../utils/API"

class EmployeesSearchResults extends Component {
    state = {
        employees: [],
        nameFiltered: []
    };

    componentDidMount() {
        API.search()
            .then((res) => {
                const filtered = res.data.results.filter(employee => employee.id.value)
                console.log(filtered)
                this.setState({
                    employees: filtered,
                    nameFiltered: filtered
                })
                console.log(filtered)
            })
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const input = event.target.value
        console.log(input)
        let employees = this.state.employees.filter(employee => employee.name.first.includes(input))
        console.log(employees)
        this.setState({ nameFiltered: employees })
    }

    render() {
        return (
            <div className="m-5">
                <input className="" onChange={this.handleInputChange} placeholder="filter by name">

                </input>
                <Table employees={this.state.nameFiltered} />
            </div>
        )
    }
}

export default EmployeesSearchResults;