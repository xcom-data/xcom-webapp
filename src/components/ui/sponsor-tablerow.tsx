import React from 'react'
import {
    TableCell,
    TableRow
} from '@/components/ui/table'

import { Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SponsorTableRow({
    sponsorname
}: {
    sponsorname: string
}) {
    return (
        <TableRow>
            <TableCell className='font-medium'> {sponsorname} </TableCell>
            <TableCell className='text-right'>
                {' '}
                <Button size='icon' className='bg-green-600 hover:bg-green-800'>
                    {' '}
                    <Pencil />{' '}
                </Button>{' '}
            </TableCell>
            <TableCell className='text-right'>
                {' '}
                <Button size='icon' variant='destructive'>
                    {' '}
                    <Trash2 />{' '}
                </Button>{' '}
            </TableCell>
        </TableRow>
    )
}
