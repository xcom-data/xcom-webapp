'use client'

import { ThemeProvider } from 'next-themes'
import ReactQueryProvider from '@/utils/providers/ReactQueryProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute='class'
            defaultTheme='light'
            disableTransitionOnChange
            enableSystem
        >
            <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
    )
}
