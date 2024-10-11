
function Button(){

    let count = 0;
    const handleClick = (event) => {
        event.target.textContent = "OUCH";
        
    };

    const handleClick2 = (event) => {
        event.target.textContent = "boom";
    };
    return (
        <button onClick={(e) => handleClick(e)}
            onDoubleClick={(e) => handleClick2(e)}
        >Click me</button>
    )
}

export default Button;