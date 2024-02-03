import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const LoadingIcon = () => {
    return (
        <div className="flex flex-col gap-y-2 justify-center items-center h-screen">
            <div className="animate-spin text-blue-500">
                <FontAwesomeIcon icon={faSpinner} size="3x" />
            </div>
            <p className="mt-2 text-md font-semibold text-pulse">Loading providers</p>
        </div>
    );
};

export default LoadingIcon;
