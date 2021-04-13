import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card } from "./Card";

const Main = () => {

    const [characters, setCharacters] = useState([]);
    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q);
    }

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(
                `https://www.breakingbadapi.com/api/characters?name=${text}`
            );
            setCharacters(result.data);
            console.log(result.data);
            console.log(text);
        }
        fetchItems();
    }, [text])

    return (
        <div className="mx-4">
            <div className='search mb-3'>
                <form>
                    <input type='text' className='form-control' placeholder='Search characters' value={text} onChange={(e) => onChange(e.target.value)} autoFocus />
                </form>
            </div>
            <div className="row">
                <h2>Characters</h2>
                {characters.map(character => (<Card key={character.char_id} name={character.name} image={character.img} char_id={character.char_id} />
                ))}
            </div>
        </div>
    )
}

export default Main