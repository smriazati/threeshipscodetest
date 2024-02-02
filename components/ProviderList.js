import ProviderCard from '../components/ProviderCard';

const ProviderList = ({ providers, onResetFilters }) => {
    return (
        <div>
            {providers && providers.length > 0 ? (
                <div>
                    <p className='text-center mb-4 text-gray-500'>Showing {providers.length} provider{providers.length !== 1 ? 's' : ''}</p>
                    <ul className="space-y-4 px-4">
                        {providers.map((provider) => (
                            <li key={provider._id}>
                                <ProviderCard key={provider._id} provider={provider} />
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className='flex flex-col justify-center items-center'>
                    <p className='mb-2'>No providers available</p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded uppercase" onClick={onResetFilters}>
                        Reset filters
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProviderList;
