import React, {useState} from 'react';

function MySecondComponent() {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("Cash");
    const [shipping, setShipping] = useState("Free");
    
    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }
    function handleCommentChange(event) {
        setComment(event.target.value);
    }
    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }
    function handleShippingChange(event) {
        setShipping(event.target.value);
    }
    return (
        <div>
                <input type="text" value={name} onChange={handleNameChange} />
                <p>Name: {name}</p>

                <input type="number" value={quantity} onChange={handleQuantityChange} />
                <p>Quantity: {quantity}</p>

                <textarea value={comment} onChange={handleCommentChange} />
                <p>Comment: {comment}</p>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value="Cash">Cash</option>
                    <option value="Credit Card">Credit Card</option>
                    <option value="Paypal">Paypal</option>
                </select>
                <p>Payment: {payment}</p>

                <input type="radio" value="Free" checked={shipping === "Free"} onChange={handleShippingChange} />
                <label>Free</label>
                <input type="radio" value="Express" checked={shipping === "Express"} onChange={handleShippingChange} />
                <label>Express</label>
                <p>Shipping: {shipping}</p>
            </div>
    );

}

export default MySecondComponent;