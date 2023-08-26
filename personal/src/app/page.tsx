import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import Navbar from './components/navbar'
export default function Home() {
  return (
    <>
    <article className=''>
    <header className='w-[100rem] mx-auto flex flex-col'>
    </header>
    <main>
    <div className='mt-14 flex flex-col h-[25rem] justify-between gap-5'>
    <div className='flex flex-col leading-normal'>
    <h1 className='font-playFairDisplay text-white text-[3.5rem] text-center font-bold'>I'm Gede Astu Nugraha.</h1>
    <p className='text-center font-generalSans text-[#FFFFFF] text-xl font-medium opacity-50'>Front-end Developher and Web Design</p>
    </div>
    <img src="myPict-transformed.png" alt="" className='w-[40rem] mx-auto grayscale'/>
    </div>
    </main>
    </article>
    <article>

    </article>
    </>
  )
}
