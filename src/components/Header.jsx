"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { BiExit } from 'react-icons/bi';
import {BsGift,BsBasket,BsSearch, BsFillCaretRightFill} from 'react-icons/bs';
import {CiUser} from 'react-icons/ci';
import { FaHamburger } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

export default function Header() {
   const router =useRouter();
   console.log(router);

  return (
   <div className=' min-h-full min-w-full flex flex-col justify-between h-full text-black bg-gray-300 box-border bg-repeat'>
      <div className=' absolute w-full'> <div></div></div>
    <nav className=' pb-0 bg-white  pt-0 border-b border-solid border-red-600 fixed top-0 right-0 left-0 z-[1030] flex-nowrap flex-row justify-start flex items-center p-3 box-border bg-repeat'>
        <div className=' flex-nowrap flex items-center justify-between md:min-w-[960px]  w-full pr-4 pl-4 mr-auto ml-auto gap-x-28'>
         <div className='flex items-center justify-between flex-1'>
            <button className=' p-0 text-black inline-block mr-4 text-xl  whitespace-nowrap no-underline bg-transparent'>
               <Image onClick={()=>router.back('/')} src={'/motor4.jpg'} resizemode="contain" alt="" width={100} height={100} className="  align-middle border-none overflow-clip" />
            </button>
            <div className='relative w-2/3 m-0 block '>
               <input type="text" placeholder='Bir ürün ya da restoran arayın' className=" text-sm font-normal p-4 rounded-xl border border-solid border-gray-400 block w-full h-10 leading-6 text-gray-800 bg-white  bg-clip-padding transition-colors overflow-visible m-0 text-inherit" />
               <button className='absolute top-0 right-0 cursor-pointer bg-transparent border-none text-red-700  rounded-xl text-sm font-normal p-4 h-11'>
                  <BsSearch className='flex text-lg font-normal text-black before:text-inherit before:bg-repeat before:box-border' size={18}/>
               </button>
            </div>
         </div>
         <div className=' hidden p-2'>
            <span className=' hidden'>Menü</span>
            <button className=' p-0 border-none cursor-pointer text-neutral-600 hidden text-xl leading-4 bg-transparent rounded-md'>
               <div className='relative '>
                  <FaHamburger size={24} className=' inline-block font-normal text-black'/>
               </div>
               <MdClose className='hidden font-normal text-black' size={24}/>
            </button>
         </div>
         <div className=' flex-initial flex items-center '>
            <div className=' flex-row ml-auto  items-center flex pl-0 mb-0 list-none'>
               <div className=' order-1'>
                  <button type='button' onClick={()=>router.push('/pages/account')} className=' text-sm font-bold text-black inline-flex whitespace-nowrap items-center relative pr-2 pl-2 p-2 bg-transparent'>
                     <span className=' mr-2 inline-block text-center p-2 rounded-[50%] w-10 h-10 shadow-md'>
                        <CiUser className=' text-xl font-normal  before:box-border before:text-inherit before:bg-repeat' size={25} />
                     </span>
                     <span className=' inline-block flex-1 text-sm font-bold text-left'>Hesabım</span>
                  </button>
               </div>
               <div className=' box-border bg-repeat block'>
                  <button type='button' onClick={()=>router.push('/pages/campaigns')} className='text-sm font-bold text-black inline-flex whitespace-nowrap items-center relative pr-2 pl-2 p-2 bg-transparent'>
                     <span className=' mr-2 inline-block text-center p-2 rounded-[50%] w-10 h-10 shadow-md'>
                        <BsGift className=' text-xl font-normal  before:box-border before:text-inherit before:bg-repeat' size={20} />
                     </span>
                     <span className=' inline-block flex-1 text-sm font-bold text-left'>Kampanyalar</span>
                  </button>
               </div>
               <div className='items-center flex order-2 box-border'>
               <button type='button' onClick={()=>router.push('/pages/basket')} className='pr-0 text-sm font-bold text-black inline-flex whitespace-nowrap items-center relative pl-2 p-2 bg-transparent '>
                  <div className='bg-red-600 flex flex-row items-center rounded-3xl h-11 w-36 transition-all'>
                     <div className='relative bg-red-700 p-3 rounded-3xl h-11 transition-all'>
                        <div className=' box-border bg-repeat block'>
                        <BsBasket className='text-white text-xl font-normal before:contents before:box-border before:text-inherit' size={20}/>
                        </div>
                     </div> 
                     <span className='text-white flex-1 text-center'>0,00 TL</span> 
                  </div>
               </button>
            </div>  
              <div className=' mt-auto items-center flex'>
               <button className=' hidden p-4 text-sm font-normal text-black border-t border-solid border-t-gray-400 fixed right-0 left-0 z-10 bottom-4 whitespace-nowrap no-underline bg-transparent'>
                  <BiExit size={20} className=' text-xl font-normal pr-2'/>
                  Çıkış Yap!
               </button>
              </div>
            </div>
         </div>
        </div>
    </nav>
   </div>
  )
}