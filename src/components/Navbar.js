import React from 'react'
import LeftArrow from '../assets/Arrows/left arrow.svg'
import Menu from '../assets/menu.svg'
const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
    <nav className=''>
        <div className='mx-auto px-6 py-4 '>
            <div className='flex'>
                <div className='flex'>
                    <img src={LeftArrow}/>
                    <span>Back to myntra.com</span>
                </div>
                <ul className='flex space-x-4 ml-auto'>
                    <li>Login</li>
                    <li>Help</li>
                    <li>My Cart</li>
                </ul>
            </div>
            <div className=''>

            </div>
        </div>
        <div className='mx-auto px-6 py-4 outline outline-gray-200'>
            <div className='flex'>
                <div className='font-heading'>
                    Visteria
                </div>
                <ul className='flex space-x-4 ml-[36vw]'>
                    <li>Wardrobe</li>
                    <li>Explore Trends</li>
                </ul>
            </div>
            <div className=''>

            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar