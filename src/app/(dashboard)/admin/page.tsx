import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import LogoutButton from '@/components/ui/logout-button'

export default async function AdminPage() {
    const supabase = await createClient()

    const { data, error } = await supabase.auth.getUser()
    if (error || !data?.user) {
        redirect('/login')
    }

    return (
        <main className='flex w-full justify-between'>
            <h1 className='mb-4 text-3xl font-bold'>Hello {data.user.email}</h1>
            <LogoutButton />
        </main>
    )
}
