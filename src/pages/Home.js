import React from 'react';
import { Link } from 'react-router-dom';
import Car from '../components/Car';
import carsData from '../carsData';
import Headers from '../components/Headers';

const Home = () => {
    
    return (
        <div>
           <Headers/>
           <Link to='/cars'>
                <div className='w-1/2 mx-auto mt-12 flex justify-center items-center font-semibold shadow-xl py-2 hover:scale-[1.09] hover:text-white transition-all bg-[#5beb34]'>
                    <button>See All Cars</button>
                </div>
           </Link>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 px-8 mt-10 mb-12'>
                {carsData.filter(car=>car.id<5).map(
                    car =><Car {...car}/>
                )
                    
                }
            </div> 
        </div>
    );
};

export default Home;