import React, { } from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryProducts = () => {
    const p = useLoaderData([]);
    console.log(p);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-72 pl-28 ml-10 mb-5'>
            {
                p?.products.map(category => <div key={category._id}>
                    <div className="card w-96  bg-base-100 shadow-xl">
                        <figure><img src={category.img} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{category.name}</h2>
                            <p className='font-bold'>Used: <span className='text-secondary'>{category.used}</span></p>

                            <p className='font-bold'>Original Price:<span className='text-secondary'> {category.Original_Price}</span></p>

                            <p className='font-bold'>Resale Price: <span className='text-secondary'>{category.Resale_Price}</span></p>
                            <p className='font-bold'>Location: <span className='text-secondary'> {category.location}</span></p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Shop It Now</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CategoryProducts;