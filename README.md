# Fulgul-lui-Koch
FRACTALI- Fulgul lui Koch
Acest cod, scris în JavaScript folosind biblioteca p5.js, creează o interfață grafică simplă în care utilizatorul introduce un nivel (grad de recursivitate), iar programul desenează treptat un fractal sub forma fulgului lui Koch. La fiecare nivel, fractalul devine mai complex.

Programul începe prin definirea unor variabile globale: input și button pentru interacțiunea cu utilizatorul, MAX pentru a reține nivelul maxim dorit, și currentLevel, care urmărește nivelul curent al desenului în timpul generării.

În funcția setup(), se creează o suprafață de desen de 500x570 pixeli și se configurează interfața: un câmp de input pentru introducerea nivelului și un buton care, odată apăsat, declanșează procesul de generare. Desenul nu se actualizează automat (datorită apelului noLoop()), ci doar atunci când este nevoie.

Când utilizatorul apasă butonul, se apelează funcția startGeneration(), care verifică dacă nivelul introdus este valid (mai mare decât 0). Dacă este, programul setează nivelul curent la 1 și pornește generarea fractalului prin generateImage().

Funcția generateImage() este responsabilă cu desenarea efectivă a fractalului. Se începe prin curățarea ecranului și afișarea titlului "Fulgul lui Koch". Apoi, se desenează triunghiul de bază, echilateral, care formează suportul pentru desenarea fractalului. Fiecare latură a triunghiului este desenată prin apeluri separate ale funcției paint(), care este responsabilă pentru recursivitate.

În plus, culorile fractalului variază în funcție de nivel, folosind funcția map() pentru a crea un efect vizual plăcut prin modificarea valorilor RGB.

Funcția recursivă paint(len, it) desenează un mic triunghi echilateral la poziția curentă și, dacă nu s-a atins nivelul maxim, împarte segmentul în trei părți. Pentru fiecare dintre ele, se aplică transformări de poziționare și rotație astfel încât să respecte regula generării Fulgului lui Koch: o secțiune centrală "ieșită în afară" sub forma unui colț.

La final, desenul este salvat ca imagine .png.
