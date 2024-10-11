import React, {useState} from 'react';

function MyComponent() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("John Doe");
    };
    const incrementAge = () => {
        setAge(age + 1);
    }
    const toggleIsEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>set name</button>

            <p>age: {age}</p>
            <button onClick={incrementAge}>increment age</button>

            <p>is employed: {isEmployed ? "yes" : "no"}</p>
            <button onClick={toggleIsEmployedStatus}>toggle status</button>
        </div>
    );

}

export default MyComponent;