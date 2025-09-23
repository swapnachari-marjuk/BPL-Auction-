import React, { use } from "react";
import AvailablePlayer from "../AvailablePlayer/AvailablePlayer";

const AvailablePlayers = ({
  promisePlayers,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
  selected,
  setSelected
}) => {
  const players = use(promisePlayers);
//   console.log(players);
  return (
    <div className="max-w-[1200px] mt-5 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {players.map((player) => (
        <AvailablePlayer
          player={player}
          setAvailableBalance={setAvailableBalance}
          availableBalance={availableBalance}
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
          selected={selected}
          setSelected={setSelected}
        ></AvailablePlayer>
      ))}
    </div>
  );
};

export default AvailablePlayers;
