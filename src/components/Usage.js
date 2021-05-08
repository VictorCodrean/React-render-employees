import React from "react"

function Usage(props) {
    return (
        <>
            <h5>Usage:</h5>
            <p>
                Given a table of random users generated from the <a href="https://randomuser.me/" rel="noopener">Random User API.</a>
            </p>
            <ul className="list-group">
                <li className="list-group-item">
                    Filter the users by name typing in the search of Navbar
                                            </li>
                <li className="list-group-item">
                    Sort the table data onClick on the columns with sortIcons
                                            </li>
            </ul>

        </>
    )
}

export default Usage;