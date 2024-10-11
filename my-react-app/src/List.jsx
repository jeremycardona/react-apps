import PropTypes from 'prop-types';


function List(props){
    
    const category = props.category;
    const listItem = props.items;
    //fruits.sort((a, b) => a.name.localeCompare(b.name));
    //fruits.sort((a, b) => a.calories - b.calories);

    //const lowCaloriesFruits = fruits.filter(fruit => fruit.calories < 100);
    //const highCaloriesFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = listItem.map((item) => 
    <li key={item.id}>
        {item.name} : &nbsp; <b>{item.calories}</b>
    </li>);

    
    return (
        <>
            <ul>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
            </ul>
        </>
    );
}
List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
        name: PropTypes.string,
        calories: PropTypes.number}))
};

List.defaultProps = {
    category: "Category",
    items: []
};

export default List;