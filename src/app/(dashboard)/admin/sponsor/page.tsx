'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'
import CustomTableRow from '@/components/custom-tablerow'
import SponsorFormDialog from '@/components/forms/sponsor-form-dialog'
import { LoaderCircle } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/lib/initSupabase'
import { Sponsor } from '@/lib/definitions'
import { deleteSponsor } from '@/actions/deleteSponsor'

const fetchSponsors = async () => {
    const { data } = await supabase
        .from('Sponsors')
        .select('*')
        .order('name', { ascending: true })
    return data ?? []
}

function SponsorTable() {
    const {
        data: sponsors,
        isLoading,
        refetch
    } = useQuery({
        queryKey: ['sponsors'],
        queryFn: fetchSponsors
    })

    supabase
        .channel('table-db-changes')
        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'Sponsors'
            },
            () => {
                refetch()
            }
        )
        .subscribe()

    return (
        <div>
            {isLoading ? (
                <LoaderCircle />
            ) : (
                <Table className='w-full'>
                    <TableCaption>
                        <SponsorFormDialog />
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-[100px]'>
                                Sponsorer
                            </TableHead>
                            <TableHead className='mx-1 max-w-10 text-right'></TableHead>
                            <TableHead className='w-8 text-right'></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {sponsors &&
                            sponsors.map((sponsor: Sponsor) => (
                                <CustomTableRow
                                    key={sponsor.id}
                                    title={sponsor.name}
                                    id={sponsor.id}
                                    handleDelete={deleteSponsor}
                                />
                            ))}
                    </TableBody>
                </Table>
            )}
        </div>
    )
}

export default function DashboardSponsor() {
    return (
        <section className='mx-auto max-w-3xl space-y-8 py-10'>
            <h1 className='text-2xl font-semibold'>Sponsorer</h1>

            <SponsorTable />
        </section>
    )
}
