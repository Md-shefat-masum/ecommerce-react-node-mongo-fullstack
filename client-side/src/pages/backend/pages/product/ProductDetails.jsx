import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import parse from 'html-react-parser';
import moment from 'moment'
import httpRequest from '../../../../hooks/httpRequest';


function ProductDetails() {
    const [data, setData] = useState(null)
    const param = useParams();

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = () => {
        httpRequest(`/product/get/${param.id}`)
            .then(res => {
                setData(res.data);
            })
    }

    return (
        data ?
            <div className='card'>
                <div className="card-header d-flex align-items-center flex-wrap justify-content-between">
                    <h4 className='m-0'>Product details</h4>
                    <div>
                        <Link to="/dashboard/products" className='btn btn-sm btn-info'><i className='fas fa-arrow-left'></i> Back</Link>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <img class="img-fluid" src={'http://localhost:5000/' + data.thumb_image} />
                            </div>
                            <ul class="d-flex my-2" style={{ gap: 10 }}>
                                {
                                    data.related_image?.map((image, index) => {
                                        return (
                                            <li key={index}>
                                                <img src={'http://localhost:5000/' + image} style={{ width: 30 }} alt="" />
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td style={{ width: 120, }}>Id</td>
                                        <td style={{ width: 3, }}>:</td>
                                        <td>{data._id}</td>
                                    </tr>
                                    <tr>
                                        <td>Title</td>
                                        <td>:</td>
                                        <td>{data.title}</td>
                                    </tr>
                                    <tr>
                                        <td>Category</td>
                                        <td>:</td>
                                        <td>{data.category.title}</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>:</td>
                                        <td>{data.price}</td>
                                    </tr>
                                    <tr>
                                        <td>Discount</td>
                                        <td>:</td>
                                        <td>{data.discount}</td>
                                    </tr>
                                    <tr>
                                        <td>Discount amount</td>
                                        <td>:</td>
                                        <td>{data.discount_price}</td>
                                    </tr>
                                    <tr>
                                        <td>Discount date</td>
                                        <td>:</td>
                                        <td>{moment(data.discount_date).format('DD MMMM YYYY hh:mm a')}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-12 mt-3">
                            <h2>Description</h2>

                            {parse(data.description)}
                        </div>
                    </div>
                </div>
            </div>
            :
            <h3>...loading</h3>
    )
}

export default ProductDetails