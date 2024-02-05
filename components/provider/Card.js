import { useState } from 'react';
import ProviderStarRating from './StarRating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faFire, faCheck, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const ProviderCard = ({ provider }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const isNearby = provider.distance < 5;
    const isPopular = provider.review_count >= 100;

    return (
        <div className="border border-solid border-gray-300 rounded p-4 mx-auto max-w-[800px]">
            <header className="mb-8">
                <div className="flex sm:flex-wrap justify-between items-start">
                    <img
                        src={`https://d126ytvel6227q.cloudfront.net/logos/${provider.slug}.jpg`}
                        alt={`Logo for ${provider.name}`}
                        className="mb-4 max-w-[80px] md:max-w-[150px]"
                    />
                    <button className="ml-auto bg-blue-700 text-white px-2 sm:px-12 py-2 font-bold text-xl whitespace-nowrap">Get Quote</button>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-2">{provider.name}</h2>
                    <div className="flex flex-wrap space-x-2 gap-y-2 mb-2">
                        <div className='flex flex-wrap space-x-1 gap-y-2 relative'>
                            <ProviderStarRating rating={provider.review_score}></ProviderStarRating>
                            <span className="ml-2 font-bold">{parseFloat(provider.review_score).toFixed(1)} / 5</span>
                            <div
                                className="text-xs text-gray-500 cursor-pointer relative"
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}
                            >
                                <FontAwesomeIcon icon={faCircleInfo} />
                                {showTooltip && (
                                    <div className="absolute top-0 left-full ml-2 p-2 bg-white border border-gray-300 rounded min-w-[250px]">
                                        <p className="font-serif italic mb-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies elit et ultricies aliquet.
                                        </p>
                                        <p className="font-bold text-gray-800 uppercase">
                                            Better than <span className="text-green-500">90%</span> of companies
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <span className="text-gray-500 font-serif">|</span>
                        <p className="text-gray-500 font-serif">{provider.address}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        {isNearby && (
                            <span className="flex items-center font-serif">
                                <span className="text-green-500 mr-2"><FontAwesomeIcon icon={faLocationPin} /> </span>
                                Nearby
                            </span>
                        )}
                        {isPopular && (
                            <span className="flex items-center font-serif">
                                <span className="text-green-500 mr-2"><FontAwesomeIcon icon={faFire} /> </span>
                                Popular
                            </span>
                        )}
                    </div>
                </div>
            </header>


            <h3 className="text-lg text-gray-500 uppercase font-semibold mb-2">Services Offered</h3>
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8">
                {provider.services.map((service, index) => (
                    <li key={index} className="flex items-center">
                        <span className='text-green-500'>                        <FontAwesomeIcon icon={faCheck} className="mr-2" />
                        </span>
                        <span className="font-serif">{service}</span>
                    </li>
                ))}
            </ul>

            <h3 className="text-lg text-gray-500 uppercase font-semibold mb-2">Experiences</h3>
            <figure className="mb-4 bg-gray-100 p-4 rounded">
                <blockquote className="text-gray-600 italic font-serif">
                    “We could not be happier with our HVAC system. Lorem ipsum dolor sit amet consectetur. Dictum fusce dignissim non in magna id. Elementum enim leo aliquam gravida phasellus eget nulla.”
                </blockquote>
                <figcaption className="text-gray-600 font-serif text-right">- Shane D.</figcaption>
            </figure>
        </div>
    );
};

export default ProviderCard;
