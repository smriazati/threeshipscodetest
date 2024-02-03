import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const ProviderStarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                const isFullStar = starValue <= fullStars;
                const isHalfStar = starValue === fullStars + 1 && hasHalfStar;

                return (
                    <FontAwesomeIcon
                        key={index}
                        icon={isFullStar ? faStar : isHalfStar ? faStarHalfAlt : faStarRegular}
                        style={{ color: 'gold' }}
                        className="h-6 w-6"
                    />
                );
            })}
        </div>
    );
};

export default ProviderStarRating;