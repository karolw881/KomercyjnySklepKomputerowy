import axios from "axios";
import globalStore from "../Store/GlobalStore";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from "react-toastify";

const DeleteProduct = ({produktID}) => {
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

 

    async function deleteProduct(){
        try {
            const id_produktu = produktID;
            console.log(id_produktu);
            const response = await axios.post("http://localhost:3001/api/deleteProductDB", {
                id_produktu
            });

            if (response.status === 200) {
                window.location.reload();
                succcesNotify("Usunięto produkt!");
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
    <>
        <IconButton onClick={() => deleteProduct()}><DeleteIcon /></IconButton>
    </> );
}
 
export default DeleteProduct;