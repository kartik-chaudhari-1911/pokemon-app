import React from "react";

const PokemonCard=({pokemon})=>{

    return (
        <div style={{border: "1px solid grey", padding: "20px",textAlign:"center"}}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.image} alt={pokemon.name} style={{width:"220px"}}/>
            <p>{pokemon.description}</p>
        </div>
    );
};

export default PokemonCard;