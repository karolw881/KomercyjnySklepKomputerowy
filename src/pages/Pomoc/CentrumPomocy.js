import { Accordion, Typography, AccordionSummary, AccordionDetails, ThemeProvider, createTheme } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const centrumPomocyData = [
    {
        question: "Jak złożyć zamówienie?",
        answer: "Aby złożyć zamówienie, dodaj wybrane produkty do koszyka, przejdź do procesu zamówienia i podaj niezbędne informacje, takie jak adres dostawy i dane płatności.",
      },
      {
        question: "Czy mogę zmienić lub anulować zamówienie?",
        answer: "Jeśli chcesz dokonać zmiany lub anulować zamówienie, skontaktuj się z naszym działem obsługi klienta jak najszybciej. Postaramy się pomóc, ale nie możemy zagwarantować możliwości dokonania zmiany lub anulowania zamówienia po jego złożeniu.",
      },
      {
        question: "Czy oferujecie darmową dostawę?",
        answer: "Tak, dla zamówień powyżej określonej kwoty (np. 100 złotych) oferujemy darmową dostawę.",
      },
      {
        question: "Jaki jest czas dostawy?",
        answer: "Czas dostawy zależy od lokalizacji i dostępności produktu. Przeważnie wysyłka trwa od 2 do 5 dni roboczych.",
      },
  ];

const CentrumPomocy = () => {
    return ( 
        <ThemeProvider theme={darkTheme}>
            <Typography variant="h5" sx={{marginBottom:2}}>Centrum Pomocy</Typography>
      {centrumPomocyData.map((item, index) => (
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
 
export default CentrumPomocy;