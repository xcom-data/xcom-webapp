'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SidebarMenuButton } from '@/components/ui/sidebar'
import React from 'react'

export default function SidebarMenuActiveButton({
    href,
    icon,
    title
}: {
    href: string
    icon: React.ReactNode
    title: string
}) {
    const pathname = usePathname()
    const isActive = pathname === href
    return (
        <SidebarMenuButton asChild isActive={isActive}>
            <Link href={href}>
                {icon}
                <span>{title}</span>
            </Link>
        </SidebarMenuButton>
    )
}
