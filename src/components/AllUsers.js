import { useQuery } from '@tanstack/react-query';
import React from 'react';
// import toast from 'react-hot-toast';

const AllUsers = () => {
    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('https://used-products-resale-market-server-phi.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    // const handleMakeseller = id => {
    //     fetch(`https://used-products-resale-market-server-phi.vercel.app/users/seller/${id}`, {
    //         method: 'PUT', 
    //         headers: {
    //             authorization: `bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.modifiedCount > 0){
    //             toast.success('verify successful.')
    //             refetch();
    //         }
    //     })
    // }

    return (
        <div>
            <h2 className="text-3xl">All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, i) =><tr key={user._id}>
            <th>{i+1}</th>
            <td> {user.name}</td>
            <td>{user.email}</td>
            <td>{ user.role}</td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;