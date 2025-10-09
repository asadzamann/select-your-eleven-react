import React, { use } from 'react';
import Player from './Player';

const AvailablePlayers = ({fetchPlayerData}) => {
    const playersData = use(fetchPlayerData);
   
    console.log(playersData)

    return (
        <div>
            <h1>Available Players</h1>
            <hr className='my-3 border border-gray-300' />
            { playersData.map(player => <Player player={player}></Player>)}
        </div>
       
    );
};

export default AvailablePlayers;