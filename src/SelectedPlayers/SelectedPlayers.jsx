import React from 'react';

const SelectedPlayers = ({showSelected}) => {
    console.log(showSelected);
    return (
        <div className='max-w-[1200px] mx-auto flex justify-between items-center border border-red-300'>
            <div className='flex '>
            <img src="https://i.ibb.co.com/4wjJWNQR/Alex-Carey.png" className='w-[50px] h-[50px]' alt="" />
            <div className='flex flex-col'>
                    <h1 className='font-bold'>Darrell Steward</h1>
            <p>Left-Hand-Bat</p>

            </div>
            </div>
            <div className=''>
        <img src="https://i.ibb.co.com/pjYf2Ksq/image.png" alt="" />
            </div>
        </div>
    );
};

export default SelectedPlayers;