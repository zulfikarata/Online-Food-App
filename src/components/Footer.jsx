"use client";
import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BiGlobe } from 'react-icons/bi';
import Image from 'next/image';
import Menu from './ui/Menu';

export default function Footer() {

    const menus = [
        {
            title: 'Site Haritası!',
            items: [
                {
                    title: 'Anasayfa'
                },
                {
                    title: 'Kampanyalar'
                },
                {
                    title: 'Hesabım'
                }
            ]
        },
        {
            title: 'Sertifikalar!',
            items: [
               <Image src={'/sertifika.jpg'} alt='' width={100} height={100}/>
            ]
        }

    ]
  return (
    <div className="bg-white mt-10 ">
            <div className="container mx-auto px-4 md:px-0">
                <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 pt-5 md:pt-10">
                    <section>
                        <h6 className="text-lg text-red-800  mb-4">Uygulamayı indirin!</h6>
                        <nav className="grid gap-2 md:gap-4 grid-cols-2 md:grid-cols-1">
                            <Image src={'/appstore.svg'} alt='' width={160} height={100} />
                            <Image src={'/googleplay.svg'} alt='' width={160} height={100} />
                        </nav>
                    </section>
                    {menus.map((menu, index) => <Menu key={index} {...menu} />)}
                </div>
                <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-100 mt-6 py-6">
                    <div className="text-xs text-gray-700 flex gap-x-8">
                        &copy; 2023
                    </div>
                    <nav className="flex gap-x-3">
                        <div className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
                            <FaFacebook size={21} />
                        </div>
                        <div className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
                            <FaTwitter size={21} />
                        </div>
                        <div className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color flex items-center justify-center">
                            <FaInstagram size={21} />
                        </div>
                        <div className="h-8 transition-colors hover:bg-primary-brand-color hover:bg-opacity-10 hover:text-primary-brand-color hover:border-transparent flex items-center px-2 text-sm gap-x-2 rounded text-gray-500 border border-gray-100">
                            <BiGlobe size={18} />
                            Türkçe (TR)
                        </div>
                    </nav>
                </div>
            </div>
        </div>
  )
}
