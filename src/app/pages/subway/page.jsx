"use client";
import React from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer'
import Image from 'next/image';
import { BsFillBagCheckFill, BsPlusLg } from 'react-icons/bs';
import { BiSolidTime } from 'react-icons/bi';

export default function page() {
  return (
    <div>
        <Header/>
        <div className=' col-span-full pr-0 pl-0 grid-cols-2 tracking-normal box-border text-sm'>
            <div className=' col-span-full mb-4 flex-col pl-0 pr-0  flex w-full'>
                <div className='flex flex-col flex-1 overflow-hidden'>
                    <div className=' shadow-xl shadow-transparent w-full'>
                        <div className='w-full flex flex-col items-start'>
                            <div className='flex-col rounded-none p-4 flex justify-between w-full bg-white shadow-md font-semibold text-base'>
                                <div className='w-full object-cover overflow-hidden'>
                                    <div className='h-full'>
                                        <figure className='w-full h-full flex items-center justify-center overflow-hidden m-0'>
                                            <Image className='rounded-none object-cover bg-transparent border-none' src={'/sub.png'} alt='Burger' width={1000} height={1000}/>
                                        </figure>
                                    </div>
                                </div>
                                <div className='m-0 p-6 flex-col w-full relative overflow-hidden flex'>
                                   <div className='flex-col w-3/12 flex items-start'>
                                    <h1 className='flex justify-between items-center not-italic font-semibold text-base leading-6 text-yellow-600 '>Subway</h1>
                                   </div>
                                   <div className='block mt-2 mb-2 font-normal text-sm leading-5 text-gray-500'>Açılış 10:00 - Kapanış 01:00</div>
                                   <div className='flex-col items-start flex justify-between mt-1.5'>
                                    <div className='flex-col flex-1 flex w-full'>
                                        <article className='mr0 mb-2 max-w-full flex grayscale items-center'>
                                            <div className=' flex-shrink-0 items-center justify-center border-0 w-auto h-auto overflow-hidden inline-flex p-0 bg-white text-yellow-600 rounded-sm'>
                                                <BsFillBagCheckFill className='w-4 h-4 border-none'/>
                                            </div>
                                            <div className='items-center flex ml-2 w-full'>
                                                <div className=' justify-start flex '>
                                                    <span className=' max-w-full text-xs leading-4 text-gray-500 font-normal'>Restoran bu bölgede kendi kuryesiyle hizmet vermektedir.</span>
                                                </div>
                                            </div>
                                        </article>
                                        <article className=' max-w-full mr-4 flex items-center'>
                                            <div className=' flex-shrink-0 items-center justify-center border-0 w-auto h-auto overflow-hidden inline-flex bg-white  text-yellow-600 rounded-sm'>
                                                <BiSolidTime className='w-4 h-4 border-none'/>
                                            </div>
                                            <div className=' items-center flex ml-2 w-full'>
                                                <div className='flex'>
                                                    <div className='flex leading-3 whitespace-nowrap flex-col'>
                                                        <div className='font-semibold text-xs leading-3 mb-1 text-gray-500'>"40-50""&nbsp;""dk"</div>
                                                        <span className='font-normal text-xs leading-3 text-gray-500'>"Min.""&nbsp;""₺50,00"</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-0 mr-0 flex-col flex flex-1 items-start tracking-normal box-border'>
                        <div className='w-full flex-row ml- mt-4 flex flex-1 mb-4'>
                            <div className='flex-1'>
                                <div className='tracking-normal box-border text-sm'>
                                    <div>
                                        <h3 className=' pt-9 pl-4 text-xl leading-7 text-black p-6 font-normal'>Menüler</h3>
                                        <div className=' mb-1 w-full'>
                                            <div className='w-full flex flex-col items-start'>
                                                <div className=' rounded-none flex-row p-0  flex justify-between w-full bg-white shadow-md font-semibold text-base'>
                                                    <div className=' select-none inline-flex text-yellow-600 bg-transparent border-0 p-0 rounded-none'>
                                                        <button className=' items-start p-0 appearance h-full w-full inline-flex justify-center font-semibold leading-4 outline-0 border-0 cursor-pointer bg-inherit text-inherit border-inherit'>
                                                            <div className=' w-28 h-20 m-2 rounded-sm object-cover overflow-hidden relative'>
                                                                <figure className='w-full h-full flex items-center justify-center overflow-hidden m-0'>
                                                                    <Image className=' object-contain rounded-md bg-transparent border-none' src={'/teriyaki.png'} alt='' width={100} height={100}/>
                                                                </figure>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className=' flex-col flex-1 flex p-6 '>
                                                        <div className=' flex-col items-start justify-start max-w-md m-0 w-auto flex relative text-yellow-600'>
                                                            <div className=' select-none inline-flex text-yellow-600 bg-transparent border-0 p-0 rounded-none'>
                                                                <button className=' p-0 w-full h-full inline-flex items-center justify-center font-semibold leading-4 outline-0 border-0 cursor-pointer bg-inherit text-inherit border-inherit'>
                                                                    <h4 className=' font-semibold text-ellipsis text-lg leading-6 text-black text-left overflow-hidden'>Teriyaki Tavuklu Sandviç (30cm) Menü</h4>
                                                                </button>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <p className='text-xs  leading-4 font-normal text-gray-400 '>Teriyaki Tavuk Sandviç (30 cm.), tercih edeceğiniz yan lezzet ve kutu içecek</p>
                                                            </div>
                                                        </div>
                                                        <div className=' flex-row pt-2 justify-between items-end flex-1 m-0 min-w-[105px] w-auto flex'>
                                                            <div className=' flex-row flex items-start'>
                                                                <span className=' pl-1 font-semibold text-base leading-6 text-yellow-600'>₺180,00</span>
                                                            </div>
                                                            <div className=' select-none inline-flex rounded-lg overflow-hidden border-2 border-solid bg-yellow-600 border-yellow-600 text-white shadow-md'>
                                                                <button className=' leading-5 p-1 w-full h-full inline-flex items-center justify-center font-semibold outline-0 border-0 cursor-pointer'>
                                                                    <div className=' inline-flex items-center justify-center min-w-[12px] min-h[12px]'>
                                                                        <BsPlusLg className=' w-4 h-4'/>
                                                                    </div>
                                                                    Sepete Ekle
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' mb-1 w-full'>
                                            <div className='w-full flex flex-col items-start'>
                                                <div className=' rounded-none flex-row p-0  flex justify-between w-full bg-white shadow-md font-semibold text-base'>
                                                    <div className=' select-none inline-flex text-yellow-600 bg-transparent border-0 p-0 rounded-none'>
                                                        <button className=' items-start p-0 appearance h-full w-full inline-flex justify-center font-semibold leading-4 outline-0 border-0 cursor-pointer bg-inherit text-inherit border-inherit'>
                                                            <div className=' w-28 h-20 m-2 rounded-sm object-cover overflow-hidden relative'>
                                                                <figure className='w-full h-full flex items-center justify-center overflow-hidden m-0'>
                                                                    <Image className=' object-contain rounded-md bg-transparent border-none' src={'/baharat.png'} alt='' width={100} height={100}/>
                                                                </figure>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className=' flex-col flex-1 flex p-6 '>
                                                        <div className=' flex-col items-start justify-start max-w-md m-0 w-auto flex relative text-yellow-600'>
                                                            <div className=' select-none inline-flex text-yellow-600 bg-transparent border-0 p-0 rounded-none'>
                                                                <button className=' p-0 w-full h-full inline-flex items-center justify-center font-semibold leading-4 outline-0 border-0 cursor-pointer bg-inherit text-inherit border-inherit'>
                                                                    <h4 className=' font-semibold text-ellipsis text-lg leading-6 text-black text-left overflow-hidden'>Baharatlı italyan Sandviç (30cm) Menü</h4>
                                                                </button>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <p className='text-xs  leading-4 font-normal text-gray-400 '>Baharatlı İtalyan Sandviç (30 cm.), tercih edeceğiniz yan lezzet ve kutu içecek</p>
                                                            </div>
                                                        </div>
                                                        <div className=' flex-row pt-2 justify-between items-end flex-1 m-0 min-w-[105px] w-auto flex'>
                                                            <div className=' flex-row flex items-start'>
                                                                <span className=' pl-1 font-semibold text-base leading-6 text-yellow-600'>₺175,00</span>
                                                            </div>
                                                            <div className=' select-none inline-flex rounded-lg overflow-hidden border-2 border-solid bg-yellow-600 border-yellow-600 text-white shadow-md'>
                                                                <button className=' leading-5 p-1 w-full h-full inline-flex items-center justify-center font-semibold outline-0 border-0 cursor-pointer'>
                                                                    <div className=' inline-flex items-center justify-center min-w-[12px] min-h[12px]'>
                                                                        <BsPlusLg className=' w-4 h-4'/>
                                                                    </div>
                                                                    Sepete Ekle
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=' mb-1 w-full'>
                                            <div className='w-full flex flex-col items-start'>
                                                <div className=' rounded-none flex-row p-0  flex justify-between w-full bg-white shadow-md font-semibold text-base'>
                                                    <div className=' select-none inline-flex text-yellow-600 bg-transparent border-0 p-0 rounded-none'>
                                                        <button className=' items-start p-0 appearance h-full w-full inline-flex justify-center font-semibold leading-4 outline-0 border-0 cursor-pointer bg-inherit text-inherit border-inherit'>
                                                            <div className=' w-28 h-20 m-2 rounded-sm object-cover overflow-hidden relative'>
                                                                <figure className='w-full h-full flex items-center justify-center overflow-hidden m-0'>
                                                                    <Image className=' object-contain rounded-md bg-transparent border-none' src={'/biftek.png'} alt='' width={100} height={100}/>
                                                                </figure>
                                                            </div>
                                                        </button>
                                                    </div>
                                                    <div className=' flex-col flex-1 flex p-6 '>
                                                        <div className=' flex-col items-start justify-start max-w-md m-0 w-auto flex relative text-yellow-600'>
                                                            <div className=' select-none inline-flex text-yellow-600 bg-transparent border-0 p-0 rounded-none'>
                                                                <button className=' p-0 w-full h-full inline-flex items-center justify-center font-semibold leading-4 outline-0 border-0 cursor-pointer bg-inherit text-inherit border-inherit'>
                                                                    <h4 className=' font-semibold text-ellipsis text-lg leading-6 text-black text-left overflow-hidden'>Biftek & Peynir Sandviç Menü</h4>
                                                                </button>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <p className='text-xs  leading-4 font-normal text-gray-400 '>Biftek & Peynir Sandviç (30 cm.), tercih edeceğiniz yan lezzet ve kutu içecek</p>
                                                            </div>
                                                        </div>
                                                        <div className=' flex-row pt-2 justify-between items-end flex-1 m-0 min-w-[105px] w-auto flex'>
                                                            <div className=' flex-row flex items-start'>
                                                                <span className=' pl-1 font-semibold text-base leading-6 text-yellow-600'>₺220,00</span>
                                                            </div>
                                                            <div className=' select-none inline-flex rounded-lg overflow-hidden border-2 border-solid bg-yellow-600 border-yellow-600 text-white shadow-md'>
                                                                <button className=' leading-5 p-1 w-full h-full inline-flex items-center justify-center font-semibold outline-0 border-0 cursor-pointer'>
                                                                    <div className=' inline-flex items-center justify-center min-w-[12px] min-h[12px]'>
                                                                        <BsPlusLg className=' w-4 h-4'/>
                                                                    </div>
                                                                    Sepete Ekle
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
