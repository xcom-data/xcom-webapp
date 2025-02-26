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
import { Button } from './ui/button'
import { Pencil, Trash2 } from 'lucide-react'

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
                        <Button size='icon' variant='destructive'>
                            <Trash2 />
                        </Button>
                        <Button
                            size='icon'
                            className='bg-green-600 hover:bg-green-800'
                        >
                            <Pencil />
                        </Button>
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
