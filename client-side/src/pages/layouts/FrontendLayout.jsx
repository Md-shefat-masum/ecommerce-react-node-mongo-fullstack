import React from 'react'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useFrontendContext from '../../hooks/useFrontendContext'
import Footer from '../frontend/shared/Footer'
import Header from '../frontend/shared/Header'

function FrontendLayout() {
    const { state, dispatch } = useFrontendContext();
    useEffect(() => {
        dispatch({ fn: null, type: 'loadCart', payload: null });

    }, [])
    useEffect(() => {
        console.log(state);
        dispatch({ fn: 'async', type: '', payload: {method: 'saveCart', carts: state.carts} });
    }, [state])


    return (
        <>
            <div id="index">
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