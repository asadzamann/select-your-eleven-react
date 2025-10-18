import React from 'react';

const PlayerCard = ({player}) => {
    console.log(player)
    const {name, battingStyle, image} = player;
    return (
         <div className='max-w-[1200px] mx-auto flex justify-between items-center border border-gray-300 rounded-2xl p-3'>
            <div className='flex '>
            <img src={image} className='w-[50px] h-[50px]' alt="" />
            <div className='flex flex-col'>
                    <h1 className='font-bold text-xl'>{name}</h1>
            <p className='text-gray-500'>{battingStyle}</p>

            </div>
            </div>
            <button className=' w-[24px] h-[24px] cursor-pointer'>
        <img src="https://i.ibb.co.com/pjYf2Ksq/image.png" alt="" />
            </button>
        </div>
    );
};

export default PlayerCard;