import React from 'react'
import resourceLink from '../../hooks/resourceLink';
import { IsAuth } from '../../hooks/UseAuth';
import useFrontendContext from '../../hooks/useFrontendContext';

function Cart() {
    const { state, dispatch } = useFrontendContext();
    const { carts, total_cart_amount } = state;
    return (
        <div className='container my-5 py-5'>
            <div className="card">
                <div className="card-body">
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th className='text-right'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                carts.map((product, index) => {
                                    return <tr key={index}>
                                        <td width={120}>
                                            <a className='text-info m-1' href="">Details</a>
                                            {
                                                IsAuth() ?
                                                    <a
                                                        className='text-danger m-1'
                                                        onClick={() => dispatch({ 
                                                            fn: 'async', type: 'removeCart', payload: {method: 'saveCart', index } 
                                                        })}
                                                        href="#/">Remove</a>
                                                    :
                                                    <a
                                                        className='text-danger m-1'
                                                        onClick={() => dispatch({ fn: null, type: 'removeCart', payload: { index } })}
                                                        href="#/">Remove</a>
                                            }
                                        </td>
                                        <td className='d-flex flex-wrap align-items-center' style={{ gap: 10 }}>
                                            <img width={100} src={resourceLink(product.thumb_image)} alt="Simul dolorem voluptaria" />
                                            <h3>{product.title}</h3>
                                        </td>
                                        <td>
                                            ${product.discount_price || product.price}
                                        </td>
                                        <td width={120}>
                                            {
                                                IsAuth() ?
                                                    <input
                                                        onChange={(e) => dispatch({
                                                            fn: 'async',
                                                            type: 'update_cart_qty',
                                                            payload: { method: 'saveCart', product, index, qty: +e.target.value }
                                                        })}
                                                        className='form-control'
                                                        type="number"
                                                        min={1} defaultValue={product.qty} />
                                                    :
                                                    <input
                                                        onChange={(e) => dispatch({
                                                            fn: null, type: "update_cart_qty", payload: {
                                                                product,
                                                                index,
                                                                qty: +e.target.value
                                                            }
                                                        })}
                                                        className='form-control'
                                                        type="number"
                                                        min={1} defaultValue={product.qty} />
                                            }
                                        </td>
                                        <td className='text-right'>
                                            ${product.qty * (product.discount_price || product.price)}
                                        </td>
                                    </tr>
                                })
                            }

                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan={4} className="text-right"> Total </th>
                                <th className='text-right'>${total_cart_amount}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart