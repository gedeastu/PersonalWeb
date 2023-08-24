import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <div className='flex flex-row gap-5'>
    <Link href={'/about'}>Go to About</Link>
    <Link href={'/portfolio'}>Go to Portfolio</Link>
    </div>
    </>
  )
}
