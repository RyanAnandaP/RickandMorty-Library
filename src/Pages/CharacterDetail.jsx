import React, { useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";
import Details from "../components/Details";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

const client = new GraphQLClient("https://rickandmortyapi.com/graphql");

const CharacterDetail = () => {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCharacterDetails = async () => {
      const characterDetailsQuery = gql`
            query {
                charactersByIds(ids: ${id}){
                    id,
                    name,
                    gender,
                    image,
                    species,
                    location{
                        name
                    },
                    type,
                }
            }
        `;

      try {
        const data = await client.request(characterDetailsQuery);
        setCharacter(data.charactersByIds[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacterDetails();
  }, [id]);

  return (
    <>
      <Header />
      <div>{character && <Details character={character} />}</div>
    </>
  );
};

export default CharacterDetail;
