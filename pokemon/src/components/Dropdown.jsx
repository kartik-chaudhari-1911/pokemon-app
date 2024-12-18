import React from "react";

const Dropdown=({items,onSelect})=>{

    return (
        <div style={{marginBottom:"5px", padding:"10px"}}>
            <select onChange={(e)=>onSelect(Number(e.target.value))}>
                {items.map((item)=>(
                    <option key={item.id} value={item.id-1}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>    
    );
};

export default Dropdown;