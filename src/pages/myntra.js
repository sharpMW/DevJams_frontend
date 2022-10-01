import React from 'react'
import Logo from '../assets/myntra-logo.svg'
import Search from '../assets/search.svg'
import Myntra from '../assets/Myntra-home.png'
import { Link } from 'react-router-dom'
const myntra = () => {
  return (
    <>
        <nav className='flex items-center gap-24 pt-2'>
            <img src={Logo} alt='logo'/>
            <ul className='flex gap-8'>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KIDS</li>
                <li>HOME & LIVING</li>
                <li>BEAUTY</li>
            </ul>
            <div className='bg-[#B49E84] px-6 py-2 text-white'><Link to='/wardrobe'>Experience Visteria</Link></div>
            <div className='bg-gray-200'>
                <div className='px-6 py-2 flex gap-9'>
                    <img src={Search}/>
                    <span className='text-gray-400'>Search</span>
                </div>
            </div>
            <div className='flex gap-2'>
                <div>
                    <img/>
                    <span>Profile</span>
                </div>
                <div>
                    <img/>
                    <span>Wishlist</span>
                </div>
                <div>
                    <img/>
                    <span>Bag</span>
                </div>
            </div>
        </nav>
        <div>
            <img src={Myntra}/>
        </div>
    </>
  )
}

export default myntra