import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const ProductDetails = () => {
    const product = useLoaderData();
    const { title, price_min, price_max, email, category, created_at: { $date: createdAt }, image, status, location, seller_name, condition, usage, description, seller_contact } = product;

    return (
        <div className='my-10 w-10/12 mx-auto'>
            <div className='grid lg:grid-cols-2'>
                <div className=''>
                    <div>
                        <img
                        className='w-96 h-96 rounded-xl mb-6'
                        src={image} alt="" />
                    </div>
                    <div>
                        <h1 className="text-3xl">Product Description</h1>
                        <div className='font-bold flex justify-between items-center text-xl'>
                            <h1><span className='text-[#632EE3] '>Condition</span> : {condition}</h1>
                            <h1>Usage : {usage}</h1>
                        </div>
                        <div><p>{description}</p></div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;