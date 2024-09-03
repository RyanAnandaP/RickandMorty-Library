import React from "react";
import { useAppContext } from "../components/Provider";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import NoDataRick from "../assets/noDataRick.png";

const Locations = () => {
  const { locations } = useAppContext();
  console.log(locations);

  return (
    <>
      <Header />
      <div id="character-list">
        {locations && locations.length > 0 ? (
          <ul className="locations-list">
            {locations.map((location) => (
              <li key={location.id}>
                <Link
                  className="location-name"
                  to={`/locations/${location.id}`}
                >
                  {location.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <div className="noDataImgContainer">
              <img src={NoDataRick} className="noDataImg slide-up-fade-in" />
            </div>
            <Link className="slide-up-fade-in" to={"/"}>
              <h1 className="no-location-data slide-up-fade-in">
                Sorry, there are no data yet!
              </h1>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Locations;
