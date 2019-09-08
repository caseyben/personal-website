import React from 'react'

const Navbar = () => {
    return(
        <nav>
            <div>
                <ul style={{flexDirection:'row'}}>
                    <li><a href="/">Casey Smith</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>                
            </div>
        </nav>
    )
}

export default Navbar