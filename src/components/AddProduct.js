import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const imageHostKey ='f1256e402477da7d24553b05b0f46126';

    const navigate = useNavigate();
    
    const { data: cate, isLoading } = useQuery({
        queryKey: ['cate'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories');
            const data = await res.json();
            return data;
        }
    })

    const handleAddProduct = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const products = {
                    title: data.name, 
                    Selleremail: data.email,
                    category: data.cate,
                    OriginalPrice: data.OriginalPrice,
                    ResalePrice: data.ResalePrice,
                    used: data.used,
                    location:data.location,
                    image: imgData.data.url
                }

                
                fetch('http://localhost:5000/addproduct', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(products)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`);
                    navigate('/dashboard/myproducts')
                })
            }
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-4xl">Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full max-w-xs mt-8">
                    <label className="label"> <span className="label-text">Product Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text" placeholder='Seller Email'>Email</span></label>
                    <input type="email" {...register("email", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <label className="label"> <span className="label-text" >Original price</span></label>
                    <input type="name" {...register("OriginalPrice", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <label className="label"> <span className="label-text" >Resale price</span></label>
                    <input type="name" {...register("ResalePrice", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <label className="label"> <span className="label-text" >Used:</span></label>
                    <input type="name" {...register("used", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="name" {...register("location", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />

                </div>
                <div className="form-control w-full max-w-xs">
                
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select 
                    {...register('cate')}
                    className="select input-bordered w-full max-w-xs">
                        {
                            cate.map(c => <option
                                key={c._id}
                            >{c.title}</option>)
                        }
                        
                        
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
            </form>
        </div>
    );
};




export default AddProduct;