import axios from "axios";
import globalStore from "../Store/GlobalStore";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddToCart = ({ produktID }) => {
    const user = globalStore.getUser;
    const [isLogged, setIsLogged] = useState(false);

    const succcesNotify = (string) =>
    toast.success(string, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    useEffect(() => {
        if (user)
            setIsLogged(true);
    });

    async function addProduct(){
        try {
            const produkt_id = produktID;
            const user_id = user.id_uzytkownika;
            console.log(produkt_id);
            console.log(user_id);
            const response = await axios.post("http://localhost:3001/api/addKoszyk", {
                produkt_id, user_id
            });

            if (response.status === 200) {
                console.log("Dodano do koszyka!");
                succcesNotify("Dodano do koszyka!");
            }
            else {
                console.log("error");
            }
        }

        catch(error)
    {
        console.error(error);
    }
    }



    return (
        <>{isLogged && (<>
            <IconButton sx={{marginLeft:1}} onClick={() => addProduct()}><AddShoppingCartIcon /></IconButton>
            <ToastContainer/>
            </>
        )}</>
    );
}

export default AddToCart;