import React from 'react'

function BackendHeader() {
    return (
        <>
            <header className="navbar navbar-dark bg-dark d-flex p-0 shadow">
                <div className="dashboard_logo">
                    <a className="navbar-brand d-block mr-0 me-0" href="#">Company name</a>
                    <button onclick="sidebarMenu.classList.toggle('show')" className="navbar-toggler d-md-none" type="button">
                        <span className="navbar-toggler-icon" />
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