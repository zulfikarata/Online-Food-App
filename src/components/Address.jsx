"use client";
import React from 'react'
import {TfiLocationPin} from 'react-icons/tfi';
import {MdKeyboardArrowDown} from 'react-icons/md';

const Address = () => {
  return (
    <div className='box-border bg-repeat block '>
    <div className='flex flex-row  items-center justify-center box-border bg-repeat'>
      <span className='text-black text-sm font-bold mt-3 box-border bg-repeat '>Seçtiğin adrese göre sipariş verebileceğin restoranlar </span>
      <button onClick={()=>{}} className='w-72 p-2.5 bg-white text-black flex flex-row items-center text-sm font-bold border border-gray-700 rounded-lg outline-none cursor-pointer touch-manipulation normal-case overflow-visible'>
        <TfiLocationPin size={24} classname='font-normal mb-0 text-red-600'/>
        <span>KONYAALTI</span>
        <MdKeyboardArrowDown size={30} className='ml-auto font-black text-red-600'/>
      </button>
    </div>
    </div>
  )
}

export default Address;