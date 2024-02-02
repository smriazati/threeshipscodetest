const ServiceFilter = ({ providers, selectedServices, onChange }) => {
    const allServices = getAllServices(providers);

    const handleServiceChange = (event) => {
        const service = event.target.value;
        const updatedServices = event.target.checked
            ? [...selectedServices, service]
            : selectedServices.filter((selected) => selected !== service);
        console.log('ServiceFilter - handleServiceChange - Updated Services:', updatedServices);
        onChange(updatedServices);
    };

    const handleClear = () => {
        onChange([]);
    };

    return (
        <div>
            <label>Filter by Services:</label>
            {allServices.map((service) => (
                <div key={service}>
                    <input
                        type="checkbox"
                        id={service}
                        value={service}
                        checked={selectedServices.includes(service)}
                        onChange={handleServiceChange}
                    />
                    <label htmlFor={service}>{service}</label>
                </div>
            ))}
            <button onClick={handleClear}>Clear</button>
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
