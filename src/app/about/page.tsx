import BoardMember from '@/components/board-member'
import une_img from '@/assets/img/Une.jpg'
import amalie_img from '@/assets/img/Amalie.jpg'
import anette_img from '@/assets/img/Anette.jpg'
import camilla_img from '@/assets/img/Camilla.jpg'
import christine_img from '@/assets/img/Christine.jpg'
import hannaF_img from '@/assets/img/HannaF.jpg'
import hannaK_img from '@/assets/img/Hanna.jpg'
import jenny_img from '@/assets/img/Jenny.jpg'
import johan_img from '@/assets/img/Johan.jpg'
import julie_img from '@/assets/img/Julie.jpg'
import kaisa_img from '@/assets/img/Kaisa.jpg'
import karos_img from '@/assets/img/Karos.jpg'
import maria_img from '@/assets/img/Maria.jpg'
import molly_img from '@/assets/img/Molly.jpg'
import oda_img from '@/assets/img/Oda.jpg'
import simen_img from '@/assets/img/Simen.jpg'
import sindy_img from '@/assets/img/Sindy.jpg'
import siri_img from '@/assets/img/Siri.jpg'
import tobias_img from '@/assets/img/Tobias.jpg'

export default function About(){

const boardMembers = [
    {name: "Une Marie Stimo", role: "Leder", img: une_img, mail:"unestimo@xcomdata.no"},
    {name: "Christine Schei Sunnevåg", role: "Nestleder", img: christine_img, mail:"christinesunnevag@xcomdata.no"},
    {name: "Camilla Jensen", role: "Økans", img: camilla_img, mail:"camillajensen@xcomdata.no"},
    {name: "Amalie Johansen Vik", role: "Bedrift", img: amalie_img, mail:"amalievik@xcomdata.no"},
    {name: "Kaisa Øyre Larsen", role: "Bedrift", img: kaisa_img, mail:"kaisalarsen@xcomdata.no"},
    {name: "Sindy Shan", role: "Bedrift", img: sindy_img, mail:"sindyshan@xcomdata.no"},
    {name: "Siri Wikeland", role: "Bedrift", img: siri_img, mail:"siriwikeland@xcomdata.no"},
    {name: "Anette Wiken Lund", role: "Sponsor", img: anette_img, mail:"anettelund@xcomdata.no"},
    {name: "Molly Vangen", role: "Sponsor", img: molly_img, mail:"mollyvangen@xcomdata.no"},
    {name: "Hanna Katle Fjon", role: "Sponsor", img: hannaF_img, mail:"hannafjon@xcomdata.no"},
    {name: "Karos Hemn", role: "Turansvarlig", img: karos_img, mail: "karoshemn@xcomdata.no"},
    {name: "Hanna Kongelf", role: "Tur", img: hannaK_img, mail:"hannakongelf@xcomdata.no"},
    {name: "Julie Amundsen Wolff", role: "Tur", img: julie_img, mail: "juliewolff@xcomdata.no"},
    {name: "Oda Bang-Olsen", role: "Tur", img: oda_img, mail:"odaolsen@xcomdata.no"},
    {name: "Tobias Osvik Brekke", role: "Webansvarlig", img: tobias_img, mail:"tobias@xcomdata.no"},
    {name: "Jenny Müller", role: "Web", img: jenny_img, mail:"jennymuller@xcomdata.no"},
    {name: "Maria Wembstad", role: "Festansvarlig", img: maria_img, mail:"mariawembstad@xcomdata.no"},
    {name: "Johan Legreid", role: "Fest", img: johan_img, mail:"johan@xcomdata.no"},
    {name: "Simen Steinsland", role: "Fest", img: simen_img, mail:"simensteinsland@xcomdata.no"},
]

    return (
        <main className="mx-4 border-b pb-4">
            
        <h1 className="text-4xl font-bold mb-2">Styret XCOM 2025</h1>
        <hr className="my-4 border-t border-gray-300" />

        
        <h4 className='mb-8'> Velkommen til XCOM Data 2025! XCOM Data 2025 er ekskursjonskomiteen for 3. klasse Datateknologi ved NTNU.</h4>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full mx-auto'>
            {boardMembers.map((member, index) => (
                <BoardMember key={index} name={member.name} role={member.role} url={member.img} mail={member.mail}/>
            ))}
        </div>

        </main>
    ) 
}