'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute='class'
            defaultTheme='light'
            disableTransitionOnChange
            enableSystem
        >
            {children}
            <ToasterProvider />
        </ThemeProvider>
    )

    function ToasterProvider() {
        const { resolvedTheme } = useTheme()

        return (
            <Toaster
                richColors
                closeButton
                position='top-center'
                theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
            />
        )
    }
}
