import React from 'react';
import Headers from './Headers';
import carsData from '../carsData';
import Car from './Car';

const Cars = () => {
    return (
        <div>
            <Headers/>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 px-8 mt-10 mb-12'>
                {carsData.map(
                    car =><Car {...car}/>
                  )
                    
                }
            </div> 
        </div>
    );
};

export default Cars;