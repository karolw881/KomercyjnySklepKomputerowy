import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Typography, Box, Button, Modal } from "@mui/material";
import globalStore from "../Store/GlobalStore";
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateListModal = observer(() => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const navigate = useNavigate();
    const user = globalStore.getUser;
  const [isLogged, setIsLogged] = useState(false);
  // Modal setup
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
    }
  }, []);

  async function createList(nazwa) {
    
    try{
      const user_id = user.id_uzytkownika;
      const response = await axios.post("http://localhost:3001/api/addList", {
        user_id, nazwa
      });

      if(response.status === 200)
      {
              console.log("Stworzno liste!");
              handleClose();
              window.location.reload();
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

  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const list = {
      name: data.get("name"),
    };
    if (list.name == null || list.name.trim().length === 0) {
      console.log("Nazwa listy pusta");
      
    } else {
      console.log(user.id_uzytkownika);
      console.log(list.name);
      createList(list.name);
    }
  };
  

    return ( 

        
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={handleOpen} sx={{color:"#d3d3d3"}}>Stwórz listę</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              {/* modal content */}
              <ThemeProvider theme={theme}>
              <Box sx={style} component="form"
            noValidate
            onSubmit={handleSubmit}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}}>
                  Nazwij swoją listę
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 ,textAlign:"center"}}>
                  <TextField required autoFocus id="name" name="name" label="Nazwa" variant="outlined" sx={{color:"#d3d3d3"}}/>
                  <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Stwórz
            </Button>
                </Typography>
              </Box>
              </ThemeProvider>
            </Modal>
            {/* end modal content */}
        </div>

     );
})
 
export default CreateListModal;