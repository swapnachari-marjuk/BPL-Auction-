import React from "react";
import SelectedPlayer from "../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ purchasedPlayers,removePlayer }) => {
  // console.log(purchasedPlayers)
  return (
    <div className="space-y-3">
      {purchasedPlayers.map((purchasedPlayer) => (
        <SelectedPlayer purchasedPlayer={purchasedPlayer} removePlayer={removePlayer}></SelectedPlayer>
      ))}
    </div>
  );
};

export default SelectedPlayers;
