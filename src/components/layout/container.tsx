export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='mx-auto flex min-h-svh flex-col md:max-w-[80%]'>
            {children}
        </div>
    )
}
