import React from 'react';
import PlayerCard from './PlayerCard';

const SelectedPlayers = ({showSelected}) => {

    return (
       <div>
        {showSelected.map(player => <PlayerCard key={player.id} player={player}></PlayerCard>)}
       </div>
    );
};

export default SelectedPlayers;