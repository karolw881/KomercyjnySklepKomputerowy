import globalStore from "../Store/GlobalStore";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Typography, Box, Button, Modal } from "@mui/material";
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const DisplayLists = observer(() => {

  const user = globalStore.getUser;
  const [isLogged, setIsLogged] = useState(false);
  const [nazwyList, setNazwyList] = useState([]);
  const [produktyList, setProduktyList] = useState([]);
  const [openList, setOpenList] = useState({});


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
  //check if user is signed in
  useEffect(() => {
    if (!user) {

    } else {
      setIsLogged(true);
      getNazwyList();
      getProduktyList();
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
        setOpenList(
          response.data.reduce((acc, cur) => ({ ...acc, [cur.id]: false }), {})
        );
      }
    }
    catch (error) {
      console.error(error);
    }
  };

  const getProduktyList = async () => {
    try {
      const user_id = user.id_uzytkownika;
      const response = await axios.post("http://localhost:3001/api/listProducts", {
        user_id
      });
      if (response.status === 200) {
        setProduktyList(response.data);
        console.log(response.data);
      }
    }
    catch (error) {
      console.error(error);
    }
  };


  const deleteLista = async (lista) => {
    try {
      const lista_id = lista;
      const response = await axios.post("http://localhost:3001/api/removeList", {
        lista_id
      });
      if (response.status === 200) {
        console.log(lista_id);
        getNazwyList();
        errorNotify("Usunięto listę!");
      }
    }
    catch (error) {
      console.error(error);
    }
  };

  const deleteProdukt = async (id_rekordu) => {
    try {
      const response = await axios.post("http://localhost:3001/api/removeListProduct", {
        id_rekordu
      });
      if (response.status === 200) {
        getProduktyList();
        errorNotify("Usunięto produkt z listy");
      }
    }
    catch (error) {
      console.error(error);
    }
  };

  const handleClick = (id) => {
    setOpenList((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (

    <>
      {!isLogged && (
        <Typography variant="h3" sx={{ textAlign: "center" }}>Zaloguj się aby zobaczyć swoje listy</Typography>
        )}
          {isLogged && (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "#333" }}>
        <ListSubheader sx={{ bgcolor: "#333", color: "#d3d3d3", fontSize: "1rem", textAlign:"center" }}>Twoje listy</ListSubheader>
        {nazwyList.map((lista) => {
  const isOpen = openList[lista.id];
  return (
    <div key={lista.id}>
      <ListItem sx={{ cursor: "pointer" }} onClick={() => handleClick(lista.id)}>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
        <ListItemText primary={lista.nazwa} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
        <IconButton color="error" onClick={() => deleteLista(lista.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {produktyList.map((produkt) => {
            if (produkt.lista_id === lista.id) {
              return (
                <ListItem sx={{ pl: 5, pr: 5 }} key={produkt.id}>
                  <ListItemIcon>
                    <LabelImportantIcon />
                  </ListItemIcon>
                  <ListItemText primary={produkt.nazwa}/>
                  <IconButton color="error" onClick={() => deleteProdukt(produkt.id)}>
                    <RemoveCircleIcon sx={{fontSize:"1.2rem"}}/>
                  </IconButton>
                </ListItem>
               
              );
            } else {
              return null;
            }
          })}
        </List>
      </Collapse>
    </div>
  );
})}
      </List>
    </Box>
  )}
  <ToastContainer />
</>
);
});

export default DisplayLists;
