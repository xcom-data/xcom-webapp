'use client'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import FormSponsor2 from '@/components/forms/form-sponsor2'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function SponsorFormDialog() {
    const [open, setOpen] = useState(false)

    const handleCloseDialog = () => {
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button> Legg til Sponsor </Button>
            </DialogTrigger>
            <DialogContent className='max-w-4xl'>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                </DialogHeader>
                <FormSponsor2 onSave={handleCloseDialog} />
            </DialogContent>
        </Dialog>
    )
}
