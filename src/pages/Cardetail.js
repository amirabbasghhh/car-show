import React from 'react';
import { useParams } from 'react-router-dom';
import carsData from '../carsData';
import { Link } from 'react-router-dom';
import Company from '../components/icons/Company';
import Model from '../components/icons/Model';
import Location from '../components/icons/Location';
import Calender from '../components/icons/Calender';
import Road from '../components/icons/Road';
import Money from '../components/icons/Money'



const Cardetail = () => {
    const Id=useParams().carId-1
    return (
        <div>
            <div className='container mx-auto px-48 '>
                    <div className='mx-56 bg-[#5beb34]  text-center px-4 mt-4 mb-6'>
                            <Link to='/'> <h1 className=' font-extrabold underline text-2xl '>Car exhibition</h1></Link>
                            <p className='font-normal text-lg'>choose and buy your car</p>
                   </div>
                    <div className=' flex items-center justify-center mt-3 px-40'>
                           <img className=' bg-cover w-full' src={carsData[Id].image} alt="" />
                    </div>
                    <div className=' px-40 mx-auto my-4'>
                        <p className='font-extrabold text-left px-2'>{carsData[Id].name} {carsData[Id].model}</p>

                    </div>
                    <div className='shadow-2xl w-[70%] mt-4  mx-auto my-4 divide-y-2  '>
                        <div className='flex items-center justify-between py-3 px-2 '>
                            <div className='text-right'>{carsData[Id].name}</div>
                            <div className='flex gap-x-1'>
                                Company
                                <Company/>
                            </div>
                        </div>
                        <div className='flex items-center justify-between py-3 px-2'>
                            <div className='text-right'>{carsData[Id].model}</div>
                            <div className='flex gap-x-1'>
                                Model
                                <Model/>
                            </div>
                        </div>
                        <div className='flex items-center justify-between  py-3 px-2'>
                            <div className='text-right'>{carsData[Id].year}</div>
                            <div className='flex gap-x-1'>
                                First registration
                                <Calender/>
                            </div>
                        </div>
                        <div className='flex items-center justify-between  py-3 px-2'>
                            <div className='text-right'>{carsData[Id].distance}</div>
                            <div className='flex gap-x-1'>
                                Kms Driven
                                <Road/>
                            </div>
                        </div>
                        
                    </div>
                    <div className='shadow-lg rounded-lg w-[70%] mx-auto my-8 bg-white border py-3 px-2'>
                        <div className='flex items-center justify-between'>
                            <div><p>{carsData[Id].location}</p></div>
                            <div className='flex gap-x-2'>
                                Location
                                <Location/>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-lg rounded-lg w-[70%] mx-auto my-8 border py-3 px-4'>
                        <p className='font-bold text-left mb-4 text-2xl'>Extra information</p>
                        <p className='text-justify  leading-5'>
                            {carsData[Id].description}
                        </p>
                    </div>
                    <div className='shadow-lg rounded-lg w-[70%] mx-auto my-8 border py-3 px-4'>
                        <div className='flex items-center justify-between'>
                            <div>
                               $ {carsData[Id].price}
                            </div>
                            <div className='flex gap-x-2 items-center'>
                               : Price
                                <Money/>
                            </div>
                        </div>
                    </div>
                    <div className='shadow-lg rounded-lg w-[70%] mx-auto my-8 border py-3 text-center text-2xl px-4 bg-[#5beb34]'>
                            <Link>Buy</Link>
                    </div>
            </div>
        </div>
    );
};

export default Cardetail;