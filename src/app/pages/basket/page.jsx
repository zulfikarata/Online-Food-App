"use client";
import React from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { CiLocationOn } from 'react-icons/ci';
import { BsTrash } from 'react-icons/bs';
import {SlSpeech} from "react-icons/sl";
import {TfiHeadphoneAlt} from "react-icons/tfi";

export default function page() {
  return (
    <div>
        <Header/>
        <div className='max-w-md  w-full pr-3 pl-3 mr-2 flex-grow pt-32 box-border bg-repeat block'>
        <div className=' order-2 flex-initial relative w-full pr-4 pl-4 box-border bg-repeat block'>
                <div className=' border-r-2 border-solid  h-full'>
                  <div className='bg-white p-4 rounded-xl mb-4 border border-solid border-red-700'>
                    <div className=' text-lg font-bold text-black'>Son Siparişlerim</div>
                    <div className='box-border bg-repeat block'></div>
                    <div className='flex flex-row justify-between items-center pt-5'>
                      <TfiHeadphoneAlt size={20} className='font-normal text-red-600'/>
                    </div>
                  </div>
                </div>
        </div>
        </div>
        <div className='max-w-3xl w-full pr-3 pl-3 mr-auto ml-auto flex-grow pb-1 box-border bg-repeat '>
           <div className='flex flex-wrap -mr-4 -ml-4 box-border bg-repeat'>
              
              <div className='order-1 flex-auto max-w-full relative w-full pr-3 pl-3'>
                <div className=' mb-4'>
                   <div className='bg-white rounded-xl pb-2 pt-2 w-full pr-3 pl-3 mr-auto ml-auto'>
                    <div className=' mt-3 mb-1 font-bold '>
                        <div className='flex flex-row justify-between items-center'>
                            <span className=' leading-10 w-fit p-0 font-bold text-black '>Sepetim</span>
                        </div>
                        <div className='bg-red-700 absolute h-1 rounded-t-md '></div>
                        <div className='bg-neutral-400 h-1 rounded-t-md mb-3'></div>
                    </div>
                    <div className='box-border bg-repeat block'>
                        <div className='flex flex-row'>
                            <span className='text-gray-900 text-base font-bold'>Teslim edilecek adres</span>
                        </div>
                        <div className=' pt-2 flex'>
                            <CiLocationOn size={25} className='text-red-700 text-base font-normal mr-1.5 inline-block '/>
                            <span className='inline-block text-sm font-normal text-gray-900 '>"Cadde: -, Sokak: -, Bina Adı: Uncalı Meydan Hastanesi, Bina No: -, Daire No: -, KİRİS, KEMER/ANTALYA"</span>
                        </div>
                        <div className=' h-0 mt-4 mb-4'></div>
                    </div>
                    <div className='box-border bg-repeat block'>
                        <div className='flex flex-wrap -mr-0 -ml-0 '>
                            <div className=' basis-0 flex-grow max-w-full relative w-full pr-3'>
                                <div className='  mb-4 text-gray-900 text-base font-bold'>Siparişin</div>
                            </div>
                            <div className=' mb-6 flex-row-reverse flex basis-0 flex-grow  max-w-full relative w-full pr-3 pl-3'>
                                <button className=' bg-transparent border-0'>
                                    <span className='text-red-700 font-sans text-sm font-bold opacity-50'>
                                        Sepeti Boşalt
                                        <BsTrash className='font-sans not-italic font-normal normal-nums normal-case leading-none' size={20}/>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center text-gray-500 text-sm font-bold'>
                            <SlSpeech size={20} className='font-bold text-red-700 mb-2'/>
                            <div>Sepetinizde ürün bulunamadı!</div>
                        </div>
                        <div className='h-0 mt-4 mb-4 border-t border-solid'></div>
                    </div>
                    <div className="block -ml-3 -mr-3 mb-3"></div>
                     <div className="mb-2.5">
                      <div className="flex w-full flex-row justify-between items-center mb-2.5">
                        <span className="text-gray-900 text-base font-bold">Sipariş Özeti</span>
                      </div>
                      <div className="flex w-full flex-row justify-between items-center mb-2.5">
                        <span className="text-gray-400 font-normal">Sepet Tutarı</span>
                      </div>
                      <hr/>
                      <div className="flex w-full flex-row justify-between items-center mb-2.5">
                        <span className="text-gray-900 text-base font-bold">Ödenecek Tutar</span>
                        <span></span>
                      </div>
                   </div>
                   <div className="flex flex-wrap -mr-3 -ml-3">
                     <div className="flex-[41%] max-w-[41%] relative w-full pr-4 pl-4 text-red-700">
                        <button className="hover:cursor-pointer text-base font-medium mb-2 mt-3.5 block w-full bg-white text-red-700 rounded-lg p-4 h-11 border border-solid border-red-700">Kupon Kodu Ekle</button>
                     </div>
                   </div>
                  </div>
                  <div className="mt-4 justify-end flex flex-wrap -mr-4 -ml-4 mb-4">
                    <div className="flex-[25%] max-w-[25%] relative w-full pr-3 pl-3">
                        <button className="cursor-pointer mb-2 block w-full bg-white text-red-700 rounded-xl p-4 h-11 border border-solid border-red-700">Geri</button>
                    </div>
                    <div className="pl-0 flex-[41%] max-w-[41%] relative w-full pr-3">
                        <button className="font-medium text-sm opacity-50 cursor-not-allowed bg-red-700 border border-solid border-red-700 mb-2 block w-full text-white rounded-xl p-4 h-11">Ödemeye Geç</button>
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