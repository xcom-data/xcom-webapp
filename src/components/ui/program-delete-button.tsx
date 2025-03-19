import React from 'react'
import { Button } from './button'
import { Trash2 } from 'lucide-react'
import { deleteEvent } from '@/actions/deleteEvent'
import { toast } from 'sonner'

const handleDelete = async (id: string) => {
    const result = await deleteEvent(id)
    if (result.error) {
        toast('Noe gikk galt')
    } else toast('Aktivitet slettet')
}

export default function ProgramDeleteButton({ id }: { id: string }) {
    return (
        <Button
            size='icon'
            variant='destructive'
            onClick={async () => await handleDelete(id)}
        >
            <Trash2 />
        </Button>
    )
}
