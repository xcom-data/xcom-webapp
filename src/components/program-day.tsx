/* eslint-disable react/jsx-key */
import { programDay} from "@/lib/definitions"
import ProgramEventObject from "./program-event"



export default function ProgramDayObject({programDay}:{programDay:programDay}){
    return(
        <main>
        <h4 className='mb-4 font-bold'>{programDay.date}</h4>
        <div>
            {programDay.programevents.map((event) => (<ProgramEventObject programEvent={event}/>))}
            
        </div>
        </main>
)
}

