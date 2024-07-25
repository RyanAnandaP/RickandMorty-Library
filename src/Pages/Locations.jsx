import React from "react";
import { useAppContext } from "../components/Provider";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Locations = () => {
  const { locations, assignLocation } = useAppContext();
  console.log(locations)

  return (
    <>
      <Header/>
      <div id="character-list">
        <ul className="locations-list">
          {locations.map((locations) => (
            // <button key={locations.id}></button>
              <li key={locations.id}>
                <Link className="location-name" to={`/locations/${locations.id}`}> {locations.name} </Link>
              </li>
            // </button>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Locations;
