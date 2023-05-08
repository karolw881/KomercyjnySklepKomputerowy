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
import { IconButton } from '@mui/material';


const DisplayLists = observer(() => {

  const user = globalStore.getUser;
  const [isLogged, setIsLogged] = useState(false);
  const [nazwyList, setNazwyList] = useState([]);
  const [produktyList, setProduktyList] = useState([]);
  const [openList, setOpenList] = useState({});

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
        <ListSubheader sx={{ bgcolor: "#333", color: "#d3d3d3", fontSize: "1rem" }}>Twoje listy</ListSubheader>
        {nazwyList.map((lista) => {
  const isOpen = openList[lista.id];
  return (
    <div key={lista.id}>
      <ListItem sx={{ cursor: "pointer" }} onClick={() => handleClick(lista.id)}>
        <ListItemIcon>
          <InboxIcon />
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
                <ListItemButton sx={{ pl: 4 }} key={produkt.id_produktu}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary={produkt.nazwa} />
                </ListItemButton>
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
</>
);
});

export default DisplayLists;
