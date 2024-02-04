import ProviderCard from './Card';

const ProviderList = ({ providers }) => {
    return (
        <ul className="space-y-4 px-4">
            {providers.map((provider) => (
                <li key={provider._id}>
                    <ProviderCard key={provider._id} provider={provider} />
                </li>
            ))}
        </ul>
    );
};

export default ProviderList;
