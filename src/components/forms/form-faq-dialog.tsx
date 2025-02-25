'use client'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import FormFAQ from '@/components/forms/form-faq'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function FAQFormDialog() {
    const [open, setOpen] = useState(false)

    const handleCloseDialog = () => {
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button> Legg til Spørsmål </Button>
            </DialogTrigger>
            <DialogContent className='max-w-4xl'>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                </DialogHeader>
                <FormFAQ onSave={handleCloseDialog} />
            </DialogContent>
        </Dialog>
    )
}
