// stage 1 - show all the items in the flats array of objects
import React, {useState} from 'react';

const flats = [
    {
        id: 1,
        name: 'Cozy Apartment',
        location: 'Downtown',
        price: '$1500/month',
        available: true,
        image: 'https://example.com/cozy-apartment.jpg',
    },
    {
        id: 2,
        name: 'Modern Loft',
        location: 'Midtown',
        price: '$1800/month',
        available: false,
        image: 'https://example.com/modern-loft.jpg',
    },
    {
        id: 3,
        name: 'Charming Studio',
        location: 'Uptown',
        price: '$1200/month',
        available: true,
        image: 'https://example.com/charming-studio.jpg',
    },
]

function App() {
    const [isFormVisible, setIsFormVisible] = useState(false)

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    }

    const [formInputData, setFormInputData] = useState({
        name: "",
        location: "",
        price: "",
        image: "",
    })
    const [isChecked, setChecked] = useState(false); // Initialize state

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // Update the corresponding field in the state object
        setFormInputData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked); // Update state with checkbox's checked status
    };


    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        // Handle form data, e.g., sending to an API or displaying
        console.log(formInputData);
        console.log("Checkbox is " + (isChecked ? "checked" : "not checked");
    };


    return (
        <div className="App">
            <header>
                <h1>SuperFlats</h1>
            </header>
            <main>

                {isFormVisible ? (
                    <form onSubmit={handleSubmit}>
                        <h2>Add New Flat</h2>
                        <label htmlFor="nameId">Name:</label>
                        <input
                            id="nameId"
                            type="text"
                            placeholder="name"
                            name="name"
                            value={formInputData.name}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="locationId">Location:</label>
                        <input
                            id="locationId"
                            type="text"
                            placeholder="location"
                            name="location"
                            value={formInputData.location}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="priceId">Price:</label>
                        <input
                            id="priceId"
                            type="text"
                            placeholder="price"
                            name="price"
                            value={formInputData.price}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="imageUrlId">Image URL:</label>
                        <input
                            id="imageUrlId"
                            type="text"
                            placeholder="image"
                            name="image"
                            value={formInputData.image}
                            onChange={handleInputChange}
                        />

                        <label htmlFor="availabilityId">Availability:</label>
                        <input
                            id="availabilityId"
                            type="checkbox"
                            name="available"
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />

                        <button type="submit">Add Flat</button>
                    </form>
                ) : <button id="addFlatButton" onClick={toggleFormVisibility}>Add Flat</button>}

                <h2>Flat List</h2>
                <ul>
                {flats.map((flat) => {
                        return (
                            <li key={flat.key}>
                                <h3>{flat.name}</h3>
                                <p>Location: {flat.location}</p>
                                <p>Price: {flat.price}</p>
                                <p>
                                    Availability: {flat.available ? "Available" : "Not Available"}
                                </p>
                                <img src={flat.image} alt={flat.name}/>
                            </li>
                        )
                    })}
                </ul>
            </main>
        </div>
    )
}

export default App;