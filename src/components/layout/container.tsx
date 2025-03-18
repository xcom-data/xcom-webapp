export default function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className='mx-auto flex flex-col min-h-svh md:max-w-[80%] '>
            {children}
        </div>
    )
}
