import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../frontend/shared/Footer'
import Header from '../frontend/shared/Header'

function FrontendLayout() {
    return (
        <>
            <div id="index">
                <main>
                    <div id="menu_wrapper" className />
                    {/* --------------------loader------------ */}
                    {/* <div id="spin-wrapper"></div>
                    <div id="siteloader">
                        <div class="loader"></div>
                    </div> */}
                    <div className="page_content home-page">
                        <div className="section-container container">
                            <Header/>

                            <Outlet/>
                            
                            <Footer></Footer>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default FrontendLayout