import React from 'react';
import logo from '../assets/logo.png'
import dollarSign from '../assets/dollar-sign-solid-full.svg'
const Navbar = () => {
    return (
        <div>
            <div className="max-w-[1200px] mx-auto navbar bg-base-100">
                <div className="flex-1">
                   <img src={logo} alt="" />
                </div>
                {/* <div className="">
                    <a href="">Home</a>
                    <a href="">Fixture</a>
                    <a href="">Teams</a>
                    <a href="">Schedules</a>
                </div> */}
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                        <span>6000000000</span>
                       <img src={dollarSign} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;