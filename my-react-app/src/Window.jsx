import React, {useState, useEffect} from 'react';

function Window(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {

        window.addEventListener('resize', handleResize);
        console.log("event listener added");

        return () => {
            window.removeEventListener('resize', handleResize);
            console.log("event listener removed");
        }
    }, []);
    
    useEffect(() => {
        document.title = `Width: ${width} Height: ${height}`;

    }, [width, height]);
    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    return (
        <div>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </div>
    );
}

export default Window;