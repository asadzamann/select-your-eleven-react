import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Player = ({ player , setAvailableBalance , availableBalance, setShowSelected, showSelected}) => {
    const { name, image, country, role, rating, battingStyle, basePrice } = player;
    const [isSelected, setSelected] = useState(false);
    const handleSelected = () => {
       if(showSelected.length === 11){
        toast('11 Players Already Selected!');
        return;
       }
        if(availableBalance < basePrice){
            toast('Not Enough Balance');
            return;
        }
        
       setSelected(true);
       setAvailableBalance(availableBalance - basePrice);
       setShowSelected([...showSelected , player])
    }
    return (
        <div>
            <div className="card bg-base-100 w-[350px] h-[528px] shadow-md ">
                <figure className='w-96 h-64'>
                    <img className='h-full w-full object-contain object-top'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <div className="card-actions justify-between">
                        <div className="text-gray-500">{country}</div>
                        <div className="btn">{role}</div>
                    </div>
                    <hr className='my-3 border border-gray-300'></hr>
                    <div className="card-actions justify-between">
                        <div className="font-bold">Rating</div>
                        <div className="text-gray-500">{rating}</div>
                    </div>
                    <div className="card-actions justify-between">
                        <div className="font-bold">Batting Style</div>
                        <div className="text-gray-500">{battingStyle}</div>
                    </div>
                    <div className="card-actions justify-between items-center">
                        <div className="font-bold">Price: {basePrice}$</div>
                        <button disabled={isSelected} onClick={handleSelected} className="text-gray-500 btn btn-outline border-gray-300 ">{isSelected === true ? 'Selected' : 'Choose Player'}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;