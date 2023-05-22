import { Accordion, Typography, AccordionSummary, AccordionDetails, ThemeProvider, createTheme } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const faqData = [
    {
      question: "Czy oferujecie darmową wysyłkę?",
      answer: "Tak, oferujemy darmową wysyłkę na wszystkie zamówienia powyżej 100 złotych.",
    },
    {
      question: "Jaki jest czas dostawy?",
      answer: "Czas dostawy zależy od lokalizacji. Zazwyczaj wysyłka trwa od 2 do 5 dni roboczych.",
    },
    {
      question: "Czy przyjmujecie zwroty?",
      answer: "Tak, akceptujemy zwroty w ciągu 14 dni od daty zakupu. Produkt musi być w nienaruszonym stanie.",
    },
    {
      question: "Jak mogę skontaktować się z obsługą klienta?",
      answer: "Możesz skontaktować się z naszym działem obsługi klienta drogą mailową lub telefonicznie. Znajdziesz dane kontaktowe na naszej stronie internetowej.",
    },
    // Dodaj inne pytania i odpowiedzi tutaj
  ];
  

const FAQ = () => {
  return (
    <ThemeProvider theme={darkTheme}>
    <Typography variant="h5" sx={{marginBottom:2}}>FAQ</Typography>
      {faqData.map((item, index) => (
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

export default FAQ;
