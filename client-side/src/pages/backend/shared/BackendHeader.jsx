import React from 'react'

function BackendHeader() {
    function toggleMenu(){
        document.getElementById('sidebarMenu').classList.toggle('show');
    }
    return (
        <>
            <header className="navbar navbar-dark bg-dark d-flex p-0 shadow">
                <div className="dashboard_logo">
                    <a className="navbar-brand d-block mr-0 me-0" href="#">Company name</a>
                    <button onClick={toggleMenu} 
                        className="navbar-toggler" type="button">
                        <span className="fa fa-align-left" />
                    </button>
                </div>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap"><a className="nav-link sign-out-btn px-3" href="#">Sign out</a></div>
                </div>
            </header>
        </>
    )
}

export default BackendHeader