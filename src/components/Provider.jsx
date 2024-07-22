import React, { createContext, useState, useContext, useEffect} from 'react';
import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient("https://rickandmortyapi.com/graphql");

const query = gql`
  query {
    characters {
        info {
            next
        }
        results {
            id
            name
            image
        }
    }
  }
`;

const getLocalStorage = (key) => {
    const stored = localStorage.getItem(key);
    if(stored) {
        return JSON.parse(stored);
    }

    return [];
}

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [locations, setLocations] = useState(() => getLocalStorage('locations'));
    const [assignLocation, setAssignLocation] = useState(() => getLocalStorage('assignments'));
  
    const assignCharacterToLocation = (id, locationName) => {
        let location = locations.find(loc => loc.name === locationName);
        if(!location) {
            const newLocation = { id: locations.length + 1, name: locationName};
            setLocations(prevLocations => [...prevLocations, newLocation]);
            location = newLocation;
        }
        setAssignLocation(prevAssignments => [...prevAssignments, { id, locationID: location.id }]);
    }

    useEffect(() => {
        localStorage.setItem('locations', JSON.stringify(locations));
    }, [locations]);

    useEffect(() => {
        localStorage.setItem('assignments', JSON.stringify(assignLocation))
    }, [assignLocation])

    useEffect(() => {
        const fetchCharacters = async () => {
          try {
            const data = await client.request(query);
            const charactersData = data.characters.results;
            setCharacters(charactersData);
            setPage(data.characters.info.next ? parseInt(data.characters.info.next) : null);
          } catch (error) {
            console.log(error);
          }
        };
        fetchCharacters();
      }, []);
    
      const loadMore = async (pages) => {
        const queryPage = gql`
            query {
                characters(page: ${pages}){
                    info {
                        next
                    },
                    results {
                        id
                        name
                        image
                    }
                }
            }
        `;

        try {
            const data = await client.request(queryPage);
            const charactersData = data.characters.results;
            setCharacters(prevCharacters => [...prevCharacters, ...charactersData]);
            setPage(data.characters.info.next ? parseInt(data.characters.info.next) : null);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <AppContext.Provider value={{ characters, locations, assignLocation, assignCharacterToLocation, loadMore, page }}>
      {children}
    </AppContext.Provider>
  );
};
