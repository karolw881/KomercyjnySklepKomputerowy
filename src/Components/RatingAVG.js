import axios from "axios";
import { useEffect, useState } from "react";
import RatingToStars from "./StarRating";

const RatingAVG = ({productID}) => {
    const [avg, setAvg] = useState();
    const getAVG = async () => {
        try {
          const produkt_id = productID;
          const response = await axios.post("http://localhost:3001/api/ratingAVG", {
    produkt_id
  });
  if (response.status === 200) {
    setAvg(response.data);
  }
        } catch (error) {
          console.error(error);
        }
      };

    useEffect(() => {
        getAVG();
    });

    return ( <><h5>Średnia ocena: <RatingToStars averageRating={avg}/></h5></> );
}
 
export default RatingAVG;