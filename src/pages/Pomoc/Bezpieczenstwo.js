import { Accordion, Typography, AccordionSummary, AccordionDetails, ThemeProvider, createTheme } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const bezpieczenstwoData = [
    {
        question: "Jak zapewniamy bezpieczeństwo danych osobowych?",
        answer: "Dbamy o ochronę Twoich danych osobowych i stosujemy zaawansowane metody szyfrowania, takie jak protokół SSL, aby chronić Twoje dane podczas transmisji. Ponadto, nie udostępniamy Twoich danych osobowych stronom trzecim bez Twojej zgody.",
      },
      {
        question: "Czy moje płatności są bezpieczne?",
        answer: "Tak, zapewniamy bezpieczne płatności poprzez renomowane bramki płatności. Twoje dane płatności są chronione i nie przechowujemy informacji o Twojej karcie kredytowej.",
      },
      {
        question: "Jakie środki podjęliście w celu zabezpieczenia serwisu przed atakami?",
        answer: "Stosujemy różne środki bezpieczeństwa, takie jak firewalle, monitorowanie aktywności, regularne aktualizacje oprogramowania i skanowanie zabezpieczeń w celu ochrony przed atakami hakerskimi i próbami naruszenia bezpieczeństwa.",
      },
      {
        question: "Czy moje dane są chronione przed nieautoryzowanym dostępem?",
        answer: "Tak, stosujemy środki ochrony, takie jak silne hasła, autoryzowane dostępy tylko dla uprawnionych pracowników i systemy monitorowania, aby zapobiec nieautoryzowanemu dostępowi do Twoich danych.",
      }
  ];

const Bezpieczenstwo = () => {
    return ( 
        <ThemeProvider theme={darkTheme}>
            <Typography variant="h5" sx={{marginBottom:2}}>Bezpieczeństwo</Typography>
      {bezpieczenstwoData.map((item, index) => (
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
 
export default Bezpieczenstwo;