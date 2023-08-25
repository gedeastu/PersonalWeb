"use client"
import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react';
import { getDataNavLink } from '../services/navbarAPI';
const Navbar: React.FC = () => {

  // fecthing Our Specialist data API
  interface NavLinktype{
    id: number;
    nameLink: string;
    hrefLink: string;
  }
  const [dataNavLink,setDataNavLink]= useState<NavLinktype[]> ([]);
  const fetchData = async () =>{
    try{
      const data = await getDataNavLink();
      setDataNavLink(data);
    }catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
    fetchData();
  },[]);
  return (
    <>
    <nav className='flex flex-row gap-5 items-center py-10 justify-between font-medium text-xl font-generalSans text-white'>
    <div className='flex flex-row items-center gap-4'><svg height="3rem" viewBox="0 0 320 306" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M115.9 222.4C105.9 222.4 96.8 219.8 88.6 214.6C80.4 209.4 73.8667 202.033 69 192.5C64.1333 182.967 61.7 171.667 61.7 158.6C61.7 147.733 63.2667 138.167 66.4 129.9C69.5333 121.633 73.8333 114.7 79.3 109.1C84.7667 103.5 91.0333 99.3 98.1 96.5C105.233 93.6333 112.767 92.2 120.7 92.2C130.5 92.2 139.1 94.2333 146.5 98.3C153.9 102.3 160.233 108.667 165.5 117.4L150.7 122.6C146.233 117.067 141.433 113 136.3 110.4C131.233 107.733 125.833 106.4 120.1 106.4C112.567 106.4 105.633 108.5 99.3 112.7C92.9667 116.9 87.8667 122.9 84 130.7C80.2 138.5 78.3 147.8 78.3 158.6C78.3 168.2 79.8667 176.733 83 184.2C86.1333 191.6 90.5667 197.433 96.3 201.7C102.1 205.9 108.967 208 116.9 208C122.967 208 128.4 206.6 133.2 203.8C138.067 201 141.9 196.8 144.7 191.2C147.5 185.533 148.9 178.4 148.9 169.8H153.7C153.7 180.467 152.433 189.733 149.9 197.6C147.367 205.467 143.3 211.567 137.7 215.9C132.167 220.233 124.9 222.4 115.9 222.4ZM151.7 220L148.9 190.4V169.4L117.3 168.4V157.8H164.1V220H151.7Z" fill="white"/>
    <path d="M158.7 220L201.9 94.4H220.9L263.1 220H246.7L236.1 187.8H186.1L175.1 220H158.7ZM190.1 175.6H232.1L211.1 113.4L190.1 175.6Z" fill="white"/>
    <rect x="4" y="4" width="312" height="298" rx="149" stroke="white" stroke-width="8"/>
    </svg>
    <h1 className='text-white'>Gede Astu</h1></div>
    <div className='flex flex-row gap-5 items-center'>
    {dataNavLink.map((data)=>(
    <Link key={data.id} href={data.hrefLink} className='text-white'>
        {data.nameLink}
    </Link>
    ))}
    <button className='border border-white w-40 h-14 rounded-xl hover:bgGradient'>Hire Me!</button>
    </div>
    </nav>
    </>
  )
}
export default Navbar;
