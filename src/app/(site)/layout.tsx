import React from 'react'
import Container from '@/components/layout/container'
import Footer from '@/components/layout/footer'
import NavBar from '@/components/layout/navBar'

export default function Sitelayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <Container>
            <NavBar />
            <section className='mx-4'>{children}</section>
            <Footer />
        </Container>
    )
}
