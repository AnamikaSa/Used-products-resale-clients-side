import { useQuery } from '@tanstack/react-query';
import React, {  } from 'react';



const MyProducts = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('http://localhost:5000/addproduct')
            .then(res => res.json())
    })

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-72 pl-28 ml-10 mb-5'>
            {
                products.map(category => <div key={category._id}
                >
                    <div className="card w-96  bg-base-100 shadow-xl">
                        <figure><img src={category.image} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{category.title}</h2>
                            <p className='font-bold'>Used: <span className='text-secondary'>{category.used}</span></p>

                            <p className='font-bold'>Original Price:<span className='text-secondary'> {category.OriginalPrice}</span></p>

                            <p className='font-bold'>Resale Price: <span className='text-secondary'>{category.ResalePrice}</span></p>
                            
                            <p className='font-bold'>Location: <span className='text-secondary'> {category.location}</span></p>
                            <p className='font-bold'>seller: <span className='text-secondary'> {category.Selleremail}</span></p>
                            <div className="card-actions justify-end">
                            <label htmlFor="booking-modal" className="btn btn-primary" >Delete</label>
                                {/* {
                                    !isSeller ?
                                    <label htmlFor="booking-modal" className="btn btn-primary" onClick={()=> setCategory(category)} >Shop It Now</label>
                                    :
                                    <>
                                    <label htmlFor="booking-modal" className="btn btn-primary" onClick={()=> setCategory(category)} disabled>Your Are not buyer</label>
                                    </>
                                } */}
                                
                            </div>
                        </div>
                    </div>
                </div>)
            }
            
        </div>
        </div>
    )
};


export default MyProducts;