import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import httpRequest from '../../../../hooks/httpRequest'
import resourceLink from '../../../../hooks/resourceLink'

function AllProducts() {
    const [data, setData] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        httpRequest('/product/all')
            .then(res => {
                setData(res.data);
            })
    }

    const deleteHandler = (id) => {
        let confirm = window.confirm('sure! do you wanna delete id');
        if (confirm) {
            httpRequest('/product/delete', 'POST', JSON.stringify({ id }),
                {
                    'Content-Type': 'application/json'
                })
                .then(res => {
                    let temp = [...data].filter(i => i._id !== id);
                    setData(temp);
                })
        }
    }
    return (
        <div className='card'>
            <div className="card-header d-flex align-items-center flex-wrap justify-content-between">
                <h4 className='m-0'>All Products</h4>
                <div>
                    <Link to="/dashboard/product/create" className='btn btn-sm btn-info'><i className='fas fa-plus'></i> Create</Link>
                </div>
            </div>
            <div className="card-body table-responsive">
                <table className='table table-hover text-center'>
                    <thead>
                        <tr>
                            <th className='text-center'>SI</th>
                            <th className='text-center'>Image</th>
                            <th className='text-center'>Title</th>
                            <th className='text-center'>Category</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Discount</th>
                            <th className='text-center'>D Price</th>
                            <th className='text-center'>Creator</th>
                            <th style={{ width: '200px' }} className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((i, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {i._id}
                                        </td>
                                        <td>
                                            {
                                                i.thumb_image ?
                                                    <img src={resourceLink(i.thumb_image)} style={{ width: 60 }} alt="" />
                                                    : ''
                                            }
                                            <ul className='d-flex mt-1' style={{ gap: 5 }}>
                                                {
                                                    i.related_image?.map((image, index) => {
                                                        return (
                                                            <li key={index}>
                                                                <img src={resourceLink(image)} style={{ width: 30 }} alt="" />
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </td>
                                        <td>
                                            {i.title}
                                        </td>
                                        <td>
                                            {i.category.title}
                                        </td>
                                        <td>
                                            {i.price}
                                        </td>
                                        <td>
                                            {i.discount}
                                        </td>
                                        <td>
                                            {i.discount_price}
                                        </td>
                                        <td>
                                            {i.creator.username}
                                        </td>
                                        <td>
                                            <div className='d-flex flex-wrap justify-content-end' style={{ gap: '5px' }}>
                                                <Link to={`/dashboard/product/details/${i._id}`} className='btn btn-sm btn-info'>details</Link>
                                                <Link to={`/dashboard/product/update/${i._id}/${i.title}`} className='btn btn-sm btn-warning'>edit</Link>
                                                <a onClick={() => deleteHandler(i._id)} href="#" className='btn btn-sm btn-danger'>delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllProducts