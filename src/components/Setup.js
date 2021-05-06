import React from 'react';

function Setup(props) {
    // console.log(props.results.results)
    return (
        <div>
            Hello World
            {/* {props.results.name.first} */}
            <ul className="list-group">
                {props.employees.map(employee => (
                    <li className="list-group-item" key={employee.id.value}>
                        <img alt={employee.name} className="img-fluid" src={employee.picture.large} />
                        <p>
                            {employee.name.first} {employee.name.last}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Setup;

