"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
 import {TiMediaRecord} from 'react-icons/ti';


const Category = () => {
  const router = useRouter();
  console.log(router);

  return (
    <div className='block'>
      <div className='flex items-center justify-center m-0 box-border'>
        <div className='m-0 p-2 flex-[25%] max-w-[25%]'>
           <div className='max-h-52 rounded-2xl border-none cursor-pointer relative flex flex-col min-w-0 break-words bg-white bg-clip-border box-border '>
             <div className='p-2 min-h-[140px] flex flex-col justify-center items-center'>
              <Image className='object-contain grow transition rounded-br rounded-bl' src={"/burgerking.png"} alt='Burger King Logo' width={70} height={100}/>
              <div className='padding-0 text-center flex flex-col justify-end grow-0 min-h-[1] box-border'>
                 <div className='min-h-[18] text-xs font-bold '></div>
                 <div className='text-xs font-normal flex items-center justify-center py-1.5 '>
                   <span className='flex items-center justify-center'>
                     <div className='bg-yellow-500 mx-2.5'><TiMediaRecord/></div>
                     <strong className='text-black text-sm'>BURGER KİNG</strong>
                   </span>
                 </div>
              </div>
             </div>
             <button onClick={()=>router.push('/pages/Burgerking')} className='flex flex-row items-center justify-center text-white p-4 rounded bg-red-800 rounded-br-2xl rounded-bl-2xl transition'>
                <div className='text-xs font-normal'>
                   <p className=' text-white font-bold mb-0 my-0 text-xl flex-col hover:opacity-70'>Sipariş Ver!</p>
                </div>
             </button>
           </div>
        </div>
        <div className='m-0 p-2 flex-[25%] max-w-[25%]'>
          <div className='max-h-52 rounded-2xl border-none cursor-pointer relative flex flex-col min-w-0 break-words bg-white bg-clip-border box-border '>
             <div className='p-2 min-h-[140px] flex flex-col justify-center items-center'>
                <Image className='object-contain grow transition rounded-br rounded-bl' src={"/popeyes.png"} alt='Burger King Logo' width={70} height={100}/>
                <div className='padding-0 text-center flex flex-col justify-end grow-0 min-h-[1] box-border'>
                 <div className='min-h-[18] text-xs font-bold '></div>
                 <div className='text-xs font-normal flex items-center justify-center py-1.5 '>
                   <span className='flex items-center justify-center'>
                     <div className='bg-yellow-500 mx-2.5'><TiMediaRecord/></div>
                     <strong className='text-black text-sm'>POPEYES</strong>
                   </span>
                 </div>
               </div>
             </div>
             <button type='button' onClick={()=>router.push('/pages/Popeyes')} className='flex flex-row items-center justify-center text-white p-4 rounded bg-red-800 rounded-br-2xl rounded-bl-2xl transition'>
                <div className='text-xs font-normal'>
                   <p className=' text-white font-bold mb-0 my-0 text-xl flex-col hover:opacity-70'>Sipariş Ver!</p>
                </div>
             </button>
          </div>
        </div>
        <div className='m-0 p-2 flex-[25%] max-w-[25%]'>
          <div className='max-h-52 rounded-2xl border-none cursor-pointer relative flex flex-col min-w-0 break-words bg-white bg-clip-border box-border '>
             <div className='p-2 min-h-[140px] flex flex-col justify-center items-center'>
                <Image className='object-contain grow transition rounded-br rounded-bl' src={"/subway.png"} alt='Burger King Logo' width={70} height={100}/>
                <div className='padding-0 text-center flex flex-col justify-end grow-0 min-h-[1] box-border'>
                 <div className='min-h-[18] text-xs font-bold '></div>
                 <div className='text-xs font-normal flex items-center justify-center py-1.5 '>
                   <span className='flex items-center justify-center'>
                     <div className='bg-yellow-500 mx-2.5'><TiMediaRecord/></div>
                     <strong className='text-black text-sm'>SUBWAY</strong>
                   </span>
                 </div>
               </div>
             </div>
             <button type='button' onClick={()=>router.push('/pages/Subway')} className='flex flex-row items-center justify-center text-white p-4 rounded bg-red-800 rounded-br-2xl rounded-bl-2xl transition'>
                <div className='text-xs font-normal'>
                   <p className=' text-white font-bold mb-0 my-0 text-xl flex-col hover:opacity-70'>Sipariş Ver!</p>
                </div>
             </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category