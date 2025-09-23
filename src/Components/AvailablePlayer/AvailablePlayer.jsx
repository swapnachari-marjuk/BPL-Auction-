import React, { useState } from "react";
import userImg from "../../assets/Group.png";
import flagImg from "../../assets/report-1.png";
import { toast } from "react-toastify";

const AvailablePlayer = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const [selected, setSelected] = useState(false);
  const handleBalance = (playerData) => {
    // console.log(playerData)
    const playerPrice = parseInt(playerData.price.replace(/[৳,]/g, ""));
    if (playerPrice > availableBalance) {
      toast("Insufficient balance to purchase this player.");
      return;
    }
    if (purchasedPlayers.length === 6){
        toast("You can’t select more than 6 players!")
        return
    }
    setAvailableBalance(availableBalance - playerPrice);
    setPurchasedPlayers([...purchasedPlayers, playerData]);
    setSelected(true);
  };
  //   console.log(player);
  return (
    <div className="card bg-base-100 shadow-sm p-6 space-y-4">
      <figure>
        <img
          className="w-[180px] h-[180px] object-contain"
          src={player.player_img}
          alt="Player"
        />
      </figure>
      <div className="">
        <div className="flex items-center gap-2">
          <img className="w-5 h-5" src={userImg} alt="" />
          <h3 className="text-xl font-medium">{player.name} </h3>
        </div>
        <div className="flex justify-between items-center border-b-2 border-gray-300 pb-3">
          <div className="flex gap-2 items-center">
            <img className="w-4 h-4" src={flagImg} alt="" />
            <p className="text-gray-500">{player.player_country}</p>
          </div>
          <h4 className="text-gray-500 btn">{player.role_play} </h4>
        </div>
        <div className="flex justify-between items-center font-bold pt-2">
          <h3>Rating</h3>
          <h3>{player.rating}</h3>
        </div>
        <h4 className="font-medium">{player.batting_style} </h4>
        <div className="flex justify-between items-center">
          <h3 className="space-x-1 font-bold">
            <span>Price</span>
            <span>{player.price}</span>
          </h3>
          <button
            disabled={selected}
            onClick={() => handleBalance(player)}
            className="btn"
          >
            {
                selected? "Selected": "Choose Player"
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayer;
