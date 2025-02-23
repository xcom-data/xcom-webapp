import React from 'react'
import { TableCell, TableRow } from '@/components/ui/table'
import { deleteSponsor } from '@/actions/deleteSponsor'

import { Pencil, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sponsor } from '@/lib/definitions'

export default function SponsorTableRow({ sponsor }: { sponsor: Sponsor }) {
    return (
        <TableRow>
            <TableCell className='font-medium'> {sponsor.name} </TableCell>
            <TableCell className='text-right'>
                <Button size='icon' className='bg-green-600 hover:bg-green-800'>
                    <Pencil />
                </Button>
            </TableCell>
            <TableCell className='text-right'>
                <Button
                    size='icon'
                    variant='destructive'
                    onClick={async () => await deleteSponsor(sponsor.id)}
                >
                    <Trash2 />
                </Button>
            </TableCell>
        </TableRow>
    )
}
