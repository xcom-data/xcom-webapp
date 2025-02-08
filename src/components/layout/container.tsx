export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='mx-auto flex min-h-screen max-w-[1200px] flex-col'>
            {children}
        </div>
    )
}
