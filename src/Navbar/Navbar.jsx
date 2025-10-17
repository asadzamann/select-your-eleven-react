import React from 'react';
import logo from '../assets/logo.png'
import dollarSign from '../assets/dollar-sign-solid-full.svg'
const Navbar = ({availableBalance}) => {
  
    return (
        <div>
            <div className="max-w-[1200px] mx-auto navbar bg-base-100">
                <div className="flex-1">
                   <img src={logo} alt="" />
                </div>
              
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <span>{availableBalance}</span>
                       <img src={dollarSign} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;