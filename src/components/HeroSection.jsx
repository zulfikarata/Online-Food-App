"use client";
import React,{useState} from 'react'
import Slider from 'react-slick';
import { useWindowWidth } from '@react-hook/window-size'
import Image from 'next/image';
import ReactFlagsSelect from 'react-flags-select';
import {FcGoogle} from 'react-icons/fc';


const  HeroSection=() =>{
  const [selected, setSelected] = useState('TR');

  const windowWidth = useWindowWidth()

  const phones = {
        US: '+1',
        DE: '+50',
        TR: '+90',
        IT: '+7',
        IN: '+15'
  }
    
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed:500,
      autoplaySpeed: 3500,
      cssEase: "linear"
      };
  return (
    <div className='bg-red-700 mb4 border-2 pt-20 rounded-2xl pb-6 box-border bg-repeat'>
     <div className=" relative h-auto md:h-[500px] before:bg-gradient-to-r  before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
        <div className='col-span-full opacity-0 w-full h-full absolute top-0 left-0 z-10 bg-black transition'></div>
        <div className='object-contain rounded-full w-full md:w-[890px] md:left-1/2 md:rounded-lg bg-transparent p-6'>
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        {windowWidth >= 100 &&<Slider  {...settings}>
          
           <Image className=" object--none " src={"/hamburger.jpg"} alt='' width={1000} height={1000}  />
           <Image className="  object-none" src={"/pizza.jpg"} alt='' width={1000} height={1000} />
           <Image className="  object-none" src={"/doner.jpg"} alt='' width={1000} height={1000} />
           <Image className="  object-none" src={"/pide.jpg"} alt='' width={1000} height={1000} />
        </Slider>}
        </div>
        <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
               <div className="hidden md:block">
                </div>
                <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6">
                    <h4 className="text-primary-brand-color text-center font-semibold mb-4">Giriş yap veya kayıt ol</h4>
                    <div class="grid gap-y-3">
                        <div className="flex gap-x-2">
                            <ReactFlagsSelect
                                countries={Object.keys(phones)}
                                customLabels={phones}
                                onSelect={code => setSelected(code)}
                                selected={selected}
                                className="flag-select"
                            />
                            <label className="flex-1 relative group block cursor-pointer">
                                <input required className="h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer text-sm pt-2" />
                                <span className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs">Telefon Numarası</span>
                            </label>
                        </div>
                        <button className="bg-brand-yellow text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold ">
                            Telefon numarası ile devam et
                        </button>
                        <hr className="h-[1px] bg-gray-300 my-2" />
                        <button className="bg-blue-700 bg-opacity-10 text-blue-900 px-4 text-opacity-80 transition-colors hover:bg-blue-700 hover:text-white h-12 flex items-center rounded-md w-full text-sm font-semibold ">
                            <FcGoogle size={24} />
                            <span className="mx-auto">Google ile devam et</span>
                        </button>
                    </div>
                </div>
          </div>
     </div>
    </div>
  )

}
export default HeroSection;

