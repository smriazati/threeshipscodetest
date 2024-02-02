// pages/index.js (or your main component)
import { useState } from 'react';
import ProviderList from '../components/ProviderList';
import StarCountFilter from '../components/filters/StarCount';
import ServiceFilter from '../components/filters/Service';
import DistanceFilter from '../components/filters/Distance';

const ProviderSearch = ({ providers }) => {
    const [selectedStarCount, setSelectedStarCount] = useState(null);
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedDistance, setSelectedDistance] = useState(null);

    const handleStarCountChange = (event) => {
        const value = event.target.value;
        setSelectedStarCount(value === 'all' ? null : parseFloat(value));
    };

    const handleDistanceChange = (distance) => {
        setSelectedDistance(distance);
    };

    const handleServiceChange = (selectedServices) => {
        setSelectedServices(selectedServices);
    };

    const filteredProviders = providers
        .filter((provider) => !selectedStarCount || provider.review_score >= selectedStarCount)
        .filter((provider) => selectedServices.length === 0 || selectedServices.every((service) => provider.services.includes(service)))
        .filter((provider) => !selectedDistance || provider.distance <= selectedDistance);
    return (
        <div>
            <div className="filters">
                <StarCountFilter selectedStarCount={selectedStarCount} onChange={handleStarCountChange} />
                <ServiceFilter providers={providers} selectedServices={selectedServices} onChange={handleServiceChange} />
                <DistanceFilter onChange={handleDistanceChange} />
            </div>
            <ProviderList providers={filteredProviders} />
        </div>
    );
};

export default ProviderSearch;
