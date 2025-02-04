import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger
} from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/ui/app-sidebar'
import { cookies } from 'next/headers'

export default async function AdminLayout({
    children
}: {
    children: React.ReactNode
}) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get('sidebar:state')?.value === 'true'

    return (
        <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />

            <SidebarInset>
                <main className='p-4'>
                    <SidebarTrigger />
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
