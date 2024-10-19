"use client"
import axios from 'axios';
import React from 'react';

const appProductPage = () => {
    const [product, setProduct] = React.useState({
        productName: "",
        category: "",
        price: "",
        ram: "",
        room: "",
        productId: ""
    })
    const handleAddProduct = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        axios.post("http://localhost:3000/api/product", product)
            .then(data => {
                console.log(data);
                console.log(product);
            })
            .catch((error) => {
                console.log(error);
            });




    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleAddProduct} className="card-body grid grid-cols-2">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" onChange={(event) => setProduct({ ...product, productName: event?.target.value })} placeholder="Product Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <input type="text" onChange={(event) => setProduct({ ...product, category: event?.target.value })} placeholder="Category Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" onChange={(event) => setProduct({ ...product, price: event?.target.value })} placeholder="Product Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ram</span>
                            </label>
                            <input type="text" onChange={(event) => setProduct({ ...product, ram: event?.target.value })} placeholder="Ram" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Room</span>
                            </label>
                            <input type="text" onChange={(event) => setProduct({ ...product, room: event?.target.value })} placeholder="Room" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product ID:</span>
                            </label>
                            <input type="text" onChange={(event) => setProduct({ ...product, productId: event?.target.value })} placeholder="Made In" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6 col-span-2">
                            <button className="btn btn-primary">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default appProductPage;