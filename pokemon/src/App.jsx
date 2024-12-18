import React from "react";
import { usePagination } from "./hooks/Pagination";
import Dropdown from "./components/Dropdown";
import PokemonCard from "./components/PokemonCard";
import PaginationControls from "./components/PaginationControl";
import { pokemonData } from "./data";


const App=()=>{
  const {currIndex,next,prev,jumpTo,currItem}=usePagination(pokemonData);

  return (
    <div style={{padding:"20px"}}>
      <h1>Pokemon Go!</h1>
      <Dropdown items={pokemonData} onSelect={(index)=> jumpTo(index)}></Dropdown>
      <PokemonCard pokemon={currItem}/>
      <PaginationControls
        onNext={next}
        onPrev={prev}
        hasNext={currIndex<pokemonData.length-1}
        hasPrev={currIndex>0}/>
    </div>
  );
};

export default App;