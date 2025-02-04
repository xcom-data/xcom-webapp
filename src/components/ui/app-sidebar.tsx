import {
    ArrowLeft,
    Calendar,
    Users,
    CircleDollarSign,
    CircleHelp
} from 'lucide-react'
;<CircleHelp />
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuAction,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent
} from '@/components/ui/sidebar'
import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'
import SidebarMenuActiveButton from './sidebar-menu-active-button'

// Menu items.
const items = [
    {
        title: 'Sponsor',
        url: '/admin/sponsor',
        icon: CircleDollarSign
    },
    {
        title: 'FAQ',
        url: '/admin/faq',
        icon: CircleHelp
    },
    {
        title: 'Om oss',
        url: '/admin/about',
        icon: Users
    },
    {
        title: 'Program',
        url: '/admin/program',
        icon: Calendar
    }
]

export function AppSidebar() {
    return (
        <Sidebar collapsible='icon' variant='inset'>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link
                                href='/'
                                className='text-sky-700 hover:text-sky-600'
                            >
                                <ArrowLeft />
                                <span> Hjemmeside</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel> Dashboard </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map(item => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuActiveButton
                                        href={item.url}
                                        icon={<item.icon />}
                                        title={item.title}
                                    />
                                    <SidebarMenuAction className='peer-data-[active=true]/menu-button:opacity-100' />
                                </SidebarMenuItem>
                            ))}
                            <SidebarMenuItem>
                                {' '}
                                <ThemeToggle />{' '}
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
