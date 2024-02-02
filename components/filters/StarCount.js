const StarCountFilter = ({ selectedStarCount, onChange }) => {
    const starOptions = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]; // Include half stars

    return (
        <div>
            <label>Filter by Star Count:</label>
            <select value={selectedStarCount || 'all'} onChange={onChange}>
                <option value="all">All</option>
                {starOptions.map((count) => (
                    <option key={count} value={count}>
                        {count} stars
                    </option>
                ))}
            </select>
        </div>
    );
};

export default StarCountFilter;
