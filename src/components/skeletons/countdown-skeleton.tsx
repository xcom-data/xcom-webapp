import { Skeleton } from '../ui/skeleton'

export default function CountdownSkeleton() {
    return (
        <section className='flex flex-col items-center'>
            <div className='mx-auto flex w-3/5 flex-row justify-evenly py-1'>
                <Skeleton className='h-24 w-[600px] p-4' />
            </div>
        </section>
    )
}
