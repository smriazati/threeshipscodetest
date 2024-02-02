import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const ServiceFilter = ({ providers, selectedServices, onChange }) => {
    const [listVisible, setListVisible] = useState(false);
    const allServices = getAllServices(providers);

    const handleServiceChange = (event) => {

        const service = event.target.value;
        const updatedServices = event.target.checked
            ? [...selectedServices, service]
            : selectedServices.filter((selected) => selected !== service);
        onChange(updatedServices);
    };

    const handleClear = () => {
        onChange([]);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setListVisible(!listVisible)}
                className="border border-solid rounded border-gray-300 uppercase px-4 py-2 flex items-center font-bold text-gray-700"
            >
                Services Offered
                <span className="ml-2 text-blue-500">
                    <FontAwesomeIcon icon={faAngleDown} className={`h-4 w-4 inline-block transform ${listVisible ? 'rotate-180' : ''}`} />
                </span>
            </button>
            <div
                className={`absolute top-30 ${listVisible ? 'block' : 'hidden'} bg-gray-50 rounded px-3 py-4`}
            >
                {allServices.map((service) => (
                    <div key={service} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id={service}
                            value={service}
                            checked={selectedServices.includes(service)}
                            onChange={() => handleServiceChange(event)}
                            className="mr-2"
                        />
                        <label htmlFor={service} className="leading-tight">{service}</label>
                    </div>
                ))}
            </div>
            {/* <button
                onClick={handleClear}
                className="absolute right-0 top-0 bg-blue-500 text-white px-2 py-1 rounded"
            >
                Clear
            </button> */}
        </div>

    );
};

const getAllServices = (providers) => {
    const allServices = providers.reduce((services, provider) => {
        provider.services.forEach((service) => {
            if (!services.includes(service)) {
                services.push(service);
            }
        });
        return services;
    }, []);
    return allServices;
};

export default ServiceFilter;
