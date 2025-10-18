import React, { use } from 'react';
import Player from './Player';

const AvailablePlayers = ({fetchPlayerData , setAvailableBalance, availableBalance, setShowSelected}) => {
    const playersData = use(fetchPlayerData);


    return (
        <div className='max-w-[1200px] mx-auto'>
           
            <hr className='my-3 border border-gray-300' />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        { playersData.map(player => <Player setShowSelected={setShowSelected} availableBalance={availableBalance} setAvailableBalance={setAvailableBalance} key={player.id} player={player}></Player>)}
            </div>
            
        </div>
       
    );
};

export default AvailablePlayers;