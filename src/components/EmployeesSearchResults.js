import React, { Component } from "react";
import Table from "./Table"
import API from "../utils/API"
import Navbar from "../components/Navbar"
import Usage from "../components/Usage"

class EmployeesSearchResults extends Component {
    state = {
        employees: [],
        filteredByName: [],
        onSortByName: true,
        onSortByAge: true
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
                console.log(filtered)
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

    sortByName = () => {
        this.setState({
            filteredByName: this.state.filteredByName.sort((a, b) => {

                if (this.state.onSortByName) {
                    if (a.name.first < b.name.first) {
                        return -1
                    }
                    if (a.name.first > b.name.first) {
                        return 1
                    }
                    return 0
                } else {
                    if (a.name.first < b.name.first) {
                        return 1
                    }
                    if (a.name.first > b.name.first) {
                        return -1
                    }
                    return 0
                }
            }),
            onSortByName: !this.state.onSortByName
        })
    }


    sortByAge = () => {
        this.setState({
            filteredByName: this.state.filteredByName.sort((a, b) => {

                if (this.state.onSortByAge) {
                    if (a.dob.age < b.dob.age) {
                        return -1
                    }
                    if (a.dob.age > b.dob.age) {
                        return 1
                    }
                    return 0
                } else {
                    if (a.dob.age < b.dob.age) {
                        return 1
                    }
                    if (a.dob.age > b.dob.age) {
                        return -1
                    }
                    return 0
                }
            }),
            onSortByAge: !this.state.onSortByAge
        })
    }


    render() {
        return (
            <>
                <Navbar
                    handleInputChange={this.handleInputChange}
                />
                <main className="container">
                    <div className="row mt-3">
                        {this.state.filteredByName.length > 0 ?
                            (
                                <>
                                    <div className="col-sm-12 col-md-3">
                                        <Usage />
                                    </div>

                                    <div className="col-sm-12 col-md-9">
                                        <Table
                                            employees={this.state.filteredByName}
                                            sortByName={this.sortByName}
                                            sortByAge={this.sortByAge} />

                                    </div>
                                </>
                            ) : (<h2>No Results</h2>)}
                    </div>
                    <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </main>

            </>
        )
    }
}

export default EmployeesSearchResults;