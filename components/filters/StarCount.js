import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const StarCountFilter = ({ selectedStarCount, onChange }) => {
    const [listVisible, setListVisible] = useState(false);
    const starOptions = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];

    const handleClear = () => {
        onChange([]);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setListVisible(!listVisible)}
                className="border border-solid rounded border-gray-300 uppercase px-4 py-2 flex items-center font-bold text-gray-700"
            >
                {selectedStarCount !== null ? `${selectedStarCount} stars` : 'Star Rating'}
                <span className="ml-2 text-blue-500">
                    <FontAwesomeIcon icon={faAngleDown} className={`h-4 w-4 inline-block transform ${listVisible ? 'rotate-180' : ''}`} />
                </span>
            </button>
            <select
                value={selectedStarCount || 'all'}
                onChange={onChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
            >
                <option value="all">All</option>
                {starOptions.map((count) => (
                    <option key={count} value={count}>
                        {count} stars
                    </option>
                ))}
            </select>
            {/* <button
                onClick={handleClear}
                className="absolute right-0 top-0 bg-blue-500 text-white px-2 py-1 rounded"
            >
                Clear
            </button> */}
        </div>

    );
};

export default StarCountFilter;
