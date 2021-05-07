import React from 'react'

function Table(props) {
    return (


        <table className="table table-success table-striped">
            <thead className="table-dark">
                <tr>
                    <th scope="col">#Id</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(employee => (
                    <tr key={employee.id.value}>
                        <th scope="row">{employee.id.value}</th>
                        <td>{employee.name.first}</td>
                        <td>{employee.name.last}</td>
                        <td>{employee.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;
