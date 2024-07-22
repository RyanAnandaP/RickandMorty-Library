import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./Provider";

const Details = ({ character }) => {
  const { assignCharacterToLocation } = useAppContext();
  const [locationName, setLocationName] = useState('');
  const navigate = useNavigate();

  const handleAssign = () => {
    assignCharacterToLocation(character.id, locationName)
    navigate('/locations');
  };

  return (
    <div id="card-container">
      <div className="card">
        <div className="img">
          <img src={character.image} alt="" />
        </div>

        <div className="text">
          <p className="h3">{character.name} </p>
          <p className="p">Location: {character.location.name}</p>
          <p className="p">Type: {character.type === '' ? 'No Type' : null}</p>
          <p className="p">Species: {character.species}</p>
        </div>
        <div className="input-container">
          <input type="text" value={locationName} onChange={(e) => setLocationName(e.target.value)} />
        </div>
        <div className="button-container">
          <button onClick={handleAssign}>Assign</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
