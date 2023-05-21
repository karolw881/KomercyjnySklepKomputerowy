import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const convertToStars = (averageRating) => {
  const MAX_STARS = 5;
  const fullStars = Math.floor(averageRating);
  const hasHalfStar = averageRating % 1 !== 0;

  // Tworzenie tablicy z ikonami gwiazdek
  const stars = Array.from({ length: MAX_STARS }, (_, index) => {
    if (index < fullStars) {
      return <StarIcon key={index} />;
    } else if (index === fullStars && hasHalfStar) {
      return <StarHalfIcon key={index} />;
    } else {
      return <StarBorderIcon key={index} />;
    }
  });

  return stars;
};

const RatingToStars = ({ averageRating }) => {
  const stars = convertToStars(averageRating);

  return <>{stars}</>;
};

export default RatingToStars;
