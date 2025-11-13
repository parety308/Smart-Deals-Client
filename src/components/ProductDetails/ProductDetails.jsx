import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { NavLink, useLoaderData, useNavigate, useParams } from 'react-router';

const ProductDetails = () => {
    const product = useLoaderData();
    const { _id, title, price_min, price_max, email, category, created_at, image, status, location, seller_image, condition, usage, seller_contact, seller_name } = product;
const navigate=useNavigate();
    return (
        <div className='my-10 w-10/12 mx-auto bg-base-200'>
            <div className='grid lg:grid-cols-2 gap-10'>
                <div className='p-4'>
                    <div>
                        <img
                            className='w-96 h-96 rounded-xl mb-6'
                            src={image} alt="" />
                    </div>
                    <div>
                        <h1 className="text-3xl">Product Description</h1>
                        <div className='font-bold flex justify-between items-center text-xl mb-4  border-b-1'>
                            <h1>Condition : {condition}</h1>
                            <h1 className='mb-2'>Usage : {usage}</h1>
                        </div>
                        <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti odio quos voluptatibus voluptatem nostrum nobis, ullam tenetur aut modi labore eos saepe quasi, nesciunt et est tempore ut quia assumenda nihil fugit sunt reiciendis sit voluptate quaerat. Quam, sunt! Laborum commodi laboriosam deleniti accusamus sequi consequuntur, incidunt optio ducimus a!</p></div>
                    </div>
                </div>
                <div className='p-4'>
                    <div ><button onClick={()=>navigate(-1)} className='flex items-center gap-1'><FaArrowLeft /> Back to Products</button></div>
                    <div className='text-3xl font-bold'>{title}</div>
                    <div className='my-2 p-4 shadow-md bg-[#FFFFFF] rounded-xl'>
                        <h1 className='text-[#4CAF50]  font-bold text-xl'>${price_min} - {price_max}</h1>
                        <p>Price starts from </p>
                    </div>
                    <div className='my-2 p-4 shadow-md bg-[#FFFFFF] rounded-xl'>
                        <h1 className="text-2xl font-bold my-1">Product Details</h1>
                        <p className="text-xl"><span className='font-semibold'>Product Id </span> : {_id}</p>
                        <p className='text-xl'><span className='font-semibold'>Posted</span> : {created_at} </p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold my-1">Seller Information</h1>
                        <div>
                            <div className='flex gap-5 items-center '><img className='w-12 h-12 rounded-full'
                                src={seller_image} alt="" />
                                <div>
                                    <h1 className='text-xl'>{seller_name}</h1>
                                    <p> crafts.by.{email}</p>
                                </div>
                            </div>
                            <p> <span className='font-bold text-xl'>Loaction</span> : {location}</p>
                            <p> <span className='font-bold text-xl'>Contact </span>: {seller_contact}</p>
                            <p> <span className='font-bold text-xl'>Status</span> :{status}</p>
                        </div>
                    </div>
                    <div> <NavLink className={` w-full btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-lg text-white font-semibold text-center`}>I want Buy This Product</NavLink></div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;