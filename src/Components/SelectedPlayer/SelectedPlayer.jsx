import React from "react";
// import deleteImg from ""

const SelectedPlayer = ({ purchasedPlayer,removePlayer }) => {
    const handelRemove = () =>{
        removePlayer(purchasedPlayer)
    }
  return (
    <div className="flex border-2 border-gray-300 p-3 justify-between items-center rounded-xl max-w-[1200px] mx-auto ">
      <div className="flex items-center gap-2">
        <img
          className="w-12 h-12 object-cover rounded-xl"
          src={purchasedPlayer.player_img}
          alt=""
        />
        <div>
          <h3 className="font-bold">{purchasedPlayer.name}</h3>
          <p className="text-gray-500">{purchasedPlayer.role_play}</p>
        </div>
      </div>
      <div onClick={ handelRemove}>
        <img src="https://i.ibb.co.com/FkJ01szt/Frame.png" alt="" />
      </div>
    </div>
  );
};

export default SelectedPlayer;
