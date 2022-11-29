
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useToken from '../components/hooks/useToken';
import { useQuery } from '@tanstack/react-query';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');

    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();
    if (token) {
        navigate('/');

    }

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeseller = id => {
        fetch(`http://localhost:5000/users/seller/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('verify successful.')
                    refetch();
                }
            })
    }


    const handleSignUp = data => {
        console.log(data);
        setSignUPError('');
        createUser(data.email, data.password)
            .then(r => {
                const user = r.user;
                console.log(user);
                toast("User Created");
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email,data.select);
                    })
                    .catch(e => console.log(e));
            })
            .catch(err => {
                console.log(err)
                setSignUPError(err.message)
            });
    }

    const saveUser = (name, email, select) => {
        const user = { name, email, role: select };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                setCreatedUserEmail(email);
                // gettoken(email);
                // navigate('/');
            })
    }



    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" {...register("email", {
                            required: "Email Address is required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                        <div>

                            <div className="form-control w-full max-w-xs">
                                

                                <select {...register("select", { required: 'Email is Recquired!!' })} className="select select-primary w-full max-w-xs my-2">
                                    <option disabled selected>What kind of Account You want to create?</option>

                                    <option className='text-xl text-warning'>seller</option>
                                    <option className='text-xl text-warning'>buyer</option>
                                </select>

                                {/* <select className="select select-bordered">
                                    <option disabled selected>Reg As:</option>
                                    <option> <button onClick={() => handleMakeseller(users._id)} className='btn btn-xs btn-primary'>Buyer</button></option>

                                    <option><button onClick={() => handleMakeseller(users._id)} className='btn btn-xs btn-primary'>Seller</button></option>

                                </select> */}
                            </div>


                        </div>

                        

                    </div>
                    <input className='btn btn-accent w-full mt-7' value="SignUp" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}

                </form>
                <p>Already have an account <Link className='text-secondary' to="/login">Please Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;