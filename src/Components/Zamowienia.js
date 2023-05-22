import axios from "axios";
import globalStore from "../Store/GlobalStore";
import { useState, useEffect } from "react";

const Zamowienia = () => {
    const user = globalStore.getUser;
    const [zamowienia, setZamowienia] = useState([]);
    const getOrders = async () => {
        try {
            const user_id = user.id_uzytkownika;
            const response = await axios.post("http://localhost:3001/api/getOrder", {
                user_id
            });
            if(response.status === 200)
            {
                setZamowienia(response.data);
                console.log(zamowienia);
            }
        }
        catch(error)
        {
            console.error(error);
        }
    };

    useEffect(() => {
        getOrders();
    }, []);

    
    
        

    return ( 

        <>
            <div style={{textAlign:"center"}}>
                <h1>Twoje zamówienia</h1>
                <ul style={{display:"inline-block",textAlign:"left"}}>
                    {zamowienia?.map(zamowienie => (
                        <li key={zamowienie.zamowienie_id}>Nr zamówienia: {zamowienie.zamowienie_id} Data zamówienia: {zamowienie.zamowienie_data.slice(0, -14)}</li>
                    ))}
                </ul>
            </div>
        </>

     );
}
 
export default Zamowienia;