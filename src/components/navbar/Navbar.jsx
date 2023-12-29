import React, { useState } from 'react'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import './navbar.css'
import logo from '../../assests/logo.svg'

const Menu = ()=>(
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    
    </>
)

function Navbar() {

    const[toogleMenu,settoggleMenu]=useState(false);
  return (
    <div className='gpt-navbar'>
        <div className='gpt-navbar-links'>
            <div className='gpt-navbar-links-logo'>
                <img src={logo} alt="" />
            </div>
            <div className='gpt-navbar-links-container'>
                <p><a href="#home">Home</a></p>
                <p><a href="#wgpt3">What is GPT?</a></p>
                <p><a href="#possibility">Open AI</a></p>
                <p><a href="#features">Case Studies</a></p>
                <p><a href="#blog">Library</a></p>


            </div>

        </div>
        <div className='gpt-navbar-sign'>
            <p>Sign in</p>
            <button type='button'>Sign UP</button>
        </div>
        <div className='gpt-navbar-menu'>
            {
                toogleMenu
                ? <RiCloseLine color='#fff' size={25} onClick={()=>settoggleMenu(false)}/>
                : <RiMenu3Line color='#fff' size={25} onClick={()=>settoggleMenu(true)}/>

            }
            {toogleMenu && (
                <div className='gpt-navbar-menu-contaier scale-up-center'>
                    <div className='gpt-navbar-menu-container'>
                        <Menu/>
                        <div className='gpt-navbar-menu-container-links-signin'>
                            <p>Sign in</p>
                            <button type='button'>Sign UP</button>
                        </div>

                    </div>
                </div>
            )}

        </div>

    </div>
  )
}

export default Navbar