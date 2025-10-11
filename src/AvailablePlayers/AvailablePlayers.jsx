import React, { use } from 'react';
import Player from './Player';

const AvailablePlayers = ({fetchPlayerData}) => {
    const playersData = use(fetchPlayerData);
   
    console.log(playersData)

    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-2xl font-bold'>Available Players</h1>
            <hr className='my-3 border border-gray-300' />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        { playersData.map(player => <Player player={player}></Player>)}
            </div>
            
        </div>
       
    );
};

export default AvailablePlayers;