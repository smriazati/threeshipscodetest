import React from 'react';

const ServiceProvider = ({ provider }) => {
    const isNearby = provider.distance < 5;
    const isPopular = provider.review_count >= 100;

    return (
        <div>
            <header>
                <h2>{provider.name}</h2>
                <p>{provider.distance}</p>
                <p>{provider.address}</p>
                <p>{provider.review_score} out of 5</p>
            </header>

            {isNearby && <span>Nearby</span>}
            {isPopular && <span>Popular</span>}

            <h3>Services:</h3>
            <ul>
                {provider.services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>

            <h3>Experiences:</h3>
            <figure>
                <blockquote>
                    “We could not be happier with our HVAC system. Lorem ipsum dolor sit amet consectetur. Dictum fusce dignissim non in magna id. Elementum enim leo aliquam gravida phasellus eget nulla.”
                </blockquote>
                <figcaption>- Shane D.</figcaption>
            </figure>
            <button>Get Quote</button>
            <button>See More</button>
        </div>
    );
};

export default ServiceProvider;