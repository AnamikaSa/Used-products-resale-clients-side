import React from 'react';
import { useQuery } from '@tanstack/react-query';

const AllSellers = () => {
  const { data: users = [] } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/users/seller');
      const data = await res.json();
      return data;
    }
  });

  
   const handleVerify=event=>{
    event.currentTarget.disabled = true;
    console.log('button clicked');
    alert("Seller Verified")
  };


  return (
    <div>
      <h2 className="text-3xl">All Buyers</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Verify</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, i) => <tr key={user._id}>
                <th>{i + 1}</th>
                <td> {user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                
                  <button onClick={handleVerify} className='btn btn-primary'>Verify</button>
                  
                  </td>
                  
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;