
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import useSeller from './hooks/useSeller';
import { AuthContext } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const CategoryProducts = () => {
    const p = useLoaderData([]);
    const [c, setCategory]= useState(null);
    const { user } = useContext(AuthContext);
    const [isSeller]= useSeller(user?.email);

    
    
    // console.log(p);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-72 pl-28 ml-10 mb-5'>
            {
                p?.products.map(category => <div key={category._id}
                >
                    <div className="card w-96  bg-base-100 shadow-xl">
                        <figure><img src={category.img} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{category.name}</h2>
                            <p className='font-bold'>Used: <span className='text-secondary'>{category.used}</span></p>

                            <p className='font-bold'>Original Price:<span className='text-secondary'> {category.Original_Price}</span></p>

                            <p className='font-bold'>Resale Price: <span className='text-secondary'>{category.Resale_Price}</span></p>
                            
                            <p className='font-bold'>Location: <span className='text-secondary'> {category.location}</span></p>
                            <div className="card-actions justify-end">
                                {
                                    !isSeller ?
                                    <label htmlFor="booking-modal" className="btn btn-primary" onClick={()=> setCategory(category)} >Shop It Now</label>
                                    :
                                    <>
                                    <label htmlFor="booking-modal" className="btn btn-primary" onClick={()=> setCategory(category)} disabled>Your Are not buyer</label>
                                    </>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>)
            }
            {
               c && 
                <BookingModal
                c={c}
                setCategory={setCategory}
            ></BookingModal>}
        </div>
    );
};

export default CategoryProducts;