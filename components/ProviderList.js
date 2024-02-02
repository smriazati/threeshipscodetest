import ServiceProvider from '../components/ServiceProvider';

const ProviderList = ({ providers }) => {
    return (
        <div>
            {providers && providers.length > 0 ? (
                <ul>
                    {providers.map((provider) => (
                        <li key={provider._id}>
                            <ServiceProvider key={provider._id} provider={provider} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No provider available</p>
            )}
        </div>
    );
};

export default ProviderList;
