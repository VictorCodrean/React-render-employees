import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light py-3">
            <div className="container-fluid">
                <p className="display-5 text-decoration-none link-dark">Employee Directory</p>

                <form className="d-flex mx-5 ">
                    <div className="input-group">
                      
                            <span className="input-group-text">Filter by name</span>
                      
                        <input
                            onChange={props.handleInputChange}
                            className="form-control"
                            type="text"
                            placeholder="By name"
                            aria-label="name"
                        />
                    </div>


                </form>
            </div>
        </nav>
    );
}

export default Navbar