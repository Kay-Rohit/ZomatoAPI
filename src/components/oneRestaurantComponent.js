import React from 'react';
import '../CSS/oneRestaurantComponent.css';

const Restaurant = (props)=>{
    let { name, featured_image, location, timings, cuisines, user_rating, phone_numbers } = props.details;
    return (
        <div className="restaurant-card">
            <div className="restaurant-logo-container">
                <img className="restaurant-logo" src={featured_image} alt="restaurant-logo"></img>
                <div className="name">{name}</div>
            </div>
            <div className="restaurant-details">
                <div className="info-row">
                    <div className="field-name">Address</div>
                    <div className="field-value">{location.address}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">Cuisines</div>
                    <div className="field-value">{cuisines}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">Rating</div>
                    <div className="rating">{user_rating.aggregate_rating}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">Timings</div>
                    <div className="field-value">{timings}</div>
                </div>
                <div className="info-row">
                    <div className="field-name">Contact no</div>
                    <div className="field-value">{phone_numbers}</div>
                </div>
            </div>
            <div>
            <button class="menu">View Menu</button>
            </div>
        </div>
    );
}
export default Restaurant;