'use client'; // optional if using interactivity (like menus)

import Link from 'next/link';

export default function FooterBottom() {
    return (
        <div className='FooterBottom '>
            <div className='container'>
                <a href='#' className='ChatBoat'>Ask Takmeel</a>
                <div className='row'>
                    <div className='col-md-8'>
                        © Takmeel Real Estate Development L.L.C 2025. All Rights Reserved. &nbsp;<a href='https://www.mccollinsmedia.com/' target='_blank'>Designed & Developed By Mccollins Media</a>
                    </div>
                    <div className='col-md-4'>
                        <div className='socialMediaLinks'>
                            <div className='socialMediaLinksFlex'>
                                <a href='#' target='_blank'><span className='ScIcon facebook'>&nbsp;</span></a>
                                <a href='#' target='_blank'><span className='ScIcon instagram'>&nbsp;</span></a>
                                <a href='#' target='_blank'><span className='ScIcon tiktok'>&nbsp;</span></a>
                                <a href='#' target='_blank'><span className='ScIcon youtube'>&nbsp;</span></a>
                                <a href='#' target='_blank'><span className='ScIcon x'>&nbsp;</span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='halo-sticky-toolbar-mobile m-only'>
                    <div className='bottom-bar'>
                        <ul className='bottom-bar--list'>
                            <li>
                                <Link href="/">
                                    <span>
                                        <div className='icon'>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACbElEQVR4nO2YTYsTQRCGSzeoqAiCIZnu960JMiDkIiKLCCLoSfDmZQ8eZf0JetGbB/+CghcR9KIn96Dgih8oeljx4E1EURRFBVHwY9WVdju72ZA1MzEzmbD9QEFguqvqTVXXdCIS6E2j0YhJ3gRww32WUcRauw/AW5Jz3t4DOCAjxCoAJ0j+dAIAXHXmxfwCcNKtkTKTJMkmkpd90r8BnBaR1S5xVT3eEkdySlU3Sxmx1m4H8NQn+qFbG3W02wsA41ImABwm+cW30oyqbl1urTGGJB/4tV8BHGk94+J5WmJFaKi49mkFBHA+iqL1vTYlSbKW5Nm2fWeazeaaoQix1oLkfZ/IN2vtZB8+Jt1en/BfX+2J5y4EwF4Ab3ygl9baXf36iuN4B4Bn3SrAHIW40XqM5KyvxLUoirb8r1Pnw/miT9xNOBcrFyFdRuspERkbYIgx59P59jGuDFyIMWYbgCe+Cp+stYckJ1T1IICPAz/sJCdIfvZOHwNIJGcAJC5Wm5iJgY1WkhdqtdoGKYg4jteRPNc5ojM5qdfrVXdj9U5m/eEbCqp6FMB3L+YOSZNqI8k9AF57Ea+MMbtlyKjqTgDPfU7vVHV/GvU//IZbcRzXpSRE8yP6ekeXLL1FV6vVjSQvdkyKipSPSnuOAC653BeeknzYGq1FXtT6gYsiWrneW3gI4C7JR+59MSpCzPy7bYbk9D8XSklh2vyCkIJgqMhKqwiX+Znay4KQXuT+TRUVh0EIQ0WywNBaKQmHPSMMrZWS0FoZYWitlITWyghDa6UktFZGuGJbiyU36YX/636uzAbgdtZKBgLSH38AEGROI7JzzGwAAAAASUVORK5CYII=" alt="home--v1"/>
                                        </div>
                                        <div className='text'>
                                            home
                                        </div>
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <a href='#' className='toggleMenu'>
                                    <span>
                                        <div className='icon'>
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVklEQVR4nO2WvU7DQBCErwEqfiRX4Blbilyl9YMk8BgEeEsISAHRQOA1CD1orU0UhbUiUSRXzCdd49tZ2Xt760lJCPEvmqY5AnBL8pHkt68pgJvhcHiYo/YPAEqSryR/ogXgheRFTtqwIstkAN5IjoqiOLYFYAxg7nvPmxXalzakqqo7F7wPBoPTzX17tpZ0koM2hOSTH+Uojuha4NJjpjloQ0guLNiONI7o2uDEE37loA2xoG0J7Zh7XmYv2hAfe9aH4zgipbIsrzzhQw7aEJvXnnAeXbq6rs9IfnrMdQ7aEBttPq/tyz/sgllv2vKKLJPN2rY9yEHbi/101pJGP6ZZVVXnOWl78QpNrB99oiwA3NuxbqvIvrRC7JJGNh6y8ZSND5CNT7LxHbLxfcjGJ9n4FZSNF2L3NLLxkI2nbHyAbHySje+Qje9DNj7Jxq+gbLwQIm3hF4wwaS5tVV53AAAAAElFTkSuQmCC" alt="circled-menu"/>
                                        </div>
                                        <div className='text'>
                                            Menu
                                        </div>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span>
                                        <div className='icon'>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA2klEQVR4nO2Wyw3DIBBE55QqdijAJST95VOo04YjI/kUfAASs+B5EscVPIZdG9hhmqYLyZeZvUkuLZeZzWb2WM+EXMzs2VqA30L3EpF5LQ4hXNGYEMJtSya7eLsFOIGl55FIL4kwozn/UQuJFNxMza3y6EQ81iaRCDpLhJpa9DF+W0GJUD2ydPWLAoe1SSQCJRLRl/2047cVlAgHf1ocTQQOa5NIBEokomY/7dRqBSXCwZ8WRxOBw9okEoESiXTV7DX7QiI/xFUiNUgESgRZ0+nIhdL37G3tHfgDBgxCNClwHF4AAAAASUVORK5CYII=" alt="building"/>
                                        </div>
                                        <div className='text'>
                                            Projects
                                        </div>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span>
                                        <div className='icon'>
                                            <img src="data:image/png;base64,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" alt="whatsapp--v1"/>
                                        </div>
                                        <div className='text'>
                                            WhatsApp
                                        </div>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span>
                                        <div className='icon'>
                                            <img src="data:image/png;base64,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" alt="ringer-volume"/>
                                        </div>
                                        <div className='text'>
                                            Call Us
                                        </div>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}