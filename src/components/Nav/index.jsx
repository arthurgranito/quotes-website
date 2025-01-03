import React from 'react'
import { IoMdQuote } from 'react-icons/io'
import { Icon } from '@chakra-ui/react'
import { IoMenuSharp } from 'react-icons/io5'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import { DrawerBackdrop } from '../ui/drawer'
import { DrawerBody } from '../ui/drawer'
import { DrawerCloseTrigger } from '../ui/drawer'
import { Avatar } from '../ui/avatar'
import { DrawerContent } from '../ui/drawer'
import { DrawerFooter } from '../ui/drawer'
import { DrawerHeader } from '../ui/drawer'
import { DrawerRoot } from '../ui/drawer'
import { DrawerTitle } from '../ui/drawer'
import { DrawerTrigger } from '../ui/drawer'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav>
                <Link to={'/'}>
                    <div className="logo">
                        <Icon fontSize="3xl" color="#f3f3f3">
                            <IoMdQuote />
                        </Icon>
                        <h1>Quote.</h1>
                    </div>
                </Link>


                <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
                    <DrawerBackdrop />
                    <DrawerTrigger asChild>
                        <button className='menu-btn'>
                            <Icon fontSize="3xl" color="#f3f3f3">
                                <IoMenuSharp />
                            </Icon>
                        </button>
                    </DrawerTrigger>
                    <DrawerContent className='menu'>
                        <DrawerHeader>
                            <DrawerTitle className='menu-title'>
                                About Me
                                <Avatar name="Arthur Granito" src="https://github.com/arthurgranito.png"/>
                            </DrawerTitle>
                        </DrawerHeader>
                        <DrawerBody>
                            <ul>
                                <li className="menu-li">
                                    <a href="https://github.com/arthurgranito" className="menu-link" target='_blank'>
                                        <FaGithub />
                                        Github
                                    </a>
                                </li>

                                <li className="menu-li">
                                    <a href="https://instagram.com/arthurgranito_" className="menu-link" target='_blank'>
                                        <FaInstagram />
                                        Instagram
                                    </a>
                                </li>

                                <li className="menu-li">
                                    <a href="https://www.linkedin.com/in/arthur-granito-b28721320" className="menu-link" target='_blank'>
                                        <FaLinkedin />
                                        Linkedin
                                    </a>
                                </li>
                            </ul>
                        </DrawerBody>
                        <DrawerFooter>
                            <p className='footer-text'>&copy; 2025 Arthur Granito. All rights reserved.</p>
                        </DrawerFooter>
                        <DrawerCloseTrigger />
                    </DrawerContent>
                </DrawerRoot>
            </nav>
        </>
    )
}

export default Nav