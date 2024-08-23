import { useState, useEffect } from 'react';
import rainy from '../photos/rainy.jpg';
import { RiSearch2Line } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa6";
import './App.css';

export default function App() {
  const [place, setPlace] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=cff444a355b34e978fe81403243003&q=${place}&days=5&aqi=no&alerts=no`);
        const finalResponse = await response.json();
        setWeatherData(finalResponse);
      } catch (error) {
        alert(error.message);
      }
    };
    if (place) {
      fetchData();
    }
  }, [place]);

  return (
    <div className="relative h-screen w-full flex flex-col md:flex-row">

      {/* Background Image Section */}
      <div>
        <img src={rainy} alt="Rainy background" className="absolute inset-0 h-full w-full object-cover" />
      
        {/* Text Overlay */}
        <div className='absolute top-14 left-16 right-16 text-white flex gap-6 items-center'>
          <h1 className='font-medium text-6xl md:text-8xl lg:text-9xl flex'>
            08 
            <FaRegCircle className='w-4 h-auto mb-14 stroke-[6px]' />
          </h1>
          <div>
            <h3 className='text-lg md:text-xl lg:text-2xl'>London</h3>
            <span className='text-sm md:text-base lg:text-lg'>hfuwhfhw</span>
          </div>
          <div>
            <img src="" alt="" />
            <span>Rainy</span>
          </div>
        </div>
      </div>
      
      {/* Blurry Transparent Section */}
      <div className="relative md:absolute md:inset-y-0 md:right-0 md:w-2/5 bg-black bg-opacity-30 backdrop-blur-md p-8 mt-auto md:mt-0 h-2/4 md:h-full overflow-y-auto">
        
        {/* Search Input */}
        <div className='flex justify-center items-center mb-4'>
          <input 
            type="text"
            value={place || ''}
            name="searchCity" 
            placeholder='Search Location'
            onChange={(e) => setPlace(e.target.value)}
            className='w-full p-3 border-b-2 border-gray-400 bg-transparent focus:outline-none focus:ring-0 placeholder-gray-400 text-gray-400'
          />
          <RiSearch2Line className='w-6 h-auto ml-2 text-white cursor-pointer' />
        </div>

        {/* Suggested Locations */}
        <div className='text-gray-400 flex flex-col gap-3 mt-8 ml-5 cursor-pointer'>
          <span>New Delhi</span>
          <span>Guwahati</span>
          <span>Bengaluru</span>
          <span>Chennai</span>
        </div>

        <hr className='my-10 bg-gray-500 border-none h-0.5' />

        {/* weather description */}
        <div className='text-white'>
          <h1>Weather Details</h1>
          <div className='mt-10 flex flex-col gap-4 mx-5'>
            <div className='flex justify-between items-center'>
              <h4 className='text-gray-400'>Min temp</h4>
              <span className='flex gap-1'>
                {`${86} c / ${96} f`}
              </span>
            </div>
            <div className='flex justify-between items-center'>
              <h4 className='text-gray-400'>Max temp</h4>
              <span className='flex gap-1'>
                {`${86} c / ${96} f`}
              </span>
            </div>
            <div className='flex justify-between items-center'>
              <h4 className='text-gray-400'>Humidity</h4>
              <span>{`${86} %`}</span>
            </div>
            <div className='flex justify-between items-center'>
              <h4 className='text-gray-400'>Wind</h4>
              <span>{`${86} km/h`}</span>
            </div>
          </div>
        </div>

        <hr className='my-10 bg-gray-500 border-none h-0.5' />

        {/* 5-days forecast */}
        <div>

        </div>
      </div>
    </div>
  );
}



{/* <div className="grid grid-cols-1 md:grid-cols-10 md:grid-rows-10 h-full">

  <div className="relative col-span-1 md:col-span-6">
    <img src={cloudy} alt="rainy" className='h-screen w-full object-cover' />
    <div className='absolute bottom-12 left-12 text-white flex items-center'>
      <h1 className='font-medium text-9xl flex'>
        08 
        <FaRegCircle className=' w-4 h-auto mb-14 stroke-[6px] '/>
      </h1>
      <div className='ml-4'>
        <h3 className='text-xl'>London</h3>
        <span>hfuwhfhw</span>
      </div>
    </div>
  </div>


  <div className="col-span-1 md:col-span-4 bg-slate-200 p-4">
    <div className='flex justify-center items-center mb-4'>
      <input 
        type="text"
        value={place || ''}
        name="searchCity" 
        placeholder='city'
        onChange={(e) => setPlace(e.target.value)}
        className='border border-gray-300 p-2 rounded'
      />
      <RiSearch2Line className='w-10 h-auto ml-2' />
    </div>
    <div>
      <h1>{place}</h1>
    </div>
  </div>
</div> */}
