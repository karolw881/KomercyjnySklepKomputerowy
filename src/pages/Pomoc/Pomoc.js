import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CachedIcon from '@mui/icons-material/Cached';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import NavBar from "../../Components/Navbar";
import Categories from "../../Components/Categories";
import Footer from "../../Components/Footer";
import './Pomoc.css';
import { Link } from 'react-router-dom';
import HelpIcon from '@mui/icons-material/Help';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DevicesIcon from '@mui/icons-material/Devices';
import { Box, Typography, IconButton, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import ExpandMoreIcon
import FAQ from './FAQ';
import Dostawa from './Dostawa';
import Produkty from './Produkty';
import Bezpieczenstwo from './Bezpieczenstwo';
import Obsluga from './Obsluga';
import Wsparcie from './Wsparcie';
import CentrumPomocy from './CentrumPomocy';


const Pomoc = () => {
  const [section, setSection] = useState("FAQ");

  const icons = [
    { icon: HelpIcon, text: "FAQ" },
    { icon: LocalShippingIcon, text: "Dostawa" },
    { icon: DevicesIcon, text: "Produkty" },
    { icon: HealthAndSafetyIcon, text: "Bezpieczeństwo" },
    { icon: CachedIcon, text: "Obsługa" },
    { icon: ContactSupportIcon, text: "Wsparcie" },
    { icon: HelpCenterIcon, text: "Centrum pomocy" }
  ];

  const changeSection = (text) => {
    setSection(text);
  };

  const renderSection = () => {
    switch (section) {
      case "FAQ":
        return (
          <FAQ />
          // Dodaj więcej pytanie/odpowiedzi dla sekcji "FAQ"
        );
      case "Dostawa":
        return (
          <Dostawa />
        );
      case "Produkty":
        return (
          <Produkty />
        );
      case "Bezpieczeństwo":
        return (
          <Bezpieczenstwo />
        );
      case "Obsługa":
        return (
          <Obsluga />
        );
      case "Wsparcie":
        return (
          <Wsparcie />
        );
      case "Centrum pomocy":
        return (
          <CentrumPomocy />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <NavBar />
      <Categories />
      <Typography variant="h3" sx={{ margin: "10px 0", textAlign: "center" }}>
        Centrum pomocy
      </Typography>
      <Box sx={{ width: 1000, margin: "auto" }}>
        <Typography variant="h5" sx={{ textAlign: "left", marginTop: 5 }}>
          W jaki sposób możemy ci pomóc?
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          {icons.map((item, index) => (
            <IconButton key={index} onClick={() => changeSection(item.text)}>
              <div key={index} style={{ display: "flex", flexDirection: "column" }}>
                <item.icon sx={{ fontSize: 100, margin: "0 15px" }} />
                <Typography variant="body2">{item.text}</Typography>
              </div>
            </IconButton>
          ))}
        </Box>

        <Box sx={{ marginTop: 5, marginBottom: 5 }}>
          {renderSection()}
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Pomoc;
