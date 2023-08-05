import React from 'react';
import Location from './icons/Location';
import { Link } from 'react-router-dom';



const Car = ({id,name,model,year,distance,image,price,location}) => {
    return (
        <div>
            <div className='shadow-lg p-2 hover:scale-[1.09] transition-all duration-500'>
                <img className=' sm:min-h-[228px] xl:min-h-[240p] w-full' src={image} alt="" />
                <p className='font-bold text-left my-2 text-sm'>{name}{model}</p>
                <p className='text-gray-500 text-left text-sm mb-2'>{distance}km    .   {year}</p>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-x-1'>
                        <Location/>
                        {location}

                    </div>
                    <div className='bg-[#5beb34] p-2 rounded-md'>
                         $ {price}
                    </div>

                </div>
                <div className='bg-red-500 text-white text-[10px]  text-center p-2 rounded-md w-fit mx-auto'> 
                    <Link to={`/cardetail/${id}`}><button>show Detail</button></Link>
                </div>


            </div>
        </div>
    );
};

export default Car;