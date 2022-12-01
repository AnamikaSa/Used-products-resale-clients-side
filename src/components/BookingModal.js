import React, { useContext, useState } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthProvider';

const BookingModal = ({c, setCategory}) => {

    const { name} = c;
    const [selectedDate, setSelectedDate] = useState(new Date());
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const Username = form.Username.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const price= form.price.value;

        
        const booking = {
            bookingDate: date,
            productName: name,
            Username: Username,
            price,
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
                    setCategory(null);
                    toast.success('Confirmed')
                    // refetch();
                }
                else{
                    toast.error(data.message)
                }
            })


    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            
                    <h3 className="text-lg font-bold">{name}</h3>
                    {/*   */}
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />

                        <input name="Username" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="price" type="text" placeholder="Include Price" className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;









