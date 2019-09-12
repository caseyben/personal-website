import React from 'react'

const Navbar = () => {
    return(
        <header>
        <nav className="nav-wrapper white">
            <a style={{fontFamily:"Montserrat",fontWeight:"500"}} className="brand-logo black-text" href="/">Casey Smith</a>
            <div className="container row">
                <ul>
                    <li><a style={{fontFamily:"Montserrat"}} className="black-text" href="/about">About</a></li>
                    <li><a style={{fontFamily:"Montserrat"}} className="black-text" href="/resume">Resume</a></li>
                    <li><a style={{fontFamily:"Montserrat"}} className="black-text" href="/contact">Contact</a></li>
                </ul>                
            </div>
        </nav>
        </header>
    )
}

export default Navbar