import React, {useState, useEffect} from 'react';

function Effect(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("red");

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
        return () => {
            document.title = "React App";
        }
    }, [count, color]);
    function addCount(){
        setCount(c => c + 1);
    }
    function subtractCount(){
        setCount(c => c - 1);
    }
    function changeColor(){
        setColor(c => c === "red" ? "blue" : "red");
    }
    return (
        <div>
            <p style={{color: color}}>count: {count}</p>
            <button onClick={addCount}>add</button>
            <button onClick={subtractCount}>subtract</button>
            <button onClick={changeColor}>change color</button>
        </div>
    );
}

export default Effect;