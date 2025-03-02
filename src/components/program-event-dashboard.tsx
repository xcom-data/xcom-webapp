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
import { deleteEvent } from '@/actions/deleteEvent'
import { toast } from 'sonner'

function formatTime(time: string) {
    return time.slice(0, 5)
}

const handleDelete = async (id: string) => {
    const result = await deleteEvent(id)
    if (result.error) {
        toast('Noe gikk galt')
    } else toast('Aktivitet slettet')
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
                            <Button
                                size='icon'
                                className='bg-green-600 hover:bg-green-800'
                            >
                                <Pencil />
                            </Button>
                            <Button
                                size='icon'
                                variant='destructive'
                                onClick={async () =>
                                    await handleDelete(programEvent.id)
                                }
                            >
                                <Trash2 />
                            </Button>
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
