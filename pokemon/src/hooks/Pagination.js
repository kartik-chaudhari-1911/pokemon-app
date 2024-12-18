import {useState} from 'react';
export const usePagination=(data,initialIndex=0)=>{
    const [currIndex,setcurrindex]=useState(initialIndex);

    const next=()=>{
        if(currIndex<data.length-1) 
            setcurrindex((prev)=>prev+1);
    };

    const prev=()=>{
        if(currIndex>0)
            setcurrindex((prev)=>prev-1);
    };

    const jumpTo=(index)=>{
        if(index>=0 && index<data.length)
            setcurrindex(index);
    };

    return {currIndex,next,prev,jumpTo,currItem: data[currIndex]}
}