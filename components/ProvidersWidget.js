import { useState } from 'react';
import ProviderCardList from '../components/provider/CardList';
import FilterStarRating from '../components/filter/StarRating';
import FilterService from '../components/filter/Service';
import FilterDistance from '../components/filter/Distance';

const ProviderWidget = ({ providers }) => {
    const [selectedStarCount, setSelectedStarCount] = useState(null);
    const [selectedServices, setSelectedServices] = useState([]);
    const [selectedDistance, setSelectedDistance] = useState(null);

    const handleStarCountChange = (event) => {
        const value = event.target?.value;
        setSelectedStarCount(value === 'all' || value === null ? null : parseFloat(value));
    };

    const handleDistanceChange = (distance) => {
        setSelectedDistance(distance);
    };

    const handleServiceChange = (selectedServices) => {
        setSelectedServices(selectedServices);
    };

    const resetFilters = () => {
        setSelectedStarCount(null);
        setSelectedServices([]);
        setSelectedDistance(null);
    };

    const filteredProviders = providers
        .filter((provider) => !selectedStarCount || provider.review_score >= selectedStarCount)
        .filter((provider) => selectedServices.length === 0 || selectedServices.every((service) => provider.services.includes(service)))
        .filter((provider) => !selectedDistance || provider.distance <= selectedDistance);

    return (
        <div>
            <div className="mt-4 mb-8">
                <div className="flex flex-wrap justify-end gap-y-4 space-x-4 px-3">
                    <FilterStarRating selectedStarCount={selectedStarCount} onChange={handleStarCountChange} />
                    <FilterService providers={providers} selectedServices={selectedServices} onChange={handleServiceChange} />
                    <FilterDistance onChange={handleDistanceChange} />
                </div>
            </div>

            {filteredProviders && filteredProviders.length > 0 ? (
                <div>
                    <div className="my-4">
                        <p className='text-center text-gray-500 mb-4'>Showing {filteredProviders.length} provider{filteredProviders.length !== 1 ? 's' : ''}</p>
                        <ProviderCardList providers={filteredProviders} />
                    </div>
                </div>
            ) : (
                <div className='flex flex-col justify-center items-center'>
                    <p className='mb-2'>No providers available</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded uppercase" onClick={resetFilters}>
                        Reset filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProviderWidget;
