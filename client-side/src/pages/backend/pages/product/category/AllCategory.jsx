import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import httpRequest from '../../../../../hooks/httpRequest';

function AllCategory() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getCategory();
    }, [])

    const getCategory = () => {
        httpRequest('/category/all')
            .then(res => {
                setData(res.data);
            })
    }

    const deleteItem = (e, id) => {
        e.preventDefault();
        if (window.confirm('sure! do you want to delete?')) {
            fetch('http://localhost:5000/api/category/delete', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + window.localStorage.getItem('token')
                },
                body: JSON.stringify({ id })
            })
            .then(res=>res.json())
            .then(res=>{
                // console.log(res);
                getCategory();
            })
        }
    }

    return (
        <div className='card'>
            <div className="card-header d-flex align-items-center flex-wrap justify-content-between">
                <h4 className='m-0'>All Categories</h4>
                <div>
                    <Link to="/dashboard/category/create" className='btn btn-sm btn-info'><i className='fas fa-plus'></i> Create</Link>
                </div>
            </div>
            <div className="card-body table-responsive">
                <table className='table table-hover text-center'>
                    <thead>
                        <tr>
                            <th className='text-center'>SI</th>
                            <th className='text-center'>Title</th>
                            <th className='text-center'>Products</th>
                            <th className='text-center'>Parent</th>
                            <th className='text-center'>Creator</th>
                            <th style={{ width: '200px' }} className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(i => {
                                return (
                                    <tr key={i._id}>
                                        <td>{i._id}</td>
                                        <td>{i.title}</td>
                                        <td>0</td>
                                        <td>
                                            {i?.parent?.title}
                                        </td>
                                        <td>
                                            {i?.creator?.username}
                                        </td>
                                        <td>
                                            <div className='d-flex flex-wrap justify-content-end' style={{ gap: '5px' }}>
                                                <a href="#" className='btn btn-sm btn-info'>details</a>
                                                <Link to={`/dashboard/category/edit/${i._id}/${encodeURI(i.title.replaceAll(' ', '-'))}`} className='btn btn-sm btn-warning'>edit</Link>
                                                <a onClick={(e) => deleteItem(e, i._id)} href="#" className='btn btn-sm btn-danger'>delete</a>
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

export default AllCategory