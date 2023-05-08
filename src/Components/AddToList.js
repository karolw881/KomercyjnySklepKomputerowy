import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Typography, Box, Button, Modal } from "@mui/material";
import globalStore from "../Store/GlobalStore";
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const AddToList = ({productID}) => {

    const theme = createTheme({
        palette: {
          mode: "dark",
        },
      });

    const user = globalStore.getUser;
    const [isLogged, setIsLogged] = useState(false);
    // Modal setup
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [nazwyList, setNazwyList] = useState([]);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#333',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  // end Modal setup
  //check if user is signed in
  useEffect(() => {
    if (!user) {

    } else {
      setIsLogged(true);
      getNazwyList();
    }
  }, []);

  const getNazwyList = async () => {
    try {
      const user_id = user.id_uzytkownika;
      const response = await axios.post("http://localhost:3001/api/listNames", {
        user_id
      });
      if (response.status === 200) {
        setNazwyList(response.data);
      }
    }
    catch (error) {
      console.error(error);
    }
  };

  const addProduct = async (lista_id) => {
    try {
      const id_produktu = productID;
      const response = await axios.post("http://localhost:3001/api/addListProduct", {
        lista_id, id_produktu
      });
      if (response.status === 200) {
        console.log("added Succesfully");
        handleClose();
      }
    }
    catch (error) {
      console.error(error);
    }
  };

    return ( 

        <><IconButton onClick={handleOpen}><FavoriteIcon/></IconButton>
        <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {/* modal content */}
              <ThemeProvider theme={theme}>
              <Box sx={style} component="form">
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}}>
                  Wybierz listę do której dodasz produkt
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 ,textAlign:"center"}}>
                {nazwyList.map(lista => (<>
                    <Button onClick={() => addProduct(lista.id)} variant='contained' sx={{marginBottom:"10px",backgroundColor:"#333",color:"#d3d3d3"}} key={lista.id}>{lista.nazwa}</Button><br/>
                    </>
                ))}
                    
                </Typography>
              </Box>
              </ThemeProvider>
            </Modal>
            {/* end modal content */}
            </>
     );
}
 
export default AddToList;