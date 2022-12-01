import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { format } from 'date-fns';
import useSeller from './hooks/useSeller';
import { AuthContext } from '../context/AuthProvider';
import useAdmin from './hooks/useAdmin';
import useBuyer from './hooks/useBuyer';

const Advertise = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);
    const [isSeller]= useSeller(user?.email);
    const [isAdmin] =useAdmin(user?.email);
    const [isBuyer] =useBuyer(user?.email);

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: () => fetch('https://used-products-resale-market-server-phi.vercel.app/addproduct')
            .then(res => res.json())
    })


    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const Username = form.Username.value;
        const email = form.email.value;
        const phone = form.phone.value;

        
        const booking = {
            bookingDate: date,
            productName: products.title,
            Username: Username,
            email,
            phone,
        }
        console.log(booking);
        

    
        fetch('https://used-products-resale-market-server-phi.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    products(null);
                    toast.success('Confirmed')
                    // refetch();
                }
                else{
                    toast.error(data.message)
                }
            })


    }

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 ml-20 mb-5'>
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
                            <p className='font-bold'>seller: <span className='text-secondary'> {category.email}</span></p>
                            <div className="card-actions justify-end">
                            {
                                    user?.email ?
                                    <label htmlFor="booking-modal" className="btn btn-primary" onClick={()=> products(category)} >Shop It</label>
                                    :
                                    <>
                                    <label htmlFor="booking-modal" className="btn btn-primary" onClick={()=> products(category)} disabled>Login first / You are not buyer</label>
                                    </>
                                }
                            
                                
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>

        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {products.map(category => <div key={category._id}>
                        <h3 className="text-lg font-bold">{category.title} </h3>
                        </div>)}
                    
                    
                    {/*   */}
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />

                        <input name="Username" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
        </div>
    )
};



export default Advertise;