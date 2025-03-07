'use client'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog'
import SponsorForm from '@/components/forms/sponsor-form'
import FAQForm from '@/components/forms/faq-form'
import ProgramForm from '@/components/forms/program-form'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function SponsorFormDialog({
    title,
    formType
}: {
    title: string
    formType: string
}) {
    const [open, setOpen] = useState(false)

    const handleCloseDialog = () => {
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button> Legg til {title} </Button>
            </DialogTrigger>
            <DialogContent className='max-w-4xl'>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                </DialogHeader>

                {formType === 'sponsor' && (
                    <SponsorForm onSave={handleCloseDialog} />
                )}
                {formType === 'faq' && <FAQForm onSave={handleCloseDialog} />}
                {formType === 'program' && (
                    <ProgramForm onSave={handleCloseDialog} />
                )}
            </DialogContent>
        </Dialog>
    )
}
