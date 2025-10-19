import React from 'react';
import PlayerCard from './PlayerCard';

const SelectedPlayers = ({showSelected, removePlayer}) => {
    
    return (
       <div>
        {showSelected.map(player => <PlayerCard key={player.id} removePlayer={removePlayer} player={player}></PlayerCard>)}
       </div>
    );
};

export default SelectedPlayers;