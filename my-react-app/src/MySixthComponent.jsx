import React, {useState, useEffect, useRef} from 'react';

function MySixthComponent() {
    const inputRef1 = useRef(0);
    const inputRef2 = useRef(0);
    const inputRef3 = useRef(0);


    useEffect(() => {
        console.log("Component rendered");
    });
    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }
  return (
        <div>
            <button onClick={handleClick1}>click me</button>
            <input type="text" ref={inputRef1}/> 
            <button onClick={handleClick2}>click me</button>
            <input type="text" ref={inputRef2}/> 
            <button onClick={handleClick3}>click me</button>
            <input type="text" ref={inputRef3}/> 
        </div>
       
  );
}

export default MySixthComponent;