import React from 'react'

const NavBar = (props) => {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse p-2" id="navbarNav">
            <ul className="navbar-nav">
                {props.children}
            </ul>
        </div>
    </nav>)
}

export default NavBar