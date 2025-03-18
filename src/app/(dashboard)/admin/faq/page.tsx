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
import FAQFormDialog from '@/components/forms/faq-form-dialog'
import { LoaderCircle } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/lib/initSupabase'
import { FAQ } from '@/lib/definitions'
import { deleteFAQ } from '@/actions/deleteFAQ'

const fetchFAQs = async () => {
    const { data } = await supabase
        .from('FAQ')
        .select('*')
        .order('question', { ascending: true })
    return data ?? []
}

function FAQTable() {
    const {
        data: faqs,
        isLoading,
        refetch
    } = useQuery({
        queryKey: ['faq'],
        queryFn: fetchFAQs
    })

    supabase
        .channel('table-db-changes')
        .on(
            'postgres_changes',
            {
                event: '*',
                schema: 'public',
                table: 'FAQ'
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
                        <FAQFormDialog />
                    </TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className='w-[400px]'>FAQs</TableHead>
                            <TableHead className='mx-1 max-w-10 text-right'></TableHead>
                            <TableHead className='w-8 text-right'></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {faqs &&
                            faqs.map((faq: FAQ) => (
                                <CustomTableRow
                                    key={faq.id}
                                    title={faq.question}
                                    id={faq.id}
                                    handleDelete={deleteFAQ}
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
            <h1 className='text-2xl font-semibold'>FAQ</h1>

            <FAQTable />
        </section>
    )
}
