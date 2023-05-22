import { Accordion, Typography, AccordionSummary, AccordionDetails, ThemeProvider, createTheme } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const wsparcieData = [
    {
        question: "Czy oferujecie wsparcie techniczne?",
        answer: "Tak, oferujemy wsparcie techniczne dla naszych produktów. Jeśli masz problemy techniczne lub pytania dotyczące obsługi, skontaktuj się z naszym działem obsługi klienta.",
      },
      {
        question: "Jak mogę uzyskać informacje o statusie mojego zamówienia?",
        answer: "Możesz sprawdzić status swojego zamówienia, logując się na swoje konto w sklepie internetowym. Tam znajdziesz aktualne informacje o przetwarzaniu i wysyłce zamówienia.",
      },
      {
        question: "Czy mogę zwrócić produkt, jeśli nie spełnia moich oczekiwań?",
        answer: "Tak, akceptujemy zwroty produktów w ciągu 14 dni od daty zakupu, jeśli produkt jest w nienaruszonym stanie. Skontaktuj się z naszym działem obsługi klienta w celu rozpoczęcia procesu zwrotu.",
      },
      {
        question: "Czy oferujecie instrukcje obsługi dla swoich produktów?",
        answer: "Tak, większość naszych produktów jest dostarczana z instrukcjami obsługi. Jeśli nie otrzymałeś instrukcji wraz z produktem, skontaktuj się z nami, a postaramy się dostarczyć Ci niezbędne informacje.",
      },
  ];

const Wsparcie = () => {
    return ( 
        <ThemeProvider theme={darkTheme}>
            <Typography variant="h5" sx={{marginBottom:2}}>Wsparcie</Typography>
      {wsparcieData.map((item, index) => (
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
 
export default Wsparcie;