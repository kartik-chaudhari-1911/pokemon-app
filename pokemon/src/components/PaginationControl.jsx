import React from "react";
const PaginationControls=({onNext,onPrev,hasNext,hasPrev})=>{

    return (
        <div style={{marginTop:"10px",justifyContent:"center",textAlign:"center"}}>
            <button onClick={onPrev} disabled={!hasPrev}>Prev</button>
            <button onClick={onNext} disabled={!hasNext}>Next</button>
        </div>
    );
};

export default PaginationControls;