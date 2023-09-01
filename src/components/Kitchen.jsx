"use client";
import Image from 'next/image';
import React from 'react'

export default function Kitchen() {
  return (
    <div>
        <section className=' mb-6 max-w-full pr-10 pl-10 tracking-normal box-border text-sm'>
           <div>
              <div className='flex flex-col items-start'>
                <div className=' pl-4 w-full mb-3 flex justify-between items-center'>
                    <h5 className=' text-base text-black leading-5 font-bold'>Mutfaklar</h5>
                    <div className=' mr-1.5 ml-1.5'>
                        <div className='flex'></div>
                    </div>
                </div>
                <div className=' p-4 bg-transparent shadow-none rounded-none flex flex-col justify-between w-full bg-white font-semibold text-base'>
                    <div className=' flex h-full'>
                        <div className=' pr-0 pl-0 relative block box-border select-none touch-pan-y h-full w-full overflow-hidden'>
                            <div className=' relative block overflow-hidden m-0 p-0 h-full'>
                                <div className=' w-[13026px] opacity-100 items-center relative top-0 left-0 gap-36 ml-auto mr-auto h-full flex before:table'>
                                    <div className=' m-0 flex justify-center items-center float-left h-full min-h-[1px]'>
                                        <div>
                                            <div className=' w-full inline-block cursor-pointer m-0'>
                                                <div className=' flex-col items-center bg-white shadow-xl shadow-transparent rounded-lg m-0 w-36 h-full relative inline-flex'>
                                                    <figure className=' w-36 h-36 inline-flex relative m-0 items-center justify-center overflow-hidden'>
                                                        <Image className='block object-cover rounded bg-transparent border-none' src={'/lahmacun.png'} alt='' width={300} height={300}/>
                                                    </figure>
                                                    <h2 className=' text-base m-0 text-center w-full max-w-full h-10 border-t border-solid border-t-white p-2.5  text-red-700  leading-5 font-semibold'>Lahmacun</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' m-0 flex justify-center items-center float-left h-full min-h-[1px]'>
                                        <div>
                                            <div className=' w-full inline-block cursor-pointer m-0'>
                                                <div className=' flex-col items-center bg-white shadow-xl shadow-transparent rounded-lg m-0 w-36 h-full relative inline-flex'>
                                                    <figure className=' w-36 h-36 inline-flex relative m-0 items-center justify-center overflow-hidden'>
                                                        <Image className='block object-cover rounded bg-transparent border-none' src={'/pide.png'} alt='' width={400} height={400}/>
                                                    </figure>
                                                    <h2 className=' text-base m-0 text-center w-full max-w-full h-10 border-t border-solid border-t-white p-2.5  text-red-700  leading-5 font-semibold'>Pide</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' m-0 flex justify-center items-center float-left h-full min-h-[1px]'>
                                        <div>
                                            <div className=' w-full inline-block cursor-pointer m-0'>
                                                <div className=' flex-col items-center bg-white shadow-xl shadow-transparent rounded-lg m-0 w-36 h-full relative inline-flex'>
                                                    <figure className=' w-36 h-36 inline-flex relative m-0 items-center justify-center overflow-hidden'>
                                                        <Image className='block object-cover rounded bg-transparent border-none' src={'/burger.png'} alt='' width={300} height={300}/>
                                                    </figure>
                                                    <h2 className=' text-base m-0 text-center w-full max-w-full h-10 border-t border-solid border-t-white p-2.5  text-red-700  leading-5 font-semibold'>Burger</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className=' m-0 flex justify-center items-center float-left h-full min-h-[1px]'>
                                        <div>
                                            <div className=' w-full inline-block cursor-pointer m-0'>
                                                <div className=' flex-col items-center bg-white shadow-xl shadow-transparent rounded-lg m-0 w-36 h-full relative inline-flex'>
                                                    <figure className=' w-36 h-36 inline-flex relative m-0 items-center justify-center overflow-hidden'>
                                                        <Image className='block object-cover rounded bg-transparent border-none' src={'/pizza.png'} alt='' width={300} height={300}/>
                                                    </figure>
                                                    <h2 className='text-base m-0 text-center w-full max-w-full h-10 border-t border-solid border-t-white p-2.5  text-red-700  leading-5 font-semibold'>Pizza</h2>
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
        </section>
    </div>
  )
}
