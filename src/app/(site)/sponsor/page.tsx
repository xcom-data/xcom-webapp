import nordicestate_img from '@/assets/img/nordic.jpg'
import knowit_img from '@/assets/img/knowit.png'
import kantega_img from '@/assets/img/kantega_logo.png'

import SponsorInformation from '@/components/sponsor-information'

const sponsors = [
    {
        sponsorName: 'Kantega',
        sponsorText:
            'Kantega er en arbeidsplass litt utenom det vanlige "Siden 2003 har vi bygget opp et av landets sterkeste fagmiljøer innen design, teknologi og rådgivning. Vi har gjort dette på vår egen måte, og i dag er vi ca. 200 kolleger med kontorer i Oslo, Bergen og Trondheim. Det finnes mange ansatteide selskaper i verden, men det er få steder hvor alle ansatte eier like mye. Slik er det i Kantega - det gjør eiermodellen vår ganske unik. Det spiller ingen rolle om du er administrerende direktør, utvikler eller kantineansvarlig. Hver rolle er viktig på sin måte, og derfor vil vi at alle skal eie like mye.',
        sponsorImage: kantega_img
    },
    {
        sponsorName: 'Nordic Estate',
        sponsorText:
            'Nordic Estate AS er et eiendomselskap etablert 2008 Nordic Estate AS har som hovedoppgave å eie og utvikle eiendom, herunder også utvikling av større og mindre tomtearealer. Eier eiendommer primært i Trondheim, både bolig- og næringseiendom. Vi er et selskap med korte beslutningsveier og personlig engasjement, der vi leier inn de tjenester vi til enhver tid trenger. Eies av selskapet Nordic Holding Group, som eies av Kent Holding v/Roger I. Kent og Investor v/Inge Lilleøkdal.',
        sponsorImage: nordicestate_img
    },
    {
        sponsorName: 'KnowIt',
        sponsorText:
            'I Knowit jobber vi med å gjøre våre kunders virksomheter klare for fremtiden. Å forme en ny fremtid krever spisskompetanse på digitalisering. Med strategiske, kreative og tekniske ferdigheter kombinerer vi den kompetansen med ambisjonen om å skape et mer bærekraftig og menneskelig samfunn. Vi er over 4000 eksperter og spesialister som sammen med kunder og samarbeidspartnere utvikler innovative løsninger. Disse bidrar til å skape et bærekraftig og menneskelig samfunn der vi selv ønsker å bo og utvikle oss. Du finner våre løsninger i alle deler av samfunnet – fra skole, omsorg og myndigheter til e-handel, forsvar og mobilitet. Vi leverer løsningene gjennom våre forretningsområder Solutions, Experience, Connectivity og Insight.',
        sponsorImage: knowit_img
    }
]

export default function Sponsor() {
    return (
        <main className='border-b'>
            <h1 className='mb-4 text-4xl font-bold'>Sponsorer</h1>
            <hr className='my-4 border-t border-gray-300' />
            {sponsors.map((sponsor, index) => (
                <SponsorInformation
                    key={index}
                    sponsorName={sponsor.sponsorName}
                    sponsorText={sponsor.sponsorText}
                    sponsorImage={sponsor.sponsorImage}
                />
            ))}
        </main>
    )
}
