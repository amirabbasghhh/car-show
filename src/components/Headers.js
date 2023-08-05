import React from 'react';
import { Link } from 'react-router-dom';
import Sedan from '../components/icons/Sedan';
import Sport from '../components/icons/Sport';
import Suv from '../components/icons/Suv';
import Hatchback from '../components/icons/Hatchback';
import { MaxContext,MinContext } from '../Contex/FilterContexProvider';
import { useContext } from 'react';

const Headers = () => {
    const {min,setMin}=useContext(MinContext)
    const {max,setMax}=useContext(MaxContext)
    
    return (
        <div>
            <div className='container bg-[#5beb34]  text-center px-4 mt-4'>
                    <Link to='/'> <h1 className=' font-extrabold underline text-2xl '>Car exhibition</h1></Link>
                    <p className='font-normal text-lg'>choose and buy your car</p>
           </div>
           <div className='w-1/2 mx-auto mt-10 shadow-2xl py-3 rounded-lg'>
                <div className='flex items-center justify-center gap-x-3'>
                    <div className='bg-[#5beb34] p-3 hover:scale-[1.09] transition-all rounded-md'>
                           <Link to='/filter'> <button>search</button></Link>
                    </div>
                    <div className='flex flex-col  gap-y-2 w-[60%]'>
                        <input type="text" onChange={(e)=>setMin(e.target.value)} value={min} placeholder='Enter min-price' className='text-left text-[10px] md:text-[16px] lg:text-lg xl:text-xl px-3 border-2 border-green-500 w-full '/>
                        <input type="text" onChange={(e)=>setMax(e.target.value)} value={max} placeholder='Enter max-price' className='text-left text-[10px] md:text-[16px] lg:text-lg xl:text-xl px-3 border-2 border-green-500 w-full'/>
                    </div>
                </div>
           </div>
           <div className=' w-2/3 mx-auto mt-12 grid grid-cols-2 lg:grid-cols-4 gap-2 shadow-xl p-3 pr-2 rounded-lg'>
               <Link to='/sport'>
                    <div className='bg-[#5beb34] cursor-pointer hover:scale-[1.02] transition-all rounded-lg p-1 text-[10px] md:text-sm lg:text-lg lg:p-2 flex flex-col items-center'>
                            sport cars
                            <Sport/>
                    </div>
               </Link>

               <Link to='/hatchback'>
                    <div className='bg-[#5beb34] cursor-pointer hover:scale-[1.02] transition-all rounded-lg p-1 text-[10px] md:text-sm lg:text-lg lg:p-2 flex flex-col items-center'>
                            Hatchback
                            <Hatchback/>
                    </div>
               </Link>
               <Link to='/suv'>
                    <div className='bg-[#5beb34] cursor-pointer hover:scale-[1.02] transition-all rounded-lg p-1 text-[10px] md:text-sm lg:text-lg lg:p-2 flex flex-col items-center'>
                            SUV
                            <Suv/>
                    </div>
               </Link>
              <Link to='/sedan'>
                    <div className='bg-[#5beb34] cursor-pointer hover:scale-[1.02] transition-all rounded-lg p-1 text-[10px] md:text-sm lg:text-lg lg:p-2 flex flex-col items-center'>
                            Sedan
                            <Sedan/>

                    </div>
              </Link>
           </div>
            
        </div>
    );
};

export default Headers;