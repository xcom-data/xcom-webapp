export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='mx-auto flex min-h-svh max-w-[1200px] flex-col'>
            {children}
        </div>
    )
}
