import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Card } from "./Card";

const Main = () => {
    const[characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {

            const result = await axios(
                `https://www.breakingbadapi.com/api/characters`
            );
            console.log(result.data);
            setCharacters(result.data);
        }
        fetchCharacters();
    },[])

    return (

        <div className="row">
            <h2>Characters</h2>
            { characters.map(character => (<Card key={character.character_id} name={character.name} image={character.img} char_id={character.char_id} />
            ))}            
        </div>
    )
}

export default Main