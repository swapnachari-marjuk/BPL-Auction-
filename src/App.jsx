import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import Navbar from "./Components/Navbar/Navbar";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import { ToastContainer } from 'react-toastify';

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const promisePlayers = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(25000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  const removePlayer = (p) =>{
    const filteredData = purchasedPlayers.filter(purchasedPlayer => purchasedPlayer.name !== p.name)
    setPurchasedPlayers(filteredData)
    setAvailableBalance(availableBalance+ parseInt(p.price.replace(/[৳,]/g, "")))
  }
  console.log()
  return (
    <>
      <Navbar availableBalance={availableBalance}></Navbar>
      <div className="flex justify-between items-center max-w-[1200px] mx-auto my-3">
        <h3 className="text-xl font-bold">
          {toggle
            ? "Available Players"
            : `Selected Players (6/${purchasedPlayers.length})`}
        </h3>
        <div className="">
          <button
            onClick={() => setToggle(true)}
            className={`${
              toggle && "bg-[#E7FE29]"
            } px-3 py-2 border border-gray-300 border-r-0 rounded-xl rounded-r-none`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`${
              toggle || "bg-[#E7FE29]"
            } px-3 py-2 border border-gray-300 border-l-0 rounded-xl rounded-l-none`}
          >
            Selected({purchasedPlayers.length})
          </button>
        </div>
      </div>
      {toggle ? (
        <Suspense
          fallback={
            <div className="flex w-52 flex-col gap-4 max-w-[1200px] mx-auto">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          }
        >
          <AvailablePlayers
            promisePlayers={promisePlayers}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers purchasedPlayers={purchasedPlayers} removePlayer={removePlayer}></SelectedPlayers>
      )}
      <ToastContainer/>
    </>
  );
}

export default App;
