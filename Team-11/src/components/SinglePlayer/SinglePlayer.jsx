import PropTypes from "prop-types";
import { FaFlagUsa } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";

const SinglePlayer = ({ player, onSelectPlayer }) => {
  const {
    id,
    name,
    image,
    Flag_img,
    player_type,
    price,
    playing_style,
    country,
  } = player;
  // console.log(selectedPlayers);
  return (
    <div className="p-10 mx-auto w-full">
      <div className="card bg-base-100 w-full shadow-xl">
        <figure>
          <img
            id="player-img"
            className="w-full h-[250px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex items-center text-2xl gap-2">
            <FaUserAlt />
            <h2 className="card-title mt-2">{name}</h2>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col lg:flex-row gap-2 items-center">
              {" "}
              <FaFlagUsa />
              {country}
            </div>
            <p className="font-bold text-xl btn  p-2"> {player_type}</p>
          </div>
          <div>
            <p className="font-bold text-md">
              Playing Style: <span>{playing_style}</span>
            </p>
          </div>

          <div className="card-actions justify-between items-center">
            <p className="font-bold text-xl">Price: ${price}</p>
            <button onClick={() => onSelectPlayer(player)} className="btn  ">
              Choose player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePlayer.propTypes = {
  singlePlayer: PropTypes.object.isRequired,
  onSelectPlayer: PropTypes.func.isRequired,
};

export default SinglePlayer;
