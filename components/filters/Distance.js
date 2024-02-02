import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

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
        <div className='relative'>
            <button
                className="border border-solid rounded border-gray-300 uppercase px-4 py-2 flex items-center font-bold text-gray-700"
            >
                {distance === null || distance === 'all' ? 'Distance' : `${distance} miles`}
                <span className="ml-2 text-blue-500">
                    <FontAwesomeIcon icon={faAngleDown} className={`h-4 w-4 inline-block transform`} />
                </span>
            </button>
            <select value={distance} onChange={handleDistanceChange} className="absolute inset-0 opacity-0 cursor-pointer">
                <option value="all">All</option>
                <option value="1">1 mile</option>
                <option value="5">5 miles</option>
                <option value="10">10 miles</option>
            </select>
            {/* <button onClick={handleClear} className="bg-red text-white px-4 py-2 mt-4">
                Clear
            </button> */}
        </div>
    );
};

export default DistanceFilter;