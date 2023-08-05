import React ,{useContext} from 'react';
import { MaxContext,MinContext } from '../Contex/FilterContexProvider';
import Car from './Car';
import carsData from '../carsData';
import Headers from './Headers';
import { Link } from 'react-router-dom';
import Back from '../components/icons/Back'





const Filter = () => {
    const {min,setMin}=useContext(MinContext)
    const {max,setMax}=useContext(MaxContext)
    const backHandler=()=>{
        setMax("")
        setMin("")
    }
    var tool=(carsData.filter(car=>car.price <= parseInt(max) && car.price >= parseInt(min))).length
    return (
        <div>
            <Headers/>
            {tool ?<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 px-8 mt-10 mb-12'>
                {carsData.filter(car=>car.price <= parseInt(max) && car.price >= parseInt(min)).map(
                    car =><Car key={car.id} {...car}/>
                )   
                }
            </div> :<div className='text-red-500 font-extrabold text-center my-12 text-3xl'>There is no car with this price range</div>}
            <div className='bg-[#5beb34] flex items-center gap-x-2 rounded-full w-fit mx-auto p-3 hover:scale-[1.09] transition-all mb-6 '>
                <Link  onClick={backHandler} to='/'><button className='flex items-center gap-x-2'>Back <Back/></button></Link>
            </div>
            
        </div>
    );
};

export default Filter;