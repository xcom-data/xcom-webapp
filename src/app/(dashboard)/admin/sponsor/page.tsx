import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'
import SponsorTableRow from '@/components/ui/sponsor-tablerow'

import SponsorFormDialog from '@/components/forms/form-sponsor-dialog'

export default function DashboardSponsor() {
    return (
        <section className='mx-auto max-w-3xl space-y-8 py-10'>
            <h1 className='text-2xl font-semibold'>Sponsorer</h1>
            <Table className='w-full'>
                <TableCaption>
                    <SponsorFormDialog />
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[100px]'>Navn</TableHead>
                        <TableHead className='mx-1 max-w-10 text-right'></TableHead>
                        <TableHead className='w-8 text-right'></TableHead>
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
