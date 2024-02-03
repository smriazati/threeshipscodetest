import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FilterButton = ({ onClick, listVisible, buttonText }) => {
    return (
        <button
            onClick={onClick}
            className="border border-solid rounded border-gray-300 uppercase px-4 py-2 flex items-center font-bold text-gray-700"
        >
            {buttonText}
            <span className="ml-2 text-blue-500">
                <FontAwesomeIcon icon={faAngleDown} className={`h-4 w-4 inline-block transform ${listVisible ? 'rotate-180' : ''}`} />
            </span>
        </button>
    );
};

export default FilterButton;
