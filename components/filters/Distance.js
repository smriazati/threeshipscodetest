import { useState } from 'react';

const DistanceFilter = ({ selectedDistance, onChange }) => {
    const [distance, setDistance] = useState('');

    const handleDistanceChange = (event) => {
        const value = event.target.value;
        setDistance(value);
        onChange(value === 'all' ? null : parseFloat(value));
    };

    const handleClear = () => {
        setDistance('');
        onChange(null);
    };

    return (
        <div>
            <label>Filter by Distance (miles):</label>
            <select value={distance} onChange={handleDistanceChange}>
                <option value="all">All</option>
                <option value="1">1 mile</option>
                <option value="5">5 miles</option>
                <option value="10">10 miles</option>
            </select>
            <button onClick={handleClear} className="bg-red text-white px-4 py-2 mt-4">
                Clear
            </button>
        </div>
    );
};

export default DistanceFilter;
