import React, { useState, useEffect } from 'react';
import axios from "axios";

const Character = ({ match }) => {
    // console.log(match);

    const [character, setItem] = useState([]);
    // console.log(character);
    useEffect(() => {
        fetchItem();
    }, [])

    const fetchItem = async () => {
        const result = await axios(
            `https://www.breakingbadapi.com/api/characters/${match.params.id}`
        );
        // console.log(result.data);
        setItem(...result.data);
    }


    return (
        <div className="row">

            <div className="col-6">
                <p>
                    <img src={character.img} height="700" alt={character.name} />
                </p>
            </div>
            <div className="col-6">
                <h1 className="mb-4">Name: {character.name}</h1>
                <hr></hr>
                <h3>Birthday: {character.birthday}</h3>
                <hr></hr>
                <h3>Occupation: {(character.occupation ?? []).map((item, index) => {
                    if (character.occupation.length - 1 == index) {
                        return item;
                    }
                    return item + ", ";
                })}</h3>

                <hr></hr>
                <h3>Status: {character.status}</h3>
                <hr></hr>
                <h3>Nickname: {character.nickname}</h3>
                <hr></hr>
            </div>
        </div>
    )
}

export default Character