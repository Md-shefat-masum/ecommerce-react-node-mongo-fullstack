import React, { useEffect } from 'react'
import useAuthContext from '../../hooks/useAuthContext';
import useSetting from '../../hooks/useSetting';

function Home() {

    return (
        <>
            {/* --------------------hometop------------ */}
            <div id="top_home">
                {/* -------------------slider----------- */}
                <section className="container">
                    <div className="row">
                        <div className="item">
                            <a href="#">
                                <img src="assets/images/slider/slide-1.jpg" alt="Slide-1" className="img-fluid" />
                            </a>
                        </div>
                    </div>
                </section>
                {/* --------------------services------------ */}
                <section id="ishiservices" className="ishiservicesblock container">
                    <div className="ishiservices">
                        <div className="row">
                            <div className="services col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <a href="#">
                                    <div className="service-img" style={{ backgroundImage: 'url(assets/images/services/1.png)' }} />
                                    <div className="service-block">
                                        <div className="service-title">Worldwide Delivery</div>
                                        <div className="service-desc">Lorem ipsum Is Dummy Text</div>
                                    </div>
                                </a>
                            </div>
                            <div className="services col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <a href="#">
                                    <div className="service-img" style={{ backgroundImage: 'url(assets/images/services/2.png)' }} />
                                    <div className="service-block">
                                        <div className="service-title">Gift Voucher</div>
                                        <div className="service-desc">Lorem ipsum Is Dummy Text</div>
                                    </div>
                                </a>
                            </div>
                            <div className="services col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <a href="#">
                                    <div className="service-img" style={{ backgroundImage: 'url(assets/images/services/3.png)' }} />
                                    <div className="service-block">
                                        <div className="service-title">24X7 support</div>
                                        <div className="service-desc">Lorem ipsum Is Dummy Text</div>
                                    </div>
                                </a>
                            </div>
                            <div className="services col-lg-3 col-md-6 col-sm-6 col-xs-6">
                                <a href="#">
                                    <div className="service-img" style={{ backgroundImage: 'url(assets/images/services/4.png)' }} />
                                    <div className="service-block">
                                        <div className="service-title">Great saving</div>
                                        <div className="service-desc">Lorem ipsum Is Dummy Text</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ------------------product block---------- */}
                <section id="ishiproductsblock" className="ishiproductsblock container">
                    <h3 className="home-title">
                        <span className="title-icon"><span /></span>Trending Products
                    </h3>
                    <ul id="ishiproductstab" className="nav nav-tabs clearfix">
                        <li className="nav-item first_item active">
                            <a className="nav-link" href="#featured-products-block" data-toggle="tab">Featured</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#new-products-block" data-toggle="tab">Latest</a>
                        </li>
                        <li className="nav-item last_item">
                            <a className="nav-link" href="#bestseller-products-block" data-toggle="tab">Best sellers</a>
                        </li>
                    </ul>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="product-thumb">
                                <div className="item">
                                    <div className="product-desc">
                                        <div className="product-title"><a href="#">Aroma Mocha</a></div>
                                        <div className="product-comments">
                                            <div className="star_content">
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <a href="#" className="thumbnail product-thumbnail">
                                            <img src="assets/images/product/1.jpg" alt="product-img" />
                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/2.jpg" />
                                        </a>
                                        <span className="outstock-overlay">SOLD OUT</span>
                                        <div className="product-flags">
                                            <div className="sale">Sale</div>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <p className="description">
                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
                                        </p>
                                        <p className="price">
                                            <span className="regular price-old">$55.00</span>
                                            <span className="price-discount">9%</span>
                                            <span className="price-sale">$50.00 </span>
                                        </p>
                                        <div className="btn-cart">
                                            <a data-button-action="add-to-cart" className="button sold-out">
                                                <i className="fa fa-shopping-cart" />
                                                <span className="lblcart">SOLD OUT</span>
                                            </a>
                                        </div>
                                        <div className="button-group">
                                            <div className="btn-quickview">
                                                <a className="quickbox" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                            <title>eye-open</title>
                                                            <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                    </svg>
                                                    <span className="lblcart">Quick View</span>
                                                </a>
                                            </div>
                                            <div className="btn-wishlist">
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                            <title>heart-shape-outline</title>
                                                            <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-thumb">
                                <div className="item">
                                    <div className="product-desc">
                                        <div className="product-title"><a href="#">Brown cushion</a></div>
                                        <div className="product-comments">
                                            <div className="star_content">
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <a href="#" className="thumbnail product-thumbnail">
                                            <img src="assets/images/product/7.jpg" alt="product-img" />
                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/8.jpg" />
                                        </a>
                                        <div className="product-flags">
                                            <div className="sale">Sale</div>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <p className="description">
                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
                                        </p>
                                        <p className="price">
                                            <span className="regular price-old">$25.00</span>
                                            <span className="price-discount">20%</span>
                                            <span className="price-sale">$20.00 </span>
                                        </p>
                                        <div className="btn-cart">
                                            <a data-button-action="add-to-cart" className="button">
                                                <i className="fa fa-shopping-cart" />
                                                <span className="lblcart">Add to cart</span>
                                            </a>
                                        </div>
                                        <div className="button-group">
                                            <div className="btn-quickview">
                                                <a className="quickbox" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                            <title>eye-open</title>
                                                            <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                    </svg>
                                                    <span className="lblcart">Quick View</span>
                                                </a>
                                            </div>
                                            <div className="btn-wishlist">
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                            <title>heart-shape-outline</title>
                                                            <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-thumb">
                                <div className="item">
                                    <div className="product-desc">
                                        <div className="product-title"><a href="#">autem euaiure</a></div>
                                        <div className="product-comments">
                                            <div className="star_content">
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <a href="#" className="thumbnail product-thumbnail">
                                            <img src="assets/images/product/3.jpg" alt="product-img" />
                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/4.jpg" />
                                        </a>
                                    </div>
                                    <div className="caption">
                                        <p className="description">
                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
                                        </p>
                                        <p className="price">
                                            <span className="price-sale">$45.00 </span>
                                        </p>
                                        <div className="btn-cart">
                                            <a data-button-action="add-to-cart" className="button">
                                                <i className="fa fa-shopping-cart" />
                                                <span className="lblcart">Add to cart</span>
                                            </a>
                                        </div>
                                        <div className="button-group">
                                            <div className="btn-quickview">
                                                <a className="quickbox" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                            <title>eye-open</title>
                                                            <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                    </svg>
                                                    <span className="lblcart">Quick View</span>
                                                </a>
                                            </div>
                                            <div className="btn-wishlist">
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                            <title>heart-shape-outline</title>
                                                            <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-thumb">
                                <div className="item">
                                    <div className="product-desc">
                                        <div className="product-title"><a href="#">Brown cushion</a></div>
                                        <div className="product-comments">
                                            <div className="star_content">
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <a href="#" className="thumbnail product-thumbnail">
                                            <img src="assets/images/product/7.jpg" alt="product-img" />
                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/8.jpg" />
                                        </a>
                                        <div className="product-flags">
                                            <div className="sale">Sale</div>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <p className="description">
                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
                                        </p>
                                        <p className="price">
                                            <span className="regular price-old">$25.00</span>
                                            <span className="price-discount">20%</span>
                                            <span className="price-sale">$20.00 </span>
                                        </p>
                                        <div className="btn-cart">
                                            <a data-button-action="add-to-cart" className="button">
                                                <i className="fa fa-shopping-cart" />
                                                <span className="lblcart">Add to cart</span>
                                            </a>
                                        </div>
                                        <div className="button-group">
                                            <div className="btn-quickview">
                                                <a className="quickbox" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                            <title>eye-open</title>
                                                            <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                    </svg>
                                                    <span className="lblcart">Quick View</span>
                                                </a>
                                            </div>
                                            <div className="btn-wishlist">
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                            <title>heart-shape-outline</title>
                                                            <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-thumb">
                                <div className="item">
                                    <div className="product-desc">
                                        <div className="product-title"><a href="#">Authletic Stud</a></div>
                                        <div className="product-comments">
                                            <div className="star_content">
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <a href="#" className="thumbnail product-thumbnail">
                                            <img src="assets/images/product/14.jpg" alt="product-img" />
                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/15.jpg" />
                                        </a>
                                        <span className="outstock-overlay">SOLD OUT</span>
                                    </div>
                                    <div className="caption">
                                        <p className="description">
                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
                                        </p>
                                        <p className="price">
                                            <span className="price-sale">$80.00 </span>
                                        </p>
                                        <div className="btn-cart">
                                            <a data-button-action="add-to-cart" className="button sold-out">
                                                <i className="fa fa-shopping-cart" />
                                                <span className="lblcart">SOLD OUT</span>
                                            </a>
                                        </div>
                                        <div className="button-group">
                                            <div className="btn-quickview">
                                                <a className="quickbox" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                            <title>eye-open</title>
                                                            <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                    </svg>
                                                    <span className="lblcart">Quick View</span>
                                                </a>
                                            </div>
                                            <div className="btn-wishlist">
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                            <title>heart-shape-outline</title>
                                                            <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-thumb">
                                <div className="item">
                                    <div className="product-desc">
                                        <div className="product-title"><a href="#">Black Tour Bag</a></div>
                                        <div className="product-comments">
                                            <div className="star_content">
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <a href="#" className="thumbnail product-thumbnail">
                                            <img src="assets/images/product/5.jpg" alt="product-img" />
                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/6.jpg" />
                                        </a>
                                        <div className="product-flags">
                                            <div className="sale">Sale</div>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <p className="description">
                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
                                        </p>
                                        <p className="price">
                                            <span className="regular price-old">$42.00</span>
                                            <span className="price-discount">4%</span>
                                            <span className="price-sale">$40.00 </span>
                                        </p>
                                        <div className="btn-cart">
                                            <a data-button-action="add-to-cart" className="button">
                                                <i className="fa fa-shopping-cart" />
                                                <span className="lblcart">Add to cart</span>
                                            </a>
                                        </div>
                                        <div className="button-group">
                                            <div className="btn-quickview">
                                                <a className="quickbox" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                            <title>eye-open</title>
                                                            <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                    </svg>
                                                    <span className="lblcart">Quick View</span>
                                                </a>
                                            </div>
                                            <div className="btn-wishlist">
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                            <title>heart-shape-outline</title>
                                                            <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-thumb">
                                <div className="item">
                                    <div className="product-desc">
                                        <div className="product-title"><a href="#">Black Tour Bag</a></div>
                                        <div className="product-comments">
                                            <div className="star_content">
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <a href="#" className="thumbnail product-thumbnail">
                                            <img src="assets/images/product/5.jpg" alt="product-img" />
                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/6.jpg" />
                                        </a>
                                        <div className="product-flags">
                                            <div className="sale">Sale</div>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <p className="description">
                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
                                        </p>
                                        <p className="price">
                                            <span className="regular price-old">$42.00</span>
                                            <span className="price-discount">4%</span>
                                            <span className="price-sale">$40.00 </span>
                                        </p>
                                        <div className="btn-cart">
                                            <a data-button-action="add-to-cart" className="button">
                                                <i className="fa fa-shopping-cart" />
                                                <span className="lblcart">Add to cart</span>
                                            </a>
                                        </div>
                                        <div className="button-group">
                                            <div className="btn-quickview">
                                                <a className="quickbox" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                            <title>eye-open</title>
                                                            <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                    </svg>
                                                    <span className="lblcart">Quick View</span>
                                                </a>
                                            </div>
                                            <div className="btn-wishlist">
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                            <title>heart-shape-outline</title>
                                                            <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-thumb">
                                <div className="item">
                                    <div className="product-desc">
                                        <div className="product-title"><a href="#">Authletic Stud</a></div>
                                        <div className="product-comments">
                                            <div className="star_content">
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <a href="#" className="thumbnail product-thumbnail">
                                            <img src="assets/images/product/14.jpg" alt="product-img" />
                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/15.jpg" />
                                        </a>
                                        <span className="outstock-overlay">SOLD OUT</span>
                                    </div>
                                    <div className="caption">
                                        <p className="description">
                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
                                        </p>
                                        <p className="price">
                                            <span className="price-sale">$80.00 </span>
                                        </p>
                                        <div className="btn-cart">
                                            <a data-button-action="add-to-cart" className="button sold-out">
                                                <i className="fa fa-shopping-cart" />
                                                <span className="lblcart">SOLD OUT</span>
                                            </a>
                                        </div>
                                        <div className="button-group">
                                            <div className="btn-quickview">
                                                <a className="quickbox" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                            <title>eye-open</title>
                                                            <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                    </svg>
                                                    <span className="lblcart">Quick View</span>
                                                </a>
                                            </div>
                                            <div className="btn-wishlist">
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                            <title>heart-shape-outline</title>
                                                            <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="product-thumb">
                                <div className="item">
                                    <div className="product-desc">
                                        <div className="product-title"><a href="#">Brown cushion</a></div>
                                        <div className="product-comments">
                                            <div className="star_content">
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                                <div className="star star_on" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="image">
                                        <a href="#" className="thumbnail product-thumbnail">
                                            <img src="assets/images/product/7.jpg" alt="product-img" />
                                            <img className="product-img-extra change" alt="product-img" src="assets/images/product/8.jpg" />
                                        </a>
                                        <div className="product-flags">
                                            <div className="sale">Sale</div>
                                        </div>
                                    </div>
                                    <div className="caption">
                                        <p className="description">
                                            The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
                                        </p>
                                        <p className="price">
                                            <span className="regular price-old">$25.00</span>
                                            <span className="price-discount">20%</span>
                                            <span className="price-sale">$20.00 </span>
                                        </p>
                                        <div className="btn-cart">
                                            <a data-button-action="add-to-cart" className="button">
                                                <i className="fa fa-shopping-cart" />
                                                <span className="lblcart">Add to cart</span>
                                            </a>
                                        </div>
                                        <div className="button-group">
                                            <div className="btn-quickview">
                                                <a className="quickbox" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                            <title>eye-open</title>
                                                            <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                    </svg>
                                                    <span className="lblcart">Quick View</span>
                                                </a>
                                            </div>
                                            <div className="btn-wishlist">
                                                <a href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                        <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                            <title>heart-shape-outline</title>
                                                            <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                        </symbol>
                                                    </svg>
                                                    <svg className="icon" viewBox="0 0 30 30">
                                                        <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ------------------parallax block ---------- */}
                <section id="ishiparallaxbanner" className="clearfix">
                    <div className="parallax" style={{ backgroundImage: 'url("assets/images/parallax.jpg")' }}>
                        <div className="container">
                            <div className="parallax-list">
                                <img src="assets/images/parallax-2019.png" alt="parallax_icon" className="img-responsive parallax-discount" />
                                <div className="parallax-title">Teddy &amp; Soft Toys</div>
                                <div className="parallax-subtitle">BIG SEASON SALE ALL TYPE OF TOYS</div>
                                <div className="parallax-btn"><a href="#" className="btn btn-primary theme-button">SHOP NOW</a></div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* -------------------testimonial---------- */}
                <section id="ishitesimonial" className="ishitestimonialsblock">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 hidden-lg-down testimonial-parallax">
                                <div className="testimonial-bg">
                                    <img src="assets/images/testimonial-bg.png" alt="banner" />
                                </div>
                                <h3 className="home-title">
                                    <span className="title-icon"><span /></span>Client Say’s
                                </h3>
                            </div>
                            <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="row">
                                    <div className="col-md-6 ishitestimonials-container">
                                        <div className="testimonial-img">
                                            <img src="assets/images/testimonial/testimonial-1.png" alt="Marko Westin" />
                                        </div>
                                        <div className="testimonial-info">
                                            <span className="quote">
                                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 298.7 298.7" style={{ enableBackground: 'new 0 0 298.7 298.7' }} xmlSpace="preserve">
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <polygon points="298.7,128 234.7,128 277.3,42.7 213.3,42.7 170.7,128 170.7,256 298.7,256      " />
                                                                <polygon points="128,256 128,128 64,128 106.7,42.7 42.7,42.7 0,128 0,256      " />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                            <div className="user-description">
                                                Lorem ipsum dolor sit amet, consectetur adipiselit. Mauris non tortor nec eros digniim dapibus Etiam vitae magna sed urna t
                                            </div>
                                            <div className="user-count">01</div>
                                            <h3 className="user-name">
                                                Marko Westin
                                            </h3>
                                            <div className="user-designation">
                                                Co-Founder
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ishitestimonials-container">
                                        <div className="testimonial-img">
                                            <img src="assets/images/testimonial/testimonial-2.png" alt="John Duff" />
                                        </div>
                                        <div className="testimonial-info">
                                            <span className="quote">
                                                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 298.7 298.7" style={{ enableBackground: 'new 0 0 298.7 298.7' }} xmlSpace="preserve">
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <polygon points="298.7,128 234.7,128 277.3,42.7 213.3,42.7 170.7,128 170.7,256 298.7,256      " />
                                                                <polygon points="128,256 128,128 64,128 106.7,42.7 42.7,42.7 0,128 0,256      " />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                            <div className="user-description">
                                                Lorem ipsum dolor sit amet, consectetur adipiselit. Mauris non tortor nec eros digniim dapibus Etiam vitae magna sed urna t
                                            </div>
                                            <div className="user-count">02</div>
                                            <h3 className="user-name">
                                                John Duff
                                            </h3>
                                            <div className="user-designation">
                                                Web Developer
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* -------------------two banner---------- */}
                <section id="ishitwobanner" className="ishitwobannerblock">
                    <div className="container">
                        <div className="row">
                            <div className="bannerblock col-md-6 col-sm-6">
                                <a href="#" className="ishi-customhover-fadeinrotate scale">
                                    <img src="assets/images/two-banner/1.jpg" alt="banner" className="img-responsive" />
                                </a>
                            </div>
                            <div className="bannerblock col-md-6 col-sm-6">
                                <a href="#" className="ishi-customhover-fadeinrotate scale">
                                    <img src="assets/images/two-banner/2.jpg" alt="banner" className="img-responsive" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* -------------------special deals---------- */}
                <section id="ishispecialdeal" className="ishispecialdeals" style={{ backgroundColor: '#a993db' }}>
                    <div className="row valign-wrapper">
                        <div className="specialdeals_parallax col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{ backgroundImage: 'url("assets/images/deal-image.jpg")' }}>
                            <div className="deal-list">
                                <div className="deal-discount">Exclusive Sale On Toy Town</div>
                                <div className="deal-title">Trendy Kids Toys</div>
                                <div className="deal-subtitle">Get up to <span> 40% off </span> Available</div>
                                <div className="deal-offer"><a href="#" className="btn btn-secondary">Shop Now</a></div>
                            </div>
                        </div>
                        <div className="specialdeals_products col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div id="ishispecialdeals-carousel" className="bxSlider">
                                <div className="multilevel-item">
                                    <div className="item" data-countdowntime="2020-11-30">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <a href="#">
                                                    <img src="assets/images/product/1.jpg" alt="product-img" />
                                                    <img className="product-img-extra change" alt="product-img" src="assets/images/product/2.jpg" />
                                                </a>
                                            </div>
                                            <div className="caption">
                                                <div className="product-title"><a href="#">Aroma Mocha</a></div>
                                                <p className="price">
                                                    <span className="regular price-old">$55.00</span>
                                                    <span className="price-discount">9%</span>
                                                    <span className="price-sale">$50.00 </span>
                                                </p>
                                                <div className="countdown-container">
                                                    <div className="countdown-text">The offer ends in :</div>
                                                    <div className="countdown-days counter">
                                                        <span className="data" />
                                                        <span className="lbl">Days</span>
                                                    </div>
                                                    <div className="countdown-hours counter">
                                                        <span className="data" />
                                                        <span className="lbl">Hours</span>
                                                    </div>
                                                    <div className="countdown-minutes counter">
                                                        <span className="data" />
                                                        <span className="lbl">Min</span>
                                                    </div>
                                                    <div className="countdown-seconds counter">
                                                        <span className="data" />
                                                        <span className="lbl">Sec</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <div className="btn-quickview">
                                                        <a className="quickbox" href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                    <title>eye-open</title>
                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                            </svg>
                                                            <span className="lblcart">Quick View</span>
                                                        </a>
                                                    </div>
                                                    <div className="btn-wishlist">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                    <title>heart-shape-outline</title>
                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="btn-cart">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="addtocart" viewBox="0 0 1200 1200">
                                                                    <title>addtocart</title>
                                                                    <path d="M194.59,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                  S230.235,382.711,194.59,382.711z M194.59,473.215c-14.261,0-25.858-11.597-25.858-25.858c0-14.261,11.597-25.858,25.858-25.858
                                  c14.254,0,25.858,11.597,25.858,25.858C220.448,461.617,208.851,473.215,194.59,473.215z" />
                                                                    <path d="M385.941,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                  S421.587,382.711,385.941,382.711z M385.941,473.215c-14.261,0-25.858-11.597-25.858-25.858
                                  c0-14.261,11.597-25.858,25.858-25.858c14.261,0,25.858,11.597,25.858,25.858C411.799,461.617,400.202,473.215,385.941,473.215z" />
                                                                    <path d="M498.088,126.274c-3.685-4.629-9.27-7.324-15.179-7.324H143.326l-17.629-89.095c-1.545-7.803-7.699-13.873-15.528-15.308
                                  L32.594,0.325C22.038-1.621,11.953,5.368,10.02,15.905s5.042,20.641,15.58,22.574l64.607,11.843l56.914,287.667
                                  c1.797,9.083,9.768,15.631,19.025,15.631h271.512c9.031,0,16.86-6.225,18.896-15.037l45.252-195.876
                                  C503.137,136.947,501.767,130.896,498.088,126.274z M422.233,314.833H182.074l-31.075-157.089h307.519L422.233,314.833z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#addtocart" x="28%" y="28%" />
                                                            </svg>
                                                            <span className="lblcart">Add to Cart</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item" data-countdowntime="2021-03-31">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <a href="#">
                                                    <img src="assets/images/product/3.jpg" alt="product-img" />
                                                    <img className="product-img-extra change" alt="product-img" src="assets/images/product/4.jpg" />
                                                </a>
                                            </div>
                                            <div className="caption">
                                                <div className="product-title"><a href="#">Classic Fisher Gift</a></div>
                                                <p className="price">
                                                    <span className="price-sale">$50.00 </span>
                                                </p>
                                                <div className="countdown-container">
                                                    <div className="countdown-text">The offer ends in :</div>
                                                    <div className="countdown-days counter">
                                                        <span className="data" />
                                                        <span className="lbl">Days</span>
                                                    </div>
                                                    <div className="countdown-hours counter">
                                                        <span className="data" />
                                                        <span className="lbl">Hours</span>
                                                    </div>
                                                    <div className="countdown-minutes counter">
                                                        <span className="data" />
                                                        <span className="lbl">Min</span>
                                                    </div>
                                                    <div className="countdown-seconds counter">
                                                        <span className="data" />
                                                        <span className="lbl">Sec</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <div className="btn-quickview">
                                                        <a className="quickbox" href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                    <title>eye-open</title>
                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                            </svg>
                                                            <span className="lblcart">Quick View</span>
                                                        </a>
                                                    </div>
                                                    <div className="btn-wishlist">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                    <title>heart-shape-outline</title>
                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="btn-cart">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="addtocart" viewBox="0 0 1200 1200">
                                                                    <title>addtocart</title>
                                                                    <path d="M194.59,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                  S230.235,382.711,194.59,382.711z M194.59,473.215c-14.261,0-25.858-11.597-25.858-25.858c0-14.261,11.597-25.858,25.858-25.858
                                  c14.254,0,25.858,11.597,25.858,25.858C220.448,461.617,208.851,473.215,194.59,473.215z" />
                                                                    <path d="M385.941,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                  S421.587,382.711,385.941,382.711z M385.941,473.215c-14.261,0-25.858-11.597-25.858-25.858
                                  c0-14.261,11.597-25.858,25.858-25.858c14.261,0,25.858,11.597,25.858,25.858C411.799,461.617,400.202,473.215,385.941,473.215z" />
                                                                    <path d="M498.088,126.274c-3.685-4.629-9.27-7.324-15.179-7.324H143.326l-17.629-89.095c-1.545-7.803-7.699-13.873-15.528-15.308
                                  L32.594,0.325C22.038-1.621,11.953,5.368,10.02,15.905s5.042,20.641,15.58,22.574l64.607,11.843l56.914,287.667
                                  c1.797,9.083,9.768,15.631,19.025,15.631h271.512c9.031,0,16.86-6.225,18.896-15.037l45.252-195.876
                                  C503.137,136.947,501.767,130.896,498.088,126.274z M422.233,314.833H182.074l-31.075-157.089h307.519L422.233,314.833z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#addtocart" x="28%" y="28%" />
                                                            </svg>
                                                            <span className="lblcart">Add to Cart</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item" data-countdowntime="2020-10-30">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <a href="#">
                                                    <img src="assets/images/product/5.jpg" alt="product-img" />
                                                    <img className="product-img-extra change" alt="product-img" src="assets/images/product/6.jpg" />
                                                </a>
                                            </div>
                                            <div className="caption">
                                                <div className="product-title"><a href="#">Black Tour Bag</a></div>
                                                <p className="price">
                                                    <span className="regular price-old">$42.00</span>
                                                    <span className="price-sale">$40.00 </span>
                                                </p>
                                                <div className="countdown-container">
                                                    <div className="countdown-text">The offer ends in :</div>
                                                    <div className="countdown-days counter">
                                                        <span className="data" />
                                                        <span className="lbl">Days</span>
                                                    </div>
                                                    <div className="countdown-hours counter">
                                                        <span className="data" />
                                                        <span className="lbl">Hours</span>
                                                    </div>
                                                    <div className="countdown-minutes counter">
                                                        <span className="data" />
                                                        <span className="lbl">Min</span>
                                                    </div>
                                                    <div className="countdown-seconds counter">
                                                        <span className="data" />
                                                        <span className="lbl">Sec</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <div className="btn-quickview">
                                                        <a className="quickbox" href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                    <title>eye-open</title>
                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                            </svg>
                                                            <span className="lblcart">Quick View</span>
                                                        </a>
                                                    </div>
                                                    <div className="btn-wishlist">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                    <title>heart-shape-outline</title>
                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="btn-cart">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="addtocart" viewBox="0 0 1200 1200">
                                                                    <title>addtocart</title>
                                                                    <path d="M194.59,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                  S230.235,382.711,194.59,382.711z M194.59,473.215c-14.261,0-25.858-11.597-25.858-25.858c0-14.261,11.597-25.858,25.858-25.858
                                  c14.254,0,25.858,11.597,25.858,25.858C220.448,461.617,208.851,473.215,194.59,473.215z" />
                                                                    <path d="M385.941,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                  S421.587,382.711,385.941,382.711z M385.941,473.215c-14.261,0-25.858-11.597-25.858-25.858
                                  c0-14.261,11.597-25.858,25.858-25.858c14.261,0,25.858,11.597,25.858,25.858C411.799,461.617,400.202,473.215,385.941,473.215z" />
                                                                    <path d="M498.088,126.274c-3.685-4.629-9.27-7.324-15.179-7.324H143.326l-17.629-89.095c-1.545-7.803-7.699-13.873-15.528-15.308
                                  L32.594,0.325C22.038-1.621,11.953,5.368,10.02,15.905s5.042,20.641,15.58,22.574l64.607,11.843l56.914,287.667
                                  c1.797,9.083,9.768,15.631,19.025,15.631h271.512c9.031,0,16.86-6.225,18.896-15.037l45.252-195.876
                                  C503.137,136.947,501.767,130.896,498.088,126.274z M422.233,314.833H182.074l-31.075-157.089h307.519L422.233,314.833z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#addtocart" x="28%" y="28%" />
                                                            </svg>
                                                            <span className="lblcart">Add to Cart</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="multilevel-item">
                                    <div className="item" data-countdowntime="2020-11-30">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <a href="#">
                                                    <img src="assets/images/product/7.jpg" alt="product-img" />
                                                    <img className="product-img-extra change" alt="product-img" src="assets/images/product/8.jpg" />
                                                </a>
                                            </div>
                                            <div className="caption">
                                                <div className="product-title"><a href="#">Critter Teddy</a></div>
                                                <p className="price">
                                                    <span className="regular price-old">$35.00</span>
                                                    <span className="price-sale">$30.00 </span>
                                                </p>
                                                <div className="countdown-container">
                                                    <div className="countdown-text">The offer ends in :</div>
                                                    <div className="countdown-days counter">
                                                        <span className="data" />
                                                        <span className="lbl">Days</span>
                                                    </div>
                                                    <div className="countdown-hours counter">
                                                        <span className="data" />
                                                        <span className="lbl">Hours</span>
                                                    </div>
                                                    <div className="countdown-minutes counter">
                                                        <span className="data" />
                                                        <span className="lbl">Min</span>
                                                    </div>
                                                    <div className="countdown-seconds counter">
                                                        <span className="data" />
                                                        <span className="lbl">Sec</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <div className="btn-quickview">
                                                        <a className="quickbox" href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                    <title>eye-open</title>
                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                            </svg>
                                                            <span className="lblcart">Quick View</span>
                                                        </a>
                                                    </div>
                                                    <div className="btn-wishlist">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                    <title>heart-shape-outline</title>
                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="btn-cart">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="addtocart" viewBox="0 0 1200 1200">
                                                                    <title>addtocart</title>
                                                                    <path d="M194.59,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                  S230.235,382.711,194.59,382.711z M194.59,473.215c-14.261,0-25.858-11.597-25.858-25.858c0-14.261,11.597-25.858,25.858-25.858
                                  c14.254,0,25.858,11.597,25.858,25.858C220.448,461.617,208.851,473.215,194.59,473.215z" />
                                                                    <path d="M385.941,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                  S421.587,382.711,385.941,382.711z M385.941,473.215c-14.261,0-25.858-11.597-25.858-25.858
                                  c0-14.261,11.597-25.858,25.858-25.858c14.261,0,25.858,11.597,25.858,25.858C411.799,461.617,400.202,473.215,385.941,473.215z" />
                                                                    <path d="M498.088,126.274c-3.685-4.629-9.27-7.324-15.179-7.324H143.326l-17.629-89.095c-1.545-7.803-7.699-13.873-15.528-15.308
                                  L32.594,0.325C22.038-1.621,11.953,5.368,10.02,15.905s5.042,20.641,15.58,22.574l64.607,11.843l56.914,287.667
                                  c1.797,9.083,9.768,15.631,19.025,15.631h271.512c9.031,0,16.86-6.225,18.896-15.037l45.252-195.876
                                  C503.137,136.947,501.767,130.896,498.088,126.274z M422.233,314.833H182.074l-31.075-157.089h307.519L422.233,314.833z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#addtocart" x="28%" y="28%" />
                                                            </svg>
                                                            <span className="lblcart">Add to Cart</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item" data-countdowntime="2021-03-31">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <a href="#">
                                                    <img src="assets/images/product/9.jpg" alt="product-img" />
                                                    <img className="product-img-extra change" alt="product-img" src="assets/images/product/10.jpg" />
                                                </a>
                                            </div>
                                            <div className="caption">
                                                <div className="product-title"><a href="#">Sensory Activity</a></div>
                                                <p className="price">
                                                    <span className="price-sale">$50.00 </span>
                                                </p>
                                                <div className="countdown-container">
                                                    <div className="countdown-text">The offer ends in :</div>
                                                    <div className="countdown-days counter">
                                                        <span className="data" />
                                                        <span className="lbl">Days</span>
                                                    </div>
                                                    <div className="countdown-hours counter">
                                                        <span className="data" />
                                                        <span className="lbl">Hours</span>
                                                    </div>
                                                    <div className="countdown-minutes counter">
                                                        <span className="data" />
                                                        <span className="lbl">Min</span>
                                                    </div>
                                                    <div className="countdown-seconds counter">
                                                        <span className="data" />
                                                        <span className="lbl">Sec</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <div className="btn-quickview">
                                                        <a className="quickbox" href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                    <title>eye-open</title>
                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                            </svg>
                                                            <span className="lblcart">Quick View</span>
                                                        </a>
                                                    </div>
                                                    <div className="btn-wishlist">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                    <title>heart-shape-outline</title>
                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="btn-cart">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="addtocart" viewBox="0 0 1200 1200">
                                                                    <title>addtocart</title>
                                                                    <path d="M194.59,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                  S230.235,382.711,194.59,382.711z M194.59,473.215c-14.261,0-25.858-11.597-25.858-25.858c0-14.261,11.597-25.858,25.858-25.858
                                  c14.254,0,25.858,11.597,25.858,25.858C220.448,461.617,208.851,473.215,194.59,473.215z" />
                                                                    <path d="M385.941,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                  S421.587,382.711,385.941,382.711z M385.941,473.215c-14.261,0-25.858-11.597-25.858-25.858
                                  c0-14.261,11.597-25.858,25.858-25.858c14.261,0,25.858,11.597,25.858,25.858C411.799,461.617,400.202,473.215,385.941,473.215z" />
                                                                    <path d="M498.088,126.274c-3.685-4.629-9.27-7.324-15.179-7.324H143.326l-17.629-89.095c-1.545-7.803-7.699-13.873-15.528-15.308
                                  L32.594,0.325C22.038-1.621,11.953,5.368,10.02,15.905s5.042,20.641,15.58,22.574l64.607,11.843l56.914,287.667
                                  c1.797,9.083,9.768,15.631,19.025,15.631h271.512c9.031,0,16.86-6.225,18.896-15.037l45.252-195.876
                                  C503.137,136.947,501.767,130.896,498.088,126.274z M422.233,314.833H182.074l-31.075-157.089h307.519L422.233,314.833z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#addtocart" x="28%" y="28%" />
                                                            </svg>
                                                            <span className="lblcart">Add to Cart</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item" data-countdowntime="2020-10-30">
                                        <div className="product-thumb">
                                            <div className="image">
                                                <a href="#">
                                                    <img src="assets/images/product/11.jpg" alt="product-img" />
                                                    <img className="product-img-extra change" alt="product-img" src="assets/images/product/12.jpg" />
                                                </a>
                                            </div>
                                            <div className="caption">
                                                <div className="product-title"><a href="#">Link 'n Go Pack</a></div>
                                                <p className="price">
                                                    <span className="regular price-old">$20.00</span>
                                                    <span className="price-sale">$15.00 </span>
                                                </p>
                                                <div className="countdown-container">
                                                    <div className="countdown-text">The offer ends in :</div>
                                                    <div className="countdown-days counter">
                                                        <span className="data" />
                                                        <span className="lbl">Days</span>
                                                    </div>
                                                    <div className="countdown-hours counter">
                                                        <span className="data" />
                                                        <span className="lbl">Hours</span>
                                                    </div>
                                                    <div className="countdown-minutes counter">
                                                        <span className="data" />
                                                        <span className="lbl">Min</span>
                                                    </div>
                                                    <div className="countdown-seconds counter">
                                                        <span className="data" />
                                                        <span className="lbl">Sec</span>
                                                    </div>
                                                </div>
                                                <div className="button-group">
                                                    <div className="btn-quickview">
                                                        <a className="quickbox" href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                    <title>eye-open</title>
                                                                    <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                            </svg>
                                                            <span className="lblcart">Quick View</span>
                                                        </a>
                                                    </div>
                                                    <div className="btn-wishlist">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                    <title>heart-shape-outline</title>
                                                                    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                            </svg>
                                                        </a>
                                                    </div>
                                                    <div className="btn-cart">
                                                        <a href="#">
                                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                                <symbol id="addtocart" viewBox="0 0 1200 1200">
                                                                    <title>addtocart</title>
                                                                    <path d="M194.59,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                  S230.235,382.711,194.59,382.711z M194.59,473.215c-14.261,0-25.858-11.597-25.858-25.858c0-14.261,11.597-25.858,25.858-25.858
                                  c14.254,0,25.858,11.597,25.858,25.858C220.448,461.617,208.851,473.215,194.59,473.215z" />
                                                                    <path d="M385.941,382.711c-35.646,0-64.646,29-64.646,64.646s29,64.646,64.646,64.646c35.646,0,64.646-29,64.646-64.646
                                  S421.587,382.711,385.941,382.711z M385.941,473.215c-14.261,0-25.858-11.597-25.858-25.858
                                  c0-14.261,11.597-25.858,25.858-25.858c14.261,0,25.858,11.597,25.858,25.858C411.799,461.617,400.202,473.215,385.941,473.215z" />
                                                                    <path d="M498.088,126.274c-3.685-4.629-9.27-7.324-15.179-7.324H143.326l-17.629-89.095c-1.545-7.803-7.699-13.873-15.528-15.308
                                  L32.594,0.325C22.038-1.621,11.953,5.368,10.02,15.905s5.042,20.641,15.58,22.574l64.607,11.843l56.914,287.667
                                  c1.797,9.083,9.768,15.631,19.025,15.631h271.512c9.031,0,16.86-6.225,18.896-15.037l45.252-195.876
                                  C503.137,136.947,501.767,130.896,498.088,126.274z M422.233,314.833H182.074l-31.075-157.089h307.519L422.233,314.833z" />
                                                                </symbol>
                                                            </svg>
                                                            <svg className="icon" viewBox="0 0 30 30">
                                                                <use xlinkHref="#addtocart" x="28%" y="28%" />
                                                            </svg>
                                                            <span className="lblcart">Add to Cart</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* -------------------manufacture---------- */}
                <section id="ishimanufacturerblock" className="clearfix container">
                    <div className="row">
                        <div className="col-md-2">
                            <div className="image-container">
                                <a href="#">
                                    <img src="assets/images/brand/logo1.png" title="Fashion Manufacturer 1" alt="Fashion Manufacturer 1" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="image-container">
                                <a href="#">
                                    <img src="assets/images/brand/logo2.png" title="Fashion Manufacturer 2" alt="Fashion Manufacturer 2" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="image-container">
                                <a href="#">
                                    <img src="assets/images/brand/logo3.png" title="Fashion Manufacturer 3" alt="Fashion Manufacturer 3" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="image-container">
                                <a href="#">
                                    <img src="assets/images/brand/logo4.png" title="Fashion Manufacturer 4" alt="Fashion Manufacturer 4" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="image-container">
                                <a href="#">
                                    <img src="assets/images/brand/logo5.png" title="Fashion Manufacturer 5" alt="Fashion Manufacturer 5" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="image-container">
                                <a href="#">
                                    <img src="assets/images/brand/logo6.png" title="Fashion Manufacturer 6" alt="Fashion Manufacturer 6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* -------------------special product---------- */}
                <section id="ishispecialproducts" className="container">
                    <h3 className="home-title">
                        <span className="title-icon"><span /></span>Special Products
                    </h3>
                    <div className="block_content row">
                        <div className="row products">
                            <div className="col-md-4">
                                <div className="product-thumb">
                                    <div className="item">
                                        <div className="product-desc">
                                            <div className="product-title"><a href="#">Shake Spin Lion</a></div>
                                            <div className="product-comments">
                                                <div className="star_content">
                                                    <div className="star star_on" />
                                                    <div className="star star_on" />
                                                    <div className="star star_on" />
                                                    <div className="star star_on" />
                                                    <div className="star star_on" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image">
                                            <a href="#" className="thumbnail product-thumbnail">
                                                <img src="assets/images/product/1.jpg" alt="product-img" />
                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/2.jpg" />
                                            </a>
                                            <div className="product-flags">
                                                <div className="sale">Sale</div>
                                            </div>
                                        </div>
                                        <div className="caption">
                                            <p className="description">
                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
                                            </p>
                                            <p className="price">
                                                <span className="regular price-old">$55.00</span>
                                                <span className="price-discount">9%</span>
                                                <span className="price-sale">$50.00 </span>
                                            </p>
                                            <div className="btn-cart">
                                                <a data-button-action="add-to-cart" className="button">
                                                    <i className="fa fa-shopping-cart" />
                                                    <span className="lblcart">Add to cart</span>
                                                </a>
                                            </div>
                                            <div className="button-group">
                                                <div className="btn-quickview">
                                                    <a className="quickbox" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                <title>eye-open</title>
                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                            </symbol>
                                                        </svg>
                                                        <svg className="icon" viewBox="0 0 30 30">
                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                        </svg>
                                                        <span className="lblcart">Quick View</span>
                                                    </a>
                                                </div>
                                                <div className="btn-wishlist">
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                <title>heart-shape-outline</title>
                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                            </symbol>
                                                        </svg>
                                                        <svg className="icon" viewBox="0 0 30 30">
                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product-thumb">
                                    <div className="item">
                                        <div className="product-desc">
                                            <div className="product-title"><a href="#">Sensory Sweet</a></div>
                                            <div className="product-comments">
                                                <div className="star_content">
                                                    <div className="star star_on" />
                                                    <div className="star star_on" />
                                                    <div className="star star_on" />
                                                    <div className="star star_on" />
                                                    <div className="star star_on" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image">
                                            <a href="#" className="thumbnail product-thumbnail">
                                                <img src="assets/images/product/8.jpg" alt="product-img" />
                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/9.jpg" />
                                            </a>
                                            <div className="product-flags">
                                                <div className="sale">Sale</div>
                                            </div>
                                        </div>
                                        <div className="caption">
                                            <p className="description">
                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
                                            </p>
                                            <p className="price">
                                                <span className="regular price-old">$30.00</span>
                                                <span className="price-discount">16%</span>
                                                <span className="price-sale">$25.00 </span>
                                            </p>
                                            <div className="btn-cart">
                                                <a data-button-action="add-to-cart" className="button">
                                                    <i className="fa fa-shopping-cart" />
                                                    <span className="lblcart">Add to cart</span>
                                                </a>
                                            </div>
                                            <div className="button-group">
                                                <div className="btn-quickview">
                                                    <a className="quickbox" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                <title>eye-open</title>
                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                            </symbol>
                                                        </svg>
                                                        <svg className="icon" viewBox="0 0 30 30">
                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                        </svg>
                                                        <span className="lblcart">Quick View</span>
                                                    </a>
                                                </div>
                                                <div className="btn-wishlist">
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                <title>heart-shape-outline</title>
                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                            </symbol>
                                                        </svg>
                                                        <svg className="icon" viewBox="0 0 30 30">
                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="product-thumb">
                                    <div className="item">
                                        <div className="product-desc">
                                            <div className="product-title"><a href="#">Link 'n Go Pack</a></div>
                                            <div className="product-comments">
                                                <div className="star_content">
                                                    <div className="star star_on" />
                                                    <div className="star star_on" />
                                                    <div className="star star_on" />
                                                    <div className="star star_on" />
                                                    <div className="star star_on" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="image">
                                            <a href="#" className="thumbnail product-thumbnail">
                                                <img src="assets/images/product/14.jpg" alt="product-img" />
                                                <img className="product-img-extra change" alt="product-img" src="assets/images/product/15.jpg" />
                                            </a>
                                            <div className="product-flags">
                                                <div className="sale">Sale</div>
                                            </div>
                                        </div>
                                        <div className="caption">
                                            <p className="description">
                                                The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..
                                            </p>
                                            <p className="price">
                                                <span className="regular price-old">$20.00</span>
                                                <span className="price-discount">25%</span>
                                                <span className="price-sale">$15.00 </span>
                                            </p>
                                            <div className="btn-cart">
                                                <a data-button-action="add-to-cart" className="button sold-out">
                                                    <i className="fa fa-shopping-cart" />
                                                    <span className="lblcart">Add to cart</span>
                                                </a>
                                            </div>
                                            <div className="button-group">
                                                <div className="btn-quickview">
                                                    <a className="quickbox" href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                            <symbol id="eye-open" viewBox="0 0 1190 1190">
                                                                <title>eye-open</title>
                                                                <path d="M505.918,236.117c-26.651-43.587-62.485-78.609-107.497-105.065c-45.015-26.457-92.549-39.687-142.608-39.687 c-50.059,0-97.595,13.225-142.61,39.687C68.187,157.508,32.355,192.53,5.708,236.117C1.903,242.778,0,249.345,0,255.818 c0,6.473,1.903,13.04,5.708,19.699c26.647,43.589,62.479,78.614,107.495,105.064c45.015,26.46,92.551,39.68,142.61,39.68 c50.06,0,97.594-13.176,142.608-39.536c45.012-26.361,80.852-61.432,107.497-105.208c3.806-6.659,5.708-13.223,5.708-19.699 C511.626,249.345,509.724,242.778,505.918,236.117z M194.568,158.03c17.034-17.034,37.447-25.554,61.242-25.554 c3.805,0,7.043,1.336,9.709,3.999c2.662,2.664,4,5.901,4,9.707c0,3.809-1.338,7.044-3.994,9.704 c-2.662,2.667-5.902,3.999-9.708,3.999c-16.368,0-30.362,5.808-41.971,17.416c-11.613,11.615-17.416,25.603-17.416,41.971 c0,3.811-1.336,7.044-3.999,9.71c-2.667,2.668-5.901,3.999-9.707,3.999c-3.809,0-7.044-1.334-9.71-3.999 c-2.667-2.666-3.999-5.903-3.999-9.71C169.015,195.482,177.535,175.065,194.568,158.03z M379.867,349.04 c-38.164,23.12-79.514,34.687-124.054,34.687c-44.539,0-85.889-11.56-124.051-34.687s-69.901-54.2-95.215-93.222 c28.931-44.921,65.19-78.518,108.777-100.783c-11.61,19.792-17.417,41.207-17.417,64.236c0,35.216,12.517,65.329,37.544,90.362 s55.151,37.544,90.362,37.544c35.214,0,65.329-12.518,90.362-37.544s37.545-55.146,37.545-90.362 c0-23.029-5.808-44.447-17.419-64.236c43.585,22.265,79.846,55.865,108.776,100.783C449.767,294.84,418.031,325.913,379.867,349.04 z" />
                                                            </symbol>
                                                        </svg>
                                                        <svg className="icon" viewBox="0 0 30 30">
                                                            <use xlinkHref="#eye-open" x="28%" y="28%" />
                                                        </svg>
                                                        <span className="lblcart">Quick View</span>
                                                    </a>
                                                </div>
                                                <div className="btn-wishlist">
                                                    <a href="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                                                            <symbol id="heart-shape-outline" viewBox="0 0 1400 1400">
                                                                <title>heart-shape-outline</title>
                                                                <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553C474.988,241.811,492.719,206.017,492.719,166.008z" />
                                                            </symbol>
                                                        </svg>
                                                        <svg className="icon" viewBox="0 0 30 30">
                                                            <use xlinkHref="#heart-shape-outline" x="32%" y="33%" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* -------------------smartblock---------- */}
                <section id="smartblog_block" className="smartblog_block clearfix container">
                    <h3 className="home-title">
                        <span className="title-icon"><span /></span>Latest Blog
                    </h3>
                    <div className="block_content">
                        <div className="row">
                            <div className="col-md-6 blog_post row">
                                <div className="news_module_image_holder col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <a href="blog_post.html">
                                        <img alt="Upon of seasons earth dominion" className="feat_img_small" src="assets/images/blog/1.jpg" />
                                        <span className="blog-hover" />
                                    </a>
                                </div>
                                <div className="blog_content col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="blog_inner">
                                        <h4 className="blog_title"><a href="blog_post.html">Upon of seasons earth dominion</a></h4>
                                        <div className="date-comment">
                                            <span className="blog_date"> <i className="fa fa-calendar" /> 27 / 07 / 2020</span>
                                            <span className="write-comment">
                                                <a href="#"><i className="fa fa-comment" /> 0 Comments</a>
                                            </span>
                                        </div>
                                        <p className="blog-desc">There are many variations of passages of Lorem Ipsum available, but...</p>
                                        <div className="read-more btn-primary"><a href="blog_post.html">Read more</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 blog_post row">
                                <div className="news_module_image_holder col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <a href="blog_post.html">
                                        <img alt="Lorem ipsum dolor sit amet" className="feat_img_small" src="assets/images/blog/2.jpg" />
                                        <span className="blog-hover" />
                                    </a>
                                </div>
                                <div className="blog_content col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="blog_inner">
                                        <h4 className="blog_title"><a href="blog_post.html">Lorem ipsum dolor sit amet</a></h4>
                                        <div className="date-comment">
                                            <span className="blog_date"> <i className="fa fa-calendar" /> 27 / 07 / 2020</span>
                                            <span className="write-comment">
                                                <a href="#"><i className="fa fa-comment" /> 0 Comments</a>
                                            </span>
                                        </div>
                                        <p className="blog-desc">
                                            Nascetur ridiculus mus upon of seasons earth dominion. Gathering brought light, cree...
                                        </p>
                                        <div className="read-more btn-primary"><a href="blog_post.html">Read more</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* -------------------banner---------- */}
                <section id="ishibanner" className="ishibannerblock">
                    <div className="bannerblock col-md-4 col-sm-4">
                        <a href="#" className="ishi-customhover-fadeoutcenter">
                            <img src="assets/images/banner/1.jpg" alt="banner" className="img-responsive" />
                        </a>
                    </div>
                    <div className="bannerblock col-md-4 col-sm-4">
                        <a href="#" className="ishi-customhover-fadeoutcenter">
                            <img src="assets/images/banner/2.jpg" alt="banner" className="img-responsive" />
                        </a>
                    </div>
                    <div className="bannerblock col-md-4 col-sm-4">
                        <a href="#" className="ishi-customhover-fadeoutcenter">
                            <img src="assets/images/banner/3.jpg" alt="banner" className="img-responsive" />
                        </a>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home