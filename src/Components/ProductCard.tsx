import Link from 'next/link';
import React from 'react';
import Update from './Update';
import Delete from './Delete';
type productDemo = {
    productName: string,
    category: string,
    price: string,
    ram: string,
    room: string,
    madeIn: string,
    _id: string,
    productId: string
}
const ProductCard = ({ product }: { product: productDemo }) => {
    return (
        <div>
            <div className='border p-5 rounded' key={product.productName}>
                <h2 className='text-2xl font-semibold text-center'>{product.productName}</h2>
                <div className='grid grid-cols-2 gap-4'>
                    <p>Ram: {product.ram}</p>
                    <p>Room: {product.room}</p>
                    <p>Price: {product.price}</p>
                    <p>{product.category}</p>
                </div>
                <h4 className='text-xl'>{product.madeIn}</h4>
                <div className='flex justify-between'>
                <Link href={`/products/${product.productId}`}><button type='button' className='btn bg-red-300'>Details</button></Link>
                <Update id={product.productId} />
                <Delete id={product.productId}></Delete>
                </div>


            </div>
        </div>
    );
};

export default ProductCard;