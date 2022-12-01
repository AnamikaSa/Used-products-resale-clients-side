import { useQuery } from '@tanstack/react-query';
import React, {  } from 'react';
import { Link } from 'react-router-dom';



const Categories = () => {
    // const [categoryOption,setcategoryOption]= useState([]);
    const {data: categoryOption=[] }=useQuery({
        queryKey:['categoryOption'],
        queryFn: ()=> fetch('https://used-products-resale-market-server-phi.vercel.app/categories')
        .then(res => res.json())
    })
    // useEffect(()=>{
    //     fetch('https://used-products-resale-market-server-phi.vercel.app/categories')
    //     .then(res=>res.json())
    //     .then(data=> 
    //         // console.log(data)
    //     setcategoryOption(data)
    //     )
    // })
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 ml-10 mb-5'>
            {
                categoryOption.map(items=>
                    <div key={items._id}>
                    {/* items={items} */}
                    
                    <div className="card w-80  bg-base-100 shadow-xl image-full">
            <figure><img src={items.img} alt="Zones" /></figure>
            <div className="card-body">
                <h2 className="card-title ml-14 mt-10">{items.title}</h2>
                <p className='mr-8'>Let's Shop!!!</p>
                <div className="card-actions justify-end">
                    <Link to={`/categories/${items._id}`}className="btn btn-primary mr-24">Buy Now</Link>
                </div>
            </div>
        </div>

                    {/* <Link to={`/category/${Category.name}`}className="btn btn-primary mr-24">Buy Now</Link> */}

                    </div>)
            }
        </div>
    );
};

export default Categories;