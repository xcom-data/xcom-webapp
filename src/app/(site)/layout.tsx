import React from 'react'
import Container from '@/components/container'
import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Sitelayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <Container>
            <Header />
            <section className='mx-4'>{children}</section>
            <Footer />
        </Container>
    )
}
