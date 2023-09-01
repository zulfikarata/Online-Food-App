"use client";
import React from 'react'
import Header from '../../../components/Header'
import {SiGmail} from 'react-icons/si';
import { FaShoppingBag, FaUser } from 'react-icons/fa';
import { MdOutlineContactMail, MdOutlineNoFood, MdPhoneIphone } from 'react-icons/md';
import Footer from '../../../components/Footer';
import { CiLocationOn } from 'react-icons/ci';
import { BsCashCoin } from 'react-icons/bs';

export default function page() {
  return (
    <div>
        <Header/>
        <div className='col-span-full flex justify-start tracking-normal box-border text-sm'>
          <div className='justify-start pr-0 pl-0 mb-4 pt-20 flex-col-reverse mr-4 ml-4 max-w-full flex items-start w-full'>
            <aside className='flex-initial mt-0 mr-0 mb-4 max-w-full w-full flex flex-col'>
              <div className="mt-6 flex flex-col items-start">
                <div className='p-0 overflow-hidden rounded-lg flex flex-col justify-between w-full bg-white shadow-md font-semibold text-base'>
                  <div className='font-semibold leading-5 text-gray-600 text-xs'>
                    <ol className='m-0 list-none'>
                      <li className='p-0 border-0'>
                        <div className='cursor-pointer'>
                          <span className="font-normal block mr-6 ml-6 pt-4 pb-4 text-sm leading-5 text-gray-600 text-bold whitespace-nowrap border-b border-solid ">
                            <CiLocationOn className='text-red-600'/>
                            Adreslerim
                          </span>
                        </div>
                      </li>
                      <li className='p-0 border-0'>
                        <div className='cursor-pointer'>
                          <span className="font-normal block mr-6 ml-6 pt-4 pb-4 text-sm leading-5 text-gray-600 whitespace-nowrap border-b border-solid ">
                            <MdOutlineNoFood className="text-red-600"/>
                            Favori Restoranlar 
                          </span>
                        </div>
                      </li>
                      <li className='p-0 border-0'>
                        <div className='cursor-pointer'>
                          <span className="font-normal block mr-6 ml-6 pt-4 pb-4 text-sm leading-5 text-gray-600 whitespace-nowrap border-b border-solid ">
                            <FaShoppingBag className='text-red-600'/>
                            Geçmiş Siparişlerim
                          </span>
                        </div>
                      </li>
                      <li className='p-0 border-0'>
                        <div className='cursor-pointer'>
                          <span className="font-normal block mr-6 ml-6 pt-4 pb-4 text-sm leading-5 text-gray-600 whitespace-nowrap border-b border-solid ">
                            <BsCashCoin className='text-red-600'/>
                            Ödeme Yöntemlerim
                          </span>
                        </div>
                      </li>
                      <li className='p-0 border-0'>
                        <div className='cursor-pointer'>
                          <span className="font-normal block mr-6 ml-6 pt-4 pb-4 text-sm leading-5 text-gray-600 whitespace-nowrap border-b border-solid ">
                            <MdOutlineContactMail className="text-red-600"/>
                            İletişim Tercihlerim
                          </span>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </aside>
            <section className="mt-8 flex-col ml-0 flex flex-1 w-full">
              <div className='w-full relative flex flex-col items-start'>
                <div className='pt-0 pb-0 rounded-lg p-4 flex flex-col justify-center w-full bg-white shadow-md font-semibold text-base'>
                  <div className="pt-6 pb-0 p-2 font-semibold leading-5 text-gray-600 text-xs">
                    <ol className='m-0 p-0 list-none'>
                     <li className='p-0 border-0'>
                        <div className='cursor-pointer'>
                          <span className="font-normal block mr-6 ml-6 pt-4 pb-4 text-sm leading-5 text-gray-600 whitespace-nowrap border-b border-solid ">
                            <FaUser className='text-red-600'/>
                            Hesabım
                          </span>
                        </div>
                     </li>
                     <li className='p-0 border-0'>
                          <span className="font-normal block mr-6 ml-6 pt-4 pb-4 text-sm leading-5 text-gray-600 whitespace-nowrap border-b border-solid ">
                            <figure className=' w-3 mr-4 flex-shrink-0 h-full flex items-center justify-center overflow-hidden'>
                              <SiGmail className='text-red-600 object-none rounded-none' width={100} height={100}/>
                            </figure>
                            "mail@gmail.com"
                         </span>
                      </li>
                      <li className='p-0 border-0'>
                          <span className="font-normal block mr-6 ml-6 pt-4 pb-4 text-sm leading-5 text-gray-600 whitespace-nowrap border-b border-solid ">
                            <figure className=' w-3 mr-4 flex-shrink-0 h-full flex items-center justify-center overflow-hidden'>
                              <MdPhoneIphone className='text-red-600 object-none rounded-none' width={100} height={100}/>
                            </figure>
                            "Telefon Numarası"
                         </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <Footer/>
    </div>
  )
}
