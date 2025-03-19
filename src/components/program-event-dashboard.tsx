import { ProgramEvent } from '@/lib/definitions'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle
} from '@/./components/ui/card'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from '@/components/ui/dialog'
import ProgramEditForm from './forms/program-edit-dialog'
import ProgramDeleteButton from './ui/program-delete-button'

function formatTime(time: string) {
    return time.slice(0, 5)
}

export default function ProgramEventDashBoard({
    programEvent
}: {
    programEvent: ProgramEvent
}) {
    return (
        <Card className='mx-4 mb-4'>
            <CardHeader>
                <div className='flex items-center'>
                    <div>
                        <CardTitle>{programEvent.name}</CardTitle>
                        <CardDescription>
                            <p>
                                {formatTime(programEvent.startTime)}-
                                {formatTime(programEvent.endTime)},{' '}
                                {programEvent.place}
                            </p>
                        </CardDescription>
                    </div>
                    <Dialog>
                        <div className='flex w-full justify-end gap-2'>
                            <ProgramEditForm programEvent={programEvent} />
                            <ProgramDeleteButton id={programEvent.id} />
                        </div>
                        <DialogContent className='sm:max-w-md'>
                            <DialogHeader>
                                <DialogTitle>{programEvent.name}</DialogTitle>
                                <DialogDescription>
                                    {programEvent.description}
                                </DialogDescription>
                            </DialogHeader>
                            <DialogFooter className='sm:justify-start'></DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </CardHeader>
        </Card>
    )
}
