import React from 'react';
import Headers from './Headers';
import Car from './Car';
import carsData from '../carsData';

const Sedan = () => {
    return (
        <div>
            <Headers/>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 px-8 mt-10 mb-12'>
                {carsData.filter(car=>car.category==='sedan').map(
                    car =><Car {...car}/>
                )   
                }
            </div> 
        </div>
    );
};

export default Sedan;