import axios from "axios";
import { useEffect, useState } from "react";

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

    return ( <><h5>Średnia ocena: {avg}/5</h5></> );
}
 
export default RatingAVG;