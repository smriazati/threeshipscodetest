import { useState } from 'react';
import FilterButton from './Button';

const FilterService = ({ providers, selectedServices, onChange }) => {
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
            <FilterButton onClick={() => setListVisible(!listVisible)} listVisible={listVisible} buttonText="Services Offered" />
            <div
                className={`absolute  z-10 top-30 ${listVisible ? 'block' : 'hidden'} bg-gray-50 rounded px-3 py-3`}
            >
                <button
                    onClick={handleClear}
                    className="text-gray-600 mb-2 w-full text-right"
                >
                    Clear selection
                </button>

                {allServices.map((service) => (
                    <div key={service} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            id={service}
                            value={service}
                            checked={selectedServices.includes(service)}
                            onChange={() => handleServiceChange(event)}
                            className="mr-2  hover:cursor-pointer"
                        />
                        <label htmlFor={service} className="leading-tight  hover:cursor-pointer">{service}</label>
                    </div>
                ))}
            </div>

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

    const sortedServices = allServices.sort((a, b) => a.localeCompare(b));
    return sortedServices;
};


export default FilterService;
