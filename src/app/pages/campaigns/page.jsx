"use client";
import Header from '../../../components/Header'
import Image from 'next/image';
import React from 'react'
import {PiHamburger} from 'react-icons/pi';
import {SiCocacola } from 'react-icons/si';
import {GiChipsBag} from 'react-icons/gi';
import Footer from '../../../components/Footer';

export default function Campaigns() {
  return (
    <div>
      <Header/>
      <div className='w-full pr-4 pl-4 mr-auto ml-auto flex-grow pt-24 box-border'>
         <div className='flex flex-wrap -mr-4 -ml-4'>
            <div className='order-1 flex-initial max-w-full  relative w-full pr-4 pl-4 block'>
              <div className='flex flex-wrap -mr-4 -ml-4 box-border bg-repeat'>
                <div className='pr-0 pl-0 basis-0 flex-grow max-w-full relative w-full box-border block'>
                  <div className='block box-border bg-repeat'>
                    <h1 className='font-bold text-lg mt-3 pl-4'>2'li Big King® Fırsatı</h1>
                    <div className='flex-col p-2 rounded-none bg-white shadow-md flex mb-4 box-border bg-repeat'>
                      <div className='min-w-full mr-0 flex-1 box-border bg-repeat block'>
                        <Image className=' block rounded-lg align-middle border-none overflow-clip' src={'/burger1.png'} alt='' width={500} height={100}/>
                      </div>
                      <div className='p-2 flex-1 box-border bg-repeat block'>
                        <div className='border-b border-solid box-border bg-repeat block'>
                          <div className='flex'>
                            <div className='flex-auto'>
                              <h5 className='text-black text-base text-bold pt-3 mt-0 mb-2'>Kampanya içeriği</h5>
                              <div className='max-w-xs text-gray-500 text-sm font-normal'>
                                "Sadece"
                                <strong>
                                  <span className='text-gray-500'>230,00 TL</span>
                                </strong>
                              </div>
                            </div>
                            <div className='box-border bg-repeat block'>
                              <div className='mt-3 text-right'>
                                <div className='font-bold text-2xl'>
                                  <span className='text-red-600'>230,00 TL</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul className='flex-wrap list-none flex items-center pl-0 mb-5 mt-0'>
                            <li className='mb-2.5 mr-4 flex items-center text-sm font-normal text-gray-500 '>
                              <PiHamburger size={30} className='font-normal mr-1 before:content-none before:text-inherit'/>
                              "x2 Sandwich"
                            </li>
                            <li className='mb-2.5 mr-4 flex items-center text-sm font-normal text-gray-500 '>
                              <GiChipsBag size={25} className='font-normal mr-1 before:content-none before:text-inherit'/>
                              "Patates Kızartması (Orta)"
                            </li>
                            <li className='mb-2.5 mr-4 flex items-center text-sm font-normal text-gray-500 '>
                              <SiCocacola size={45} className='font-normal mr-1 before:content-none before:text-inherit'/>
                              "1 L. İçecek"
                            </li>
                          </ul>
                        </div>
                        <div className='border-b border-solid mb-2 box-border bg-repeat block'>
                          <div className='flex-col flex box-border bg-repeat'>
                            <div className='flex-auto block box-border bg-repeat'>
                              <h5 className='text-black text-base font-bold pt-3 mt-0 mb-2'>Kapmanya Geçerlilik Tarihi</h5>
                              <div className='text-gray-600 text-sm font-normal leading-4 mb-0'>
                                <span>01 Temmuz 2023</span>
                                <span>-</span>
                                <span>31 Aralık 2023</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='border-b-0 mb-4 box-border bg-repeat block'>
                          <div className='box-border bg-repeat block'>
                            <h5 className='text-black text-base font-bold pt-3 mt-0 mb-2'>Kampanya Bilgileri</h5>
                            <div className='p-2 rounded-xl border border-solid'>
                              <div className='text-gray-500 text-xs font-normal leading-4 max-h-20 pr-4'>
                              2'li Big King® Fırsatı ile 2 Adet Big King Sandviç + Patates Kızartması (Orta) + 1L. İçecek sadece 230 TL!
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='flex sticky top-0 bottom-0 z-0 justify-center bg-white border-t border-solid p-4 box-border bg-repeat'>
                          <button className='text-base p-4 h-11 bg-red-800 text-white text-bold'>Sepete Ekle</button>
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
