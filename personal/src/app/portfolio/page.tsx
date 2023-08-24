import React from 'react'
import Link from 'next/link'
export default function PortfolioContent() {
  return (
    <>
    <div className='flex flex-row gap-5'>
    <Link href={'portfolio/Front-End'}>Front-end</Link>
    <Link href={'portfolio/Back-End'}>Back-end</Link>
    <Link href={'portfolio/UiUx'}>Ui/Ux</Link>
    </div>
    </>
  )
}
