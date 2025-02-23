/* eslint-disable react/jsx-key */
import ProgramDayObject from "@/components/program-day"


export default function Program() {
    const ProgramDayData=[
        {
          "id": "day1",
          "date": "2025-04-10",
          "programevents": [
            {
              "id": "event1",
              "name": "Avreise til Bologna",
              "time": "07:30-10:30",
              "place": "Oslo Lufthavn → Bologna Guglielmo Marconi Airport",
              "description": "Flytur fra Oslo til Bologna. Husk pass og sjekk inn i tide!"
            },
            {
              "id": "event2",
              "name": "Innsjekk på hotell",
              "time": "11:30-12:30",
              "place": "Hotel Porta San Mamolo",
              "description": "Vi sjekker inn på hotellet og får tid til å slappe av før dagens program starter."
            },
            {
              "id": "event3",
              "name": "Lunsj på lokal trattoria",
              "time": "13:00-14:30",
              "place": "Trattoria da Me",
              "description": "Vi nyter ekte bolognesisk pasta og lokale spesialiteter."
            },
            {
              "id": "event4",
              "name": "Guidet tur i Bologna sentrum",
              "time": "15:00-17:00",
              "place": "Piazza Maggiore",
              "description": "En lokal guide viser oss de viktigste severdighetene i Bologna, inkludert de to tårnene, Piazza Maggiore og Basilica di San Petronio."
            },
            {
              "id": "event5",
              "name": "Middag og sosialt samvær",
              "time": "19:30-22:00",
              "place": "Ristorante I Portici",
              "description": "En koselig middag hvor vi oppsummerer dagen og nyter italienske retter."
            }
          ]
        },
        {
          "id": "day2",
          "date": "2025-04-11",
          "programevents": [
            {
              "id": "event6",
              "name": "Besøk til Universitetet i Bologna",
              "time": "09:00-11:00",
              "place": "Università di Bologna",
              "description": "Vi besøker Europas eldste universitet og får en presentasjon om dets historie og forskning."
            },
            {
              "id": "event7",
              "name": "Workshop: Italiensk matlaging",
              "time": "11:30-13:30",
              "place": "Cucina Italiana Cooking School",
              "description": "Vi lærer å lage tradisjonell pasta og tiramisu fra profesjonelle kokker."
            },
            {
              "id": "event8",
              "name": "Lunsj med egenlaget mat",
              "time": "13:30-14:30",
              "place": "Cucina Italiana Cooking School",
              "description": "Vi spiser den deilige maten vi har laget under matlagingskurset."
            },
            {
              "id": "event9",
              "name": "Vinsmaking i Emilia-Romagna",
              "time": "15:00-18:00",
              "place": "Vingård utenfor Bologna",
              "description": "Vi besøker en vingård og lærer om vinproduksjon i regionen, med smaksprøver inkludert."
            },
            {
              "id": "event10",
              "name": "Avslutningsmiddag",
              "time": "19:30-22:30",
              "place": "Osteria Francescana",
              "description": "Vi avslutter ekskursjonen med en fantastisk middag på en av Italias beste restauranter."
            }
          ]}]
    
    return (
        <main>
            <h1 className='mb-4 text-4xl font-bold'> Program </h1>
            <h4 className='mb-8'>
                Under finner du programmet for eksursjonen 2025, merk at det kan
                forekomme endringer underveis
            </h4>
            <div>{ProgramDayData.map((day)=>(<ProgramDayObject programDay={day}/>))}
            </div>
        </main>
    )
}
