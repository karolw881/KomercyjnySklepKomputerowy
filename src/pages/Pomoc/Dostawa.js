import { Accordion, Typography, AccordionSummary, AccordionDetails, ThemeProvider, createTheme } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const dostawaData = [
    {
        question: "Czy oferujecie darmową wysyłkę?",
        answer: "Tak, oferujemy darmową wysyłkę na wszystkie zamówienia powyżej 100 złotych.",
      },
      {
        question: "Jaki jest czas dostawy?",
        answer: "Czas dostawy zależy od lokalizacji. Zazwyczaj wysyłka trwa od 2 do 5 dni roboczych.",
      },
      {
        question: "Czy mogę śledzić moje zamówienie?",
        answer: "Tak, po wysłaniu zamówienia otrzymasz e-mail z numerem przesyłki, którym będziesz mógł śledzić status dostawy.",
      },
      {
        question: "Czy oferujecie międzynarodową wysyłkę?",
        answer: "Tak, realizujemy wysyłki międzynarodowe. Koszt i czas dostawy będą zależeć od kraju docelowego.",
      },
    // Dodaj inne pytania i odpowiedzi tutaj
  ];

const Dostawa = () => {
    return ( 
        <ThemeProvider theme={darkTheme}>
            <Typography variant="h5" sx={{marginBottom:2}}>Dostawa</Typography>
      {dostawaData.map((item, index) => (
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
 
export default Dostawa;