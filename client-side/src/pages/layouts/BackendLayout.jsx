import React from 'react'
import { Outlet } from 'react-router-dom'
import BackendHeader from '../backend/shared/BackendHeader'
import BackendNav from '../backend/shared/BackendNav'

function BackendLayout() {
    return (
        <div>
            <div id="backend_body">
                <BackendHeader/>
                <div className="container-fluid">
                    <div className="row">
                        <BackendNav/>
                        <main className="p-3" style={{ flex: '1 1 0%', height:'94vh' , overflowY:'scroll' }}>
                            <Outlet />
                        </main>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default BackendLayout