import React, {useState} from 'react';

function MyFourthComponent() {
    const [foods, setFoods] = useState(["Apple", "Banana", "Cherry", "Date", "Elderberry"]);

    function handleAddFood() {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index));
    }


    return (
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder='enter food name'/>
            <button onClick={handleAddFood}>add food</button>
        </div>
    );
}

export default MyFourthComponent;