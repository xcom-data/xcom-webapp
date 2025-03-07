'use client'
import { Button } from './button'
import { createClient } from '@/utils/supabase/client'
import { redirect } from 'next/navigation'

export default function LogoutButton() {
    const supabase = createClient()

    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (error) {
            redirect('/error')
        }
        redirect('/')
    }

    return (
        <Button className='w-32' onClick={signOut}>
            {' '}
            Sign out{' '}
        </Button>
    )
}
