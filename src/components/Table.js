import React from 'react'
import { BiSort } from 'react-icons/bi';

function Table(props) {
    return (
        <table className="table table-success table-striped">
            <thead className="table-dark">
                <tr>
                    <th scope="col" onClick={props.sortByAge}>Img&Age <BiSort /></th>
                    <th scope="col" onClick={props.sortByName}>Name <BiSort /></th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee => (
                    <tr key={employee.id.value}>
                        <td>
                            <img src={employee.picture.medium} alt="user" height="75" width="75"></img>
                            <br />
                            Age: {employee.dob.age}
                        </td>
                        <td>{employee.name.first} {employee.name.last}
                        </td>
                        <td>{employee.cell}
                            <br />
                            Country: {employee.location.country}
                            <br />
                            City: {employee.location.city}
                        </td>
                        <td>{employee.email}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
}

export default Table;
