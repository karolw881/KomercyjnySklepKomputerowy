import ProductList from "./ProductList";
import { useState } from "react";
import {BsLaptop} from 'react-icons/bs'
import Grid from '@mui/material/Grid'; // Grid version 1
import { observer } from "mobx-react";
import globalStore from "../Store/GlobalStore";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Icon } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import AddToList from "./AddToList";
import DeleteIcon from '@mui/icons-material/Delete'; 
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";
import AddToCart from "./AddToCart";



const Products = observer(( {kategoria} ) => {
    const user = globalStore.getUser;
    const [isLogged,setIsLogged] = useState(false);
    const [products, setProducts] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);

    const theme = createTheme({
      palette: {
        mode: "dark",
      },
    });


  useEffect(() => {
    if(user)
    {
      setIsLogged(true);
      if(user.rola === "admin")
      {
        setIsAdmin(true);
      }
    }
      

    axios.get('http://localhost:3001/api/produkty')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const filteredProducts = kategoria
  ? products.filter(product => product.kategoria === kategoria)
  : products;
  
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


  async function addProduct(produkt_id){

    try{
        const user_id = user.id_uzytkownika;
        const response = await axios.post("http://localhost:3001/api/addKoszyk", {
            produkt_id, user_id
        });

        if(response.status === 200)
        {
                console.log("Dodano do koszyka!");
                succcesNotify("Dodano do koszyka!");
        }
        else{
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
        <Grid container spacing={2} maxHeight={10000} maxWidth={1202} margin="auto" justifyContent="center" textAlign="center" borderTop="1px solid white" marginTop={5}>
            {filteredProducts.map(product => (
            <Grid width={400} item key={product.id_produktu}>
            <Link to="/ProductInfo" state={product}>
            <img className="product-img" src={require(`../images/${product.zdjecie}`)} alt={product.nazwa} />
            <h3>{product.nazwa}</h3>
            <p>{product.cena + ' zł'}</p>
            <p>{product.specyfikacje}</p>
            </Link>
            {isLogged && <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}><AddToList productID={product.id_produktu} /><AddToCart produktID={product.id_produktu}/>{isAdmin && (<> <IconButton><DeleteProduct produktID={product.id_produktu}/></IconButton> <IconButton><EditProduct produktID={product.id_produktu}/></IconButton> </>)}</div>}
            
            
          </Grid>
          
            ))}
            <ToastContainer/>
        </Grid>
        </>
     );
})
 
export default Products;