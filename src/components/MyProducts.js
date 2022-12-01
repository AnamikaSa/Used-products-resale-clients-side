import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';



const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/addproduct?email=${user?.email}`;

    const { data: products = [] } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })
    const handleDelete= category=>{
        const agree =window.confirm(`Are you sure to delete this?? : ${category.title}`)
        if(agree){
            console.log("deleting this: " ,category._id);
            fetch(`http://localhost:5000/users/${category?._id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=> {
                console.log(data)
                if(data.deletedCount >0){
                    alert("Deleted Successfully");
                   
                }
            });
        }
        
    }


    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5'>
            {
                products &&
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
                            <p className='font-bold'>seller: <span className='text-secondary'> {category.email}</span></p>
                            <div className="card-actions justify-end">
                            <label htmlFor="booking-modal" className="btn btn-primary" onClick={()=>handleDelete(category)}>Delete</label>
                                
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