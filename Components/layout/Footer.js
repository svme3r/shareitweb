import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/assets/logo.png'

const Footer = () => {
  return (
    <div className='flex justify-center items-center p-5 border-t-2 border-gray-200'>
        {/* Left */}
        <div className='w-16'>
            <Image src={logo} layout="intrinsic" />
        </div>
        {/* Right */}
        <div>
            <ul className='flex'>
                <li className='px-3'>
                    <Link href={"/"}>
                        <a>Home</a>
                    </Link>
                </li>
                <li className='px-3'>
                    <Link href={"/dashboard"}>
                        <a>Dashboard</a>
                    </Link>
                </li>
                <li className='px-3'>
                    <Link href={"/dashboard/account/settings"}>
                        <a>Settings</a>
                    </Link>
                </li>
                <li className='px-3'>
                    <Link href={"/signin"}>
                        <a>Logout</a>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer