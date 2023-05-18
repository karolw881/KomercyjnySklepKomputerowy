import axios from "axios";
import globalStore from "../../Store/GlobalStore";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Typography, Box, Modal } from "@mui/material";
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";


const AddProductModal = () => {

    const categories = [
        {
          value: 'Komputery',
          label: 'Komputery',
        },
        {
          value: 'Smartfony',
          label: 'Smartfony',
        },
        {
          value: 'Gaming',
          label: 'Gaming',
        },
        {
          value: 'Peryferia',
          label: 'Peryferia',
        },
        {
            value: 'Akcesoria',
            label: 'Akcesoria',
        },
        {
            value: 'Podzespoly',
            label: 'Podzespoły',
        },
        {
            value: 'Telewizory',
            label: 'Telewizory',
        },
        {
            value: 'Promocje',
            label: 'Promocje',
        },
      ];

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
    // Modal setup

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const list = {
          nazwa: data.get("nazwa"),
          cena: data.get("cena"),
          zdjecie: data.get("zdjecie"),
          opis: data.get("opis"),
          kategoria: data.get("kategoria"),
          specyfikacje: data.get("specyfikacje"),
        };
        if (list.nazwa == null || list.nazwa.trim().length === 0 || list.cena.trim().length === 0
        || list.zdjecie.trim().length === 0 || list.opis.trim().length === 0
        || list.kategoria.trim().length === 0 || list.specyfikacje.trim().length === 0) {
          console.log("Nazwa produktu pusta");
          errorNotify("Jedno z pól jest puste");
          
        } else {
          addProduct(list.nazwa, list.cena, list.zdjecie, list.opis, list.kategoria, list.specyfikacje);
        }
      };

      async function addProduct(nazwa, cena, zdjecie, opis, kategoria, specyfikacje)
      {
        try {
            const response = await axios.post("http://localhost:3001/api/addProductDB", { 
                nazwa, cena, zdjecie, opis, kategoria, specyfikacje
            });

            if(response.status === 200)
            {
                console.log("Dodano produkt");
                handleClose();
                succcesNotify("Dodano produkt do bazy");
            }

            else
            {
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
        <Button variant="contained" onClick={handleOpen} sx={{color:"#d3d3d3"}}>Dodaj produkt do bazy</Button>
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
            onSubmit={handleSubmit}
            >
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign:"center"}}>
                  Dodaj produkt
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 ,textAlign:"center"}}>
                  <TextField required autoFocus id="nazwa" name="nazwa" label="Nazwa produktu" variant="outlined" sx={{color:"#d3d3d3",marginBottom:"10px"}}/>
                  <TextField required autoFocus id="cena" name="cena" label="Cena produktu" variant="outlined" sx={{color:"#d3d3d3",marginBottom:"10px"}}/>
                  <TextField required autoFocus id="zdjecie" name="zdjecie" label="Nazwa i rozszerzenie zdjęcia" variant="outlined" sx={{color:"#d3d3d3",marginBottom:"10px"}}/>
                  <TextField required autoFocus id="opis" name="opis" label="Opis produktu" variant="outlined" sx={{color:"#d3d3d3",marginBottom:"10px"}}/>
                  <TextField
                    id="kategoria"
                    name="kategoria"
                    select
                    label="Kategoria"
                    defaultValue="Promocje"
                    helperText="Wybierz kategorie"
                    >
                    {categories.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                    </TextField>
                  <TextField required autoFocus id="specyfikacje" name="specyfikacje" label="Specyfikacje produktu" variant="outlined" sx={{color:"#d3d3d3"}}/>
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
            {/* end modal content */}
            <ToastContainer />
    </>
    );
}
 
export default AddProductModal;