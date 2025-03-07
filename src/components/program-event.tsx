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
    DialogTrigger,
    DialogFooter
} from '@/components/ui/dialog'
import { Button } from './ui/button'

function formatTime(time: string) {
    return time.slice(0, 5)
}

export default function ProgramEventObject({
    programEvent
}: {
    programEvent: ProgramEvent
}) {
    return (
        <Card className='mx-4 mb-4'>
            <CardHeader>
                <div className='flex items-center justify-between'>
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
                        <DialogTrigger asChild>
                            <Button variant='outline'>Les mer</Button>
                        </DialogTrigger>
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
