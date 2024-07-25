import React from 'react'
import { useParams } from 'react-router-dom';
import { useAppContext } from "../components/Provider";
import Header from '../components/Header';

const LocationDetail = () => {
    const { locationId } = useParams();
    const { locations, characters, assignLocation } = useAppContext();

    const location = locations.find(loc => loc.id === parseInt(locationId));
    const assignmentChar = assignLocation.filter(assign => assign.locationID === parseInt(locationId)).map(assign => characters.find(char => char.id === assign.id))
    
  return (
    <>
    <Header/>
        <div id='location-detail-container'>
            <h2>{location.name}</h2>
            <div id="people">
                <ol>
                    {assignmentChar.map((char) => (
                        <li key={char.id}>{char.name}</li>
                    ))}
                </ol>
            </div>
        </div>
    </>
  )
}

export default LocationDetail