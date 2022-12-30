import React, { useCallback } from 'react'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useFrontendContext from '../../hooks/useFrontendContext'
import Footer from '../frontend/shared/Footer'
import Header from '../frontend/shared/Header'

function FrontendLayout() {
    const { frontend, dispatchFrontend } = useFrontendContext();
    // useEffect(() => {
    //     // console.log(frontend);
    // }, [frontend])

    useCallback(
        () => {
            console.log(frontend);
        },
        [frontend.count],
    )


    return (
        <>
            <div id="index">
                <h1>{frontend.count}</h1>
                <button onClick={() => dispatchFrontend({ type: 'async', fn:'asyncInc', payload:{id:100} })}>inc</button>
                <button onClick={() => dispatchFrontend({ type: 'decrement', payload:{name: 'try'} })}>dec</button>
                <main>
                    <div id="menu_wrapper" />
                    {/* --------------------loader------------ */}
                    {/* <div id="spin-wrapper"></div>
                    <div id="siteloader">
                        <div class="loader"></div>
                    </div> */}
                    <div className="page_content home-page">
                        <div className="section-container container">
                            <Header />

                            <Outlet />

                            <Footer></Footer>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default FrontendLayout