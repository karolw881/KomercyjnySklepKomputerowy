import axios from "axios";
import globalStore from "../Store/GlobalStore";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Typography, Box, Modal } from "@mui/material";
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";

const AddReview = ({productID}) => {
  const user = globalStore.getUser;

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

    const errorNotify = (string) =>
    toast.error(string, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const reviews = [
    {
      value: '1',
      label: '1',
    },
    {
      value: '2',
      label: '2',
    },
    {
      value: '3',
      label: '3',
    },
    {
      value: '4',
      label: '4',
    },
    {
      value: '5',
      label: '5',
    },
  ];

    const theme = createTheme({
        palette: {
          mode: "dark",
        },
      });
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
  async function reviewAdd(produkt_id, tresc, ocena) {
    
    try{
      const uzytkownik_id = user.id_uzytkownika;
      const response = await axios.post("http://localhost:3001/api/addReview", {
        produkt_id, uzytkownik_id, tresc, ocena
      });

      if(response.status === 200)
      {
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
      review: data.get("review"),
      rating: data.get("rating"),
    };
    if (list.review == null || list.review.trim().length === 0) {
      errorNotify("Tresć oceny pusta!");
      
    } else {
      reviewAdd(productID, list.review, list.rating);
      handleClose();
      succcesNotify("Dodano ocenę!");
    }
  };


    return ( 
    <>
    <Button onClick={handleOpen}>Oceń produkt</Button>
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
                  Dodaj opinię
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 ,textAlign:"center"}}>
                  <TextField fullWidth required autoFocus id="review" name="review" label="Treść" variant="outlined" sx={{color:"#d3d3d3", marginBottom:"20px"}}/>
                  <TextField
                    id="rating"
                    name="rating"
                    select
                    label="Ocena"
                    helperText="Wybierz ocenę"
                    defaultValue="1"
                    >
                    {reviews.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                  <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Dodaj
            </Button>
                </Typography>
              </Box>
              </ThemeProvider>
            </Modal>
            <ToastContainer />
            {/* end modal content */}
    </>
     );
}
 
export default AddReview;