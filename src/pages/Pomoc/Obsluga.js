import { Accordion, Typography, AccordionSummary, AccordionDetails, ThemeProvider, createTheme } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const obslugaData = [
    {
        question: "Jak mogę skontaktować się z obsługą klienta?",
        answer: "Możesz skontaktować się z naszym działem obsługi klienta drogą mailową lub telefonicznie. Dane kontaktowe znajdziesz na naszej stronie internetowej w sekcji 'Kontakt'.",
      },
      {
        question: "Jak długo muszę czekać na odpowiedź od obsługi klienta?",
        answer: "Staramy się odpowiedzieć na wszystkie zapytania jak najszybciej. Zazwyczaj otrzymasz odpowiedź w ciągu 24-48 godzin roboczych.",
      },
      {
        question: "Czy oferujecie wsparcie techniczne?",
        answer: "Tak, oferujemy wsparcie techniczne dla naszych produktów. Jeśli masz problemy techniczne lub pytania dotyczące obsługi, skontaktuj się z naszym działem obsługi klienta.",
      },
      {
        question: "Czy jestem uprawniony do zwrotu lub wymiany produktu?",
        answer: "Tak, jeśli produkt jest wadliwy lub niezgodny z zamówieniem, masz prawo do zwrotu lub wymiany. Skontaktuj się z naszym działem obsługi klienta w celu uzyskania dalszych informacji.",
      },
  ];
  

const Obsluga = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <Typography variant="h5" sx={{marginBottom:2}}>Obsługa</Typography>
      {obslugaData.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-content-${index}`} id={`faq-header-${index}`}>
            <Typography variant="subtitle1">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </ThemeProvider>
  );
}

export default Obsluga;
