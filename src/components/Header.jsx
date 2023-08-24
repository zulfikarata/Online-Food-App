"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {BsGift,BsBasket,BsSearch} from 'react-icons/bs';
import {CiUser} from 'react-icons/ci';

export default function Header() {
   const router =useRouter();
   console.log(router);

  return (
    <>
     <div className='bg-white container mx-auto h-16 md:h-20 flex items-center justify-center md:justify-between'>
        <Image onClick={()=>router.back('/')} src={'/motor4.jpg'} resizemode="contain" alt="" width={100} height={100} class="" />
        <div className='relative w-[35%] m-8 box-border'>
           <input className='text-sm font-normal p-3 rounded-xl border block w-full' placeholder='Bir ürün ya da restoran arayın' type="text"/>
           <div  className='absolute top-0 right-0 cursor-pointer bg-transparent rounded-xl text-sm font-normal p-4 h-11'>
              <BsSearch className='flex font-normal text-black' size={18}/>
           </div>
        </div>
         <div className="hidden md:flex gap-x-8 text-sm font-semibold">
         <button type='button' onClick={()=>router.push('/pages/Campaigns')} className="flex items-center gap-x-2  transition-all text-opacity-80 hover:text-opacity-100">
                <BsGift size={30} />
                <h1 className='text-black font-semibold hover:opacity-70'>Kampanyalar</h1>
            </button>
            <button type='button' onClick={()=>router.push('/pages/Account')} className="flex items-center gap-x-2 transition-all text-opacity-80 hover:text-opacity-100">
               <CiUser size={30} />
                <h1 className='text-black font-semibold hover:opacity-70'>Hesabım</h1>
            </button>
            <div className='items-center flex order-2 box-border'>
               <button type='button' onClick={()=>router.push('/pages/Basket')} className='bg-red-600 flex flex-row items-center rounded-3xl h-11 w-32 transition box-border '>
                  <div className='relative bg-gray-900 p-3 rounded-3xl h-11 transition box-border'>
                     <div className='box-border bg-repeat block'>
                        <BsBasket className='text-white font-normal' size={20}/>
                     </div>  
                  </div>
                  <span className='text-white flex-1 text-center'>0,00 TL</span>
               </button>
            </div>        
        </div>
     </div>
    </>
  )
}
