'use client'

import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <Button
            size='sm'
            variant='ghost'
            onClick={() => {
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
            }}
        >
            {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
            <span className='sr-only'>Toggle theme</span>
        </Button>
    )
}
