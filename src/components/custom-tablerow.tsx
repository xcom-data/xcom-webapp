import React from 'react'
import { TableCell, TableRow } from '@/components/ui/table'

import { Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CustomTableRow({
    title,
    id,
    handleDelete
}: {
    title: string
    id: string
    handleDelete: (id: string) => void
}) {
    return (
        <TableRow>
            <TableCell className='font-medium'> {title} </TableCell>
            <TableCell className='text-right'>
                <div className='flex flex-row justify-end gap-2'>
                    <Button
                        size='icon'
                        className='bg-green-600 hover:bg-green-800'
                    >
                        <Pencil />
                    </Button>
                    <Button
                        size='icon'
                        variant='destructive'
                        onClick={async () => await handleDelete(id)}
                    >
                        <Trash2 />
                    </Button>
                </div>
            </TableCell>
        </TableRow>
    )
}
