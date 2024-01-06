import React from 'react'
import img from '../Images/Logo.jpg'

export default function Header(){

    return (<>
        
        <div className="navbar w-3/4 flex items-center justify-center bg-orange-900 rounded-xl">
            <ul>
                <li>HOME</li>
                <li>MENU</li>
                <li><img
                    src={img}
                    alt="Logo"
                    className="w-1/12 h-auto"/>
                </li>    
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

    </>);

}