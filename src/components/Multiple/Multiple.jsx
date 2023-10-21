import React, { useState } from "react";
import "./multiple.css";

//NEW PRODUCT REGISTRATION FORM
export default function Multiple() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",    
        category: "",
        quantity: 0,
        price: 0,
    });
    
    // handle input change
    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    // handle category selection 
    const [selectedOption, setSelectedOption] = useState('eletronics');  

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    // click on submit button shows an alert with all information submitted
    function handleSubmit() {
        alert(
            `Name: ${formData.name}, 
            Description: ${formData.description},       
            Category: ${selectedOption},
            Quantity: ${formData.quantity}, 
            Price: ${formData.price},`
        );
    };

    // click on cancel button resets the page 
    function handleCancel() {
        setFormData({
            name: '',
            description: '',
            quantity: 0,
            price: 0,
        });
        setSelectedOption('');
    }

    //Form display
    return (
        <form onSubmit={handleSubmit} className="multiple">

            {/*Name*/}
            <label className="multiple__text" htmlFor="name">
                Name:
            </label>
            <input
                type="text"
                id="name"
                className="multiple__input"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />

            {/*Description*/}
            <label className="multiple__text" htmlFor="description">
                Description: 
            </label>
            <input
                type="description"
                id="description"
                className="multiple__input"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />

            {/*Category*/}
            <label className="dropdown" htmlFor="category">
                Category:
            </label> 
            <select value={selectedOption} onChange={handleDropdownChange}>
                <option 
                    id="electronics"  
                    name="electronics"      
                    value="electronics"
                    > Electronics
                </option>
                <option  
                    id="clothing"     
                    name="clothing"          
                    value="clothing"
                    > Clothing
                </option>
                <option  
                    id="groceries"     
                    name="groceries"          
                    value="groceries"
                    > Groceries
                </option>
                <option 
                    id="home" 
                    name="home"               
                    value="home"
                    > Home 
                </option>
            </select>        

            {/*Quantity*/}
            <label className="multiple__text" htmlFor="quantity">
                Quantity:
            </label>
            <input
                type="number"
                id="quantity"
                className="multiple__input"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
            />

            {/*Price*/}
            <label className="multiple__text" htmlFor="price">
                Price:
            </label>
            <input
                type="text"
                id="price"
                className="multiple__input"
                name="price"
                value={formData.price}
                onChange={handleChange}
            />

            {/*Submit button*/}
            <button className="multiple__button" type="submit" onClick={handleSubmit}>
                Submit
            </button>

            {/*Cancel button*/}
            <button className="multiple__button" type="cancel" onClick={handleCancel}>
                Cancel
            </button>
        </form>
    )
}