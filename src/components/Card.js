import React from 'react'
import { Link } from "react-router-dom";
 
export const Card = ({ name, image, char_id }) => {
    return (
        <div className="col-4">
            <div className="card my-3">
                <img className="card-img-top" src={image} alt={name} height="600" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">
                        <Link to={`/${char_id}`}>More</Link>
                    </p>
                </div>

            </div>
            
        </div>
    )
}