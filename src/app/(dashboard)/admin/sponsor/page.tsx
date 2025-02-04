import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'
import SponsorTableRow from '@/components/ui/sponsor-tablerow'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DashboardSponsor() {
    return (
        <section className='mx-auto max-w-3xl space-y-8 py-10'>
            <h1 className='text-2xl font-semibold'>Sponsorer</h1>
            <Table className='w-full'>
                <TableCaption>
                    {' '}
                    <Button>
                        {' '}
                        <Link href='/admin/sponsor/createsponsor'>
                            {' '}
                            Add Sponsor{' '}
                        </Link>{' '}
                    </Button>{' '}
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[100px]'>Navn</TableHead>
                        <TableHead className='mx-1 max-w-10 text-right'>
                            Edit
                        </TableHead>
                        <TableHead className='w-8 text-right'>Delete</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <SponsorTableRow sponsorname='Sponsor 1' />
                    <SponsorTableRow sponsorname='Sponsor 2' />
                </TableBody>
            </Table>
        </section>
    )
}
