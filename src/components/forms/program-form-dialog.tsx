'use client'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import ProgramForm from './program-form'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function ProgramFormDialog() {
    const [open, setOpen] = useState(false)

    const handleCloseDialog = () => {
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button> Legg til Program </Button>
            </DialogTrigger>
            <DialogContent className='max-w-4xl'>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                </DialogHeader>
                <ProgramForm onSave={handleCloseDialog} />
            </DialogContent>
        </Dialog>
    )
}
