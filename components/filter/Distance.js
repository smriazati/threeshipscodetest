import { useState } from 'react';
import FilterButton from './Button';

const FilterDistance = ({ selectedDistance, onChange }) => {
    const [distance, setDistance] = useState('');

    const handleDistanceChange = (event) => {
        const value = event.target.value;
        setDistance(value);
        onChange(value === 'all' ? null : parseFloat(value));
    };

    const filterButtonText = distance === null || distance === '' || distance === 'all' ? 'Distance' : `${distance} mile${distance !== "1" ? 's' : ''}`

    return (
        <div className='relative'>
            <FilterButton buttonText={filterButtonText} />
            <select value={distance} onChange={handleDistanceChange} className="absolute inset-0 opacity-0 cursor-pointer">
                <option value="all">All</option>
                <option value="5">5 miles</option>
                <option value="10">10 miles</option>
                <option value="50">50 miles</option>
                <option value="100">100 miles</option>
            </select>
        </div>
    );
};

export default FilterDistance;