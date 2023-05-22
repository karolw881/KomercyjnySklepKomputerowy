import { Accordion, Typography, AccordionSummary, AccordionDetails, ThemeProvider, createTheme } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const produktyData = [
    {
        question: "Jak mogę sprawdzić dostępność produktu?",
        answer: "Na stronie produktu znajdziesz informacje o dostępności. Jeśli produkt jest dostępny, będzie to oznaczone jako 'Dostępny'.",
      },
      {
        question: "Czy oferujecie gwarancję na produkty?",
        answer: "Tak, wszystkie nasze produkty objęte są gwarancją producenta. Szczegóły dotyczące gwarancji znajdziesz na stronie produktu lub w dokumentacji dołączonej do produktu.",
      },
      {
        question: "Czy oferujecie zwroty produktów?",
        answer: "Tak, akceptujemy zwroty produktów w ciągu 14 dni od daty zakupu, jeśli produkt jest w nienaruszonym stanie. Szczegółowe informacje dotyczące procedury zwrotów znajdziesz na naszej stronie internetowej.",
      },
      {
        question: "Czy mogę dokonać zmiany zamówienia po złożeniu?",
        answer: "Jeśli chcesz dokonać zmiany w zamówieniu, skontaktuj się z naszym działem obsługi klienta jak najszybciej. Postaramy się pomóc, ale nie możemy zagwarantować możliwości zmiany zamówienia po jego złożeniu.",
      },
    // Dodaj inne pytania i odpowiedzi tutaj
  ];

const Produkty = () => {
    return ( 
        <ThemeProvider theme={darkTheme}>
            <Typography variant="h5" sx={{marginBottom:2}}>Produkty</Typography>
      {produktyData.map((item, index) => (
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
 
export default Produkty;