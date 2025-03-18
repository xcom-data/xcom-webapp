import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Pencil } from 'lucide-react'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import { ProgramEvent } from '@/lib/definitions'
import ProgramEditForm from './program-edit-form'

export default function ProgramEditDialog({
    programEvent
}: {
    programEvent: ProgramEvent
}) {
    const [open, setOpen] = useState(false)
    const handleCloseDialog = () => {
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size='icon' className='bg-green-600 hover:bg-green-800'>
                    <Pencil />
                </Button>
            </DialogTrigger>
            <DialogContent className='max-h-[90vh] max-w-4xl overflow-y-scroll'>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                </DialogHeader>
                <ProgramEditForm
                    programEvent={programEvent}
                    onSave={handleCloseDialog}
                />
            </DialogContent>
        </Dialog>
    )
}
