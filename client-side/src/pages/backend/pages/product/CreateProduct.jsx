import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Editor } from '@tinymce/tinymce-react';
import httpRequest from '../../../../hooks/httpRequest';

function CreateProduct() {
    const [formErrors, setFormErrors] = useState();
    const [categories, setCategories] = useState([]);
    const [previewImages, setPreviewImages] = useState({});
    const editorRef = useRef(null);
    const discount_field = useRef(null);
    const discount_price_field = useRef(null);
    const price_field = useRef(null);

    useEffect(() => {
        getCategory();
    }, [])

    const getCategory = () => {
        httpRequest('/category/all')
            .then(res => {
                setCategories(res.data);
            })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setFormErrors({});
        let formData = new FormData(e.target);
        formData.append('description', editorRef.current.getContent());

        httpRequest('/product/create','POST',formData)
            .then(res => {
                if (res.status === 422) {
                    let tempError = {
                        title: [],
                        category: [],
                        price: [],
                        image: [],
                        description: [],
                    };
                    res.data.errors.forEach((e, index) => {
                        tempError[e.param].push(
                            <li key={index} className='text-danger'>
                                {e.msg}
                            </li>
                        )
                    });
                    setFormErrors(tempError)
                }

                if (res.status === 201) {
                    e.target.reset();
                    window.alert('new product created.')
                }
            })
    }

    const discountHandler = () => {
        let price = +price_field.current.value;
        let discount = +discount_field.current.value;

        if (discount > 100) {
            discount_field.current.value = 100;
            discount = 100;
        }
        if (discount < 0) {
            discount_field.current.value = 0
        }

        if (discount > 0) {
            let discount_amount = ((price * discount) / 100);
            let discount_price = price - discount_amount;

            discount_price_field.current.value = discount_price;
            console.log(discount, price, discount_price);
        } else {
            discount_price_field.current.value = '';
            discount_field.current.value = ''
        }

    }

    const previewHandler = async (e, type) => {
        let files = await e.target.files
        let temp_images = { ...previewImages };

        if (type === 'related_image') {
            temp_images.related_image = [];
            let index = 1;
            for (const element of files) {
                temp_images.related_image.push(
                    <img key={index++}
                        style={{ width: 30, margin: 5 }}
                        src={window.URL.createObjectURL(element)} />
                )
            }
        }
        if (type === 'thumb_image') {
            temp_images.thumb_image = <img
                style={{ width: 30, margin: 5 }}
                src={window.URL.createObjectURL(e.target.files[0])} />
        }
        setPreviewImages(temp_images);
    }

    return (
        <div className='card'>
            <div className="card-header d-flex align-items-center flex-wrap justify-content-between">
                <h4 className='m-0'>Create Product</h4>
                <div>
                    <Link to="/dashboard/products" className='btn btn-sm btn-info'><i className='fas fa-arrow-left'></i> Back</Link>
                </div>
            </div>
            <div className="card-body pt-3">
                <form action="" encType="multipart/form-data" onSubmit={submitHandler}>
                    <div className="form-group mb-3">
                        <label htmlFor="">Title</label>
                        <input type="text" className='form-control' name='title' />
                        <ul>
                            {formErrors?.title}
                        </ul>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Category</label>
                        <select className='form-control' name='category'>
                            {
                                categories.map(i => {
                                    return <option key={i._id} value={i._id}>{i.title}</option>
                                })
                            }

                        </select>
                        <ul>
                            {formErrors?.category}
                        </ul>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">price</label>
                        <input type="number" ref={price_field} step={2} className='form-control' name='price' />
                        <ul>
                            {formErrors?.price}
                        </ul>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">discount</label>
                        <input max={100} onKeyUp={discountHandler} ref={discount_field} type="number" className='form-control' name='discount' />
                        <ul>
                            {formErrors?.discount}
                        </ul>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">discount price</label>
                        <input readOnly step=".00" ref={discount_price_field} type="number" className='form-control' name='discount_price' />
                        <ul>
                            {formErrors?.discount_price}
                        </ul>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">discount date</label>
                        <input type="date" className='form-control' name='discount_date' />
                        <ul>
                            {formErrors?.discount_date}
                        </ul>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Thumb Image</label>
                        <input
                            onChange={(e) => previewHandler(e, 'thumb_image')}
                            type="file"
                            className='form-control' name='thumb_image' />
                        {previewImages?.thumb_image}
                        <ul>
                            {formErrors?.thumb_image}
                        </ul>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Realated Image</label>
                        <input
                            onChange={(e) => previewHandler(e, 'related_image')}
                            type="file"
                            multiple
                            className='form-control' name='related_image[]' />
                        {previewImages?.related_image}
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">Description</label>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue="<p>This is the initial content of the editor.</p>"
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                        {/* <textarea rows={5} className='form-control' name='description'></textarea> */}
                        <ul>
                            {formErrors?.description}
                        </ul>
                    </div>

                    <button className='btn btn-secondary'>submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateProduct