import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faFire, faCheck } from '@fortawesome/free-solid-svg-icons';

const ServiceProvider = ({ provider }) => {
    const isNearby = provider.distance < 5;
    const isPopular = provider.review_count >= 100;

    return (
        <div className="border border-solid border-gray-300 rounded p-4 mx-auto max-w-[960px]">
            <header className="mb-8 flex justify-between items-start">
                <div>
                    <img src={`https://d126ytvel6227q.cloudfront.net/logos/${provider.slug}.jpg`} alt={`Logo for ${provider.name}`} className="mb-4 max-w-[250px]" />
                    <h2 className="text-3xl font-bold mb-2">{provider.name}</h2>
                    <p className="text-gray-500 font-serif mb-2">{provider.address}</p>
                    <div className="flex items-center space-x-2">
                        {isNearby && (
                            <span className="text-green-500 flex items-center">
                                <FontAwesomeIcon icon={faLocationPin} className="mr-1" /> Nearby
                            </span>
                        )}
                        {isPopular && (
                            <span className="text-green-500 flex items-center">
                                <FontAwesomeIcon icon={faFire} className="mr-1" /> Popular
                            </span>
                        )}
                    </div>
                </div>
                <button className="ml-auto bg-blue-700 text-white px-12 py-2 font-bold text-xl whitespace-nowrap">Get Quote</button>
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
                <blockquote className="text-gray-600 italic serif">
                    “We could not be happier with our HVAC system. Lorem ipsum dolor sit amet consectetur. Dictum fusce dignissim non in magna id. Elementum enim leo aliquam gravida phasellus eget nulla.”
                </blockquote>
                <figcaption className="text-gray-600 font-serif text-right">- Shane D.</figcaption>
            </figure>
        </div>
    );
};

export default ServiceProvider;
