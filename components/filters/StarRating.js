import { useState } from 'react';
import FilterButton from './Button';

const StarRatingFilter = ({ selectedStarCount, onChange }) => {
    const [listVisible, setListVisible] = useState(false);
    const starOptions = [0, 1, 2, 3, 4, 5];

    const filterButtonText = selectedStarCount !== null ? `${selectedStarCount} star${selectedStarCount !== 1 ? 's' : ''}` : 'Star Rating'

    return (
        <div className="relative">
            <FilterButton onClick={() => setListVisible(!listVisible)} listVisible={listVisible} buttonText={filterButtonText} />
            <select
                value={selectedStarCount || 'all'}
                onChange={onChange}
                className="absolute inset-0 opacity-0 cursor-pointer appearance-none bg-white p-2 rounded"
            >
                <option value="all">All</option>
                {starOptions.map((count) => (
                    <option key={count} value={count}>
                        {count} star{count !== 1 ? 's' : ''}
                    </option>
                ))}
            </select>
        </div>

    );
};

export default StarRatingFilter;
