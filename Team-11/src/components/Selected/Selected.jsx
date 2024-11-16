import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";

const Selected = ({ selectedPlayers, onRemovePlayer, setView }) => {
  console.log(selectedPlayers);
  return (
    <div>
      <div className=" ">
        {selectedPlayers.map((player) => (
          <div key={player.id} className="card bg-base-100 shadow-md p-4 ">
            <div className="flex justify-between items-center gap-3">
              <div className="flex items-center gap-5">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={player.image}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{player.name}</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
                <p>Price:-${player.price}</p>
              </div>
              <button
                onClick={() => onRemovePlayer(player.id)}
                className="btn btn-danger mt-4 text-3xl text-red-400"
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => setView("available")}
        className="btn  bg-[rgb(231,254,41)]"
      >
        Add More Players
      </button>
    </div>
  );
};

Selected.propTypes = {
  selectedPlayers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemovePlayer: PropTypes.func.isRequired,
};
export default Selected;
