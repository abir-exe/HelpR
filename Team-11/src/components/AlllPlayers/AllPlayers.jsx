import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { data } from "autoprefixer";
import SinglePlayer from "../SinglePlayer/SinglePlayer";
import Selected from "../Selected/Selected";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllPlayers = ({ coins, setCoins }) => {
  const [players, setPlayers] = useState([]);
  const [view, setView] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  //   const [coins, setCoins] = useState(1000000);
  console.log(selectedPlayers);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const simpleToast = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  };

  // function to handle selection
  const handleSelectPlayer = (player) => {
    if (selectedPlayers.some((p) => p.id === player.id)) {
      toast.error("The Player is Already Selected", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      return;
    }
    if (selectedPlayers.length < 6) {
      if (coins >= player.price) {
        setSelectedPlayers([...selectedPlayers, player]);
        setCoins(coins - player.price);
        simpleToast(`You have selected ${player.name} for $${player.price}`);
      }

      if (coins < player.price) {
        toast.error("Insufficient balance to buy this player.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        });
      }
      if (!selectedPlayers.some((p) => p.id === player.id)) {
        setSelectedPlayers([...selectedPlayers, player]);
      }
    } else {
      simpleToast("You have reached the player add limit.");
    }
  };

  // Function to handle player removal
  const handleRemovePlayer = (id) => {
    const playerToRemove = selectedPlayers.find((player) => player.id === id);
    if (playerToRemove) {
      setCoins(coins + playerToRemove.price);
      setSelectedPlayers(selectedPlayers.filter((player) => player.id !== id));
    }
  };

  return (
    <div className="">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="w-11/12 mx-auto">
        <div className="py-10 flex justify-between">
          {view === "available" ? (
            <h2 className="text-2xl lg:text-4xl">Available Players</h2>
          ) : (
            <h2 className="text-2xl lg:text-4xl">
              Selected Players ({selectedPlayers.length}/6)
            </h2>
          )}

          <div>
            <button
              onClick={() => setView("available")}
              className={`btn ${
                view === "available" ? "bg-[rgb(231,254,41)]" : "btn-inactive"
              }`}
            >
              Available
            </button>
            <button
              onClick={() => setView("selected")}
              className={`btn ${
                view === "selected" ? "bg-[rgb(231,254,41)]" : "btn-inactive"
              }`}
            >
              Selected <span>{selectedPlayers.length}</span>
            </button>
          </div>
        </div>
        {/* conditionally render based on view state  */}
        {view === "available" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {players.map((player) => (
              <SinglePlayer
                key={player.id}
                player={player}
                onSelectPlayer={handleSelectPlayer}
              ></SinglePlayer>
            ))}
          </div>
        ) : (
          <Selected
            setView={setView}
            selectedPlayers={selectedPlayers}
            onRemovePlayer={handleRemovePlayer}
          /> // Render Selected component when "selected" is active
        )}
      </div>
    </div>
  );
};

export default AllPlayers;
